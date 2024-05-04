import { createSignal, Show, type Component } from "solid-js";
import { createStore } from "solid-js/store";
import {
  checkAvailability,
  numberVerification,
  validateCompanyName,
  validatePhoneNumber,
} from "../../lib/utils/utils";
import InputField from "../InputField/InputField";
import type { CompletedDataInterface, StepTwoDataInterface } from "../../lib/utils/interface";
import PhoneNumberInput from "../PhoneNumber";

interface Props {
  backStep: () => void;
  setStepTwoData: (value: StepTwoDataInterface) => void;
  currentData: CompletedDataInterface
}
const StepTwo: Component<Props> = ({ backStep, setStepTwoData, currentData }) => {
  const { email, ...other } = currentData;
  const [loading, setLoading] = createSignal<boolean>(false);
  const [stepTwoFields, setStepTwoFields] = createStore<StepTwoDataInterface>(other);
  const [errors, setErrors] = createStore<{ [key: string]: string }>({
    name: "",
    companyName: "",
    phoneNumber: "",
  });

  const checkValidation = (): boolean => {
    const nameError = !!stepTwoFields.name ? "" : "Name is required";

    const companyNameError = !!stepTwoFields.companyName
      ? !validateCompanyName(stepTwoFields.companyName)
        ? "Company name cannot contain spaces or special characters."
        : ""
      : "Company name is required";

    const phoneNumberError = !!stepTwoFields.phoneNumber
      ? validatePhoneNumber(stepTwoFields.phoneNumber)
        ? "Please enter a valid 10-digit phone number"
        : ""
      : "Phone Number is required";

    setErrors({
      name: nameError,
      companyName: companyNameError,
      phoneNumber: phoneNumberError,
    });

    if (
      !nameError &&
      !companyNameError &&
      !phoneNumberError
    ) {
      return true
    } else return false
  }

  const handleNextButton = async () => {
    const validationResult = checkValidation()

    if (validationResult) {
      setLoading(true);

      const companyAvailability = await checkAvailability(stepTwoFields.companyName, "company_name")
      if (companyAvailability !== "true") {
        setErrors({ ...errors, companyName: companyAvailability })
        setLoading(false)
      }

      const phoneAvailability = await checkAvailability(stepTwoFields.phoneNumber, "phone_number")
      if (phoneAvailability !== "true") {
        setErrors({ ...errors, phoneNumber: phoneAvailability })
        setLoading(false)
      }
      if (phoneAvailability !== "true" || companyAvailability !== "true") {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      const result = await numberVerification(stepTwoFields.phoneNumber, "phone_number");

      if (result === "pending" || result === "sent" || result === "verified") {
        setStepTwoData({
          name: stepTwoFields.name,
          companyName: stepTwoFields.companyName,
          phoneNumber: stepTwoFields.phoneNumber,
          companyInfo: stepTwoFields.companyInfo,
          numberStatus: result
        });

      } else {
        setErrors({ ...errors, phoneNumber: "Something went wrong with phone number verification please try again" })
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      setLoading(false)

    }
  };

  const handleChangeInput = (value: string, key: string) => {
    setStepTwoFields((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: "" }))
  };
  return (
    <>
      <div class="py-[24px] px-[10px] sm:p-[24px] border-[#E7EBFF] rounded-[15px] border-solid shadow dark:bg-white">
        <div class="mb-6">
          <InputField
            label="Your Name"
            placeholder="Enter Your Name"
            value={stepTwoFields.name}
            onInput={(value) => handleChangeInput(value, "name")}
            error={errors.name}
          />
          <Show when={errors.name}>
            <p class="text-red-500">{errors.name}</p>
          </Show>
        </div>
        <div class="mb-6">
          <InputField
            label="Company Name"
            placeholder="Enter Your Company Name"
            value={stepTwoFields.companyName}
            onInput={(value) => handleChangeInput(value, "companyName")}
            error={errors.companyName}
          />
          <Show when={!!stepTwoFields.companyName}>
            <p class="text-gray-500">Site URL: {stepTwoFields.companyName.replace(/\s/g, '')}.irsal.pk</p>
          </Show>
          <Show when={errors.companyName}>
            <p class="text-red-500">{errors.companyName}</p>
          </Show>
        </div>

        <div class="mb-6">
          <PhoneNumberInput label="Phone Number"
            placeholder="Enter Phone Number without Country Code"
            value={stepTwoFields.phoneNumber}
            onInput={(value) => handleChangeInput(value, "phoneNumber")}
            error={errors.phoneNumber}
          />
          <Show when={errors.phoneNumber}>
            <p class="text-red-500">{errors.phoneNumber}</p>
          </Show>
        </div>

        <div class="relative mt-6">
          <label
            for="phone"
            class="absolute font-semibold top-[-13px] left-2 inline-block bg-white px-1 text-[14px] sm:text-[16px] text-[#6940DA]"
          >
            Company Basic Information
          </label>
          <textarea
            id="companyInfo"
            placeholder="Enter Company Information"
            rows="4"
            value={stepTwoFields.companyInfo}
            onInput={(event) =>
              handleChangeInput(event.currentTarget.value, "companyInfo")
            }
            class="block w-full text-[14px] sm:text-[16px] rounded-md border-[1.7px] px-[10px] py-[1rem] text-gray-900 shadow-sm ring-1 ring-inset ring-[#6940DA] placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary focus-visible:outline-0 sm:leading-6"
          ></textarea>
          <Show when={errors.companyInfo}>
            <p class="text-red-500">{errors.companyInfo}</p>
          </Show>
        </div>

        <button
          onClick={() => handleNextButton()}
          disabled={loading()}
          class="relative flex justify-center items-center tracking-wide rounded-[11px] px-10 py-[11px] sm:py-[18px]  mt-5 mb-3 w-full text-white bg-primary font-semibold shadow-sm hover:bg-primary-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          {
            loading() ?
              <div role="status">
                <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                <span class="sr-only">Loading...</span>
              </div> : "Next"
          }
        </button>
        <button
          disabled={loading()}
          onClick={() => backStep()}
          class="relative items-center border-solid border-[1px] rounded-[11px] px-10 py-[11px] sm:py-[18px] w-full text-primary bg-white font-semibold shadow-sm hover:bg-primary-500 border-primary"
        >
          {" "}
          Back
        </button>
      </div>
    </>
  );
};

export default StepTwo;
