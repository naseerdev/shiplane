import { Show, type Component } from "solid-js";
import { createStore } from "solid-js/store";
import {
  validateCompanyName,
  validatePhoneNumber,
} from "../../lib/utils/utils";
import InputField from "../InputField/InputField";

interface Props {
  backStep: () => void;
  handleModalOpen: (value: boolean) => void;
}
const StepTwo: Component<Props> = ({ backStep, handleModalOpen }) => {
  const [stepTwoFields, setStepTwoFields] = createStore<{
    [key: string]: string;
  }>({
    name: "",
    companyName: "",
    phoneNumber: "",
    companyInfo: "",
  });
  const [errors, setErrors] = createStore<{ [key: string]: string }>({
    name: "",
    companyName: "",
    phoneNumber: "",
    companyInfo: "",
  });

  const handleNextButton = () => {
    const nameError = !!stepTwoFields.name ? "" : "Name is required";

    const companyInfoError = !!stepTwoFields.companyInfo
      ? ""
      : "Company Information is required";

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
      companyInfo: companyInfoError,
    });

    if (
      !nameError &&
      !companyNameError &&
      !phoneNumberError &&
      !companyInfoError
    ) {
      handleModalOpen(true);
    }
  };

  const handleChangeInput = (value: string, key: string) => {
    setStepTwoFields((prev) => ({ ...prev, [key]: value }));
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
          <Show when={errors.companyName}>
            <p class="text-red-500">{errors.companyName}</p>
          </Show>
        </div>

        <div class="mb-6">
          <InputField
            label="Phone Number"
            placeholder="Enter Your Phone Number"
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
          class="relative items-center tracking-wide rounded-[11px] px-10 py-[11px] sm:py-[18px]  mt-5 mb-3 w-full text-white bg-primary font-semibold shadow-sm hover:bg-primary-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          Next
        </button>
        <button
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
