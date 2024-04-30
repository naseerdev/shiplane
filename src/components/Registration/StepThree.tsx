import { createSignal, Show, type Component } from "solid-js";
import InputField from "../InputField/InputField";
import OtpModal from "../OTP";
import SelectMenu from "../Common/SelectMenu";
import { CheckLite } from "../../lib/icons/CheckLite";
import { CheckFill } from "../../lib/icons/CheckFill";


interface Props {
  nextStep: () => void;
  backStep: () => void;
}
const StepThree: Component<Props> = ({ nextStep, backStep }) => {
  const [isChecked1, setIsChecked1] = createSignal(false);
  const [isChecked2, setIsChecked2] = createSignal(false);

  const toggleCheck1 = () => setIsChecked1(!isChecked1());
  const toggleCheck2 = () => setIsChecked2(!isChecked2());
  return (
    <>
      <div class="py-[24px] px-[10px] sm:p-[24px] border-[#E7EBFF] rounded-[15px] border-solid shadow dark:bg-white">
        <div class="mb-6">
          <InputField label="Website Address" placeholder="Website Address" />
        </div>
        <div class="mb-6">
          <SelectMenu label="Which sales channels do you currently sell on" />
        </div>
        <div class="mb-6">
          <SelectMenu label="ho do you currently ship ecommerce orders with" />
        </div>
        <div class="mb-6">
          <SelectMenu label="How many orders per month do you process" />
        </div>

        {/* <div class="relative mb-6">
          <label
            for="name"
            class="absolute font-semibold top-[-13px] left-2 inline-block bg-white px-1 text-[16px] text-[#6940DA]"
          >
            Company Basic Information
          </label>
          <textarea
            placeholder="Enter Phone Number without Country Code"
            rows="4"
            class="block w-full md:text-[16px] rounded-md border-[1.7px] px-[10px] py-[1rem] text-gray-900 shadow-sm ring-1 ring-inset ring-[#6940DA] placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary focus-visible:outline-0 text-[16px] sm:leading-6"
          ></textarea>
        </div> */}
        <div>
          <div class="flex flex-col gap-3 check-list">
            <div class="flex gap-2" onClick={toggleCheck1}>
              <div class="h-[14px] w-[14px] me-2">
                {isChecked1() ? <CheckFill /> : <CheckLite />}
              </div>
              <p class="text-[14px] text-[#1B2149] dark:text-primary font-normal dark:text-[#000]">
                Sign up to our marketing list for helpful ecommerce content,
                product updates and help form our sales teams.
              </p>
            </div>
            <div class="flex gap-2" onClick={toggleCheck2}>
              <div class="h-[14px] w-[14px] me-2">
                {isChecked2() ? <CheckFill /> : <CheckLite />}
              </div>
              <p class="text-[14px] text-[#1B2149] dark:text-primary font-normal dark:text-[#000]">
                I agree to Irsal <a href="" class="text-[#6940DA] font-semibold">Terms and Service</a> and <a href="" class="text-[#6940DA] font-semibold">Privacy Policy</a>.
              </p>
            </div>
          </div>

        </div>


        <button
          onClick={() => nextStep()}
          class="relative items-center tracking-wide rounded-[11px] px-10 py-[11px] sm:py-[18px] my-4 w-full text-white bg-primary font-semibold shadow-sm hover:bg-primary-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          Let’s Start !
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

export default StepThree;
