import { createSignal, Show, type Component } from "solid-js";
import InputField from "../InputField/InputField";
import OtpModal from "../OTP";

interface Props {
  nextStep: () => void;
  backStep: () => void;
}
const StepTwo: Component<Props> = ({ nextStep, backStep }) => {
  const [open, setOpen] = createSignal(false);

  const handleNextButton = () => {
    setOpen(true);
  };

  return (
    <>
      <div class="p-[24px] border-[#E7EBFF] rounded-[15px] border-solid shadow">
        <div class="mb-6">
          <InputField label="Your Name" placeholder="Enter Your Name" />
        </div>
        <div class="mb-6">
          <InputField
            label="Company Name"
            placeholder="Enter Your Company Name"
          />
        </div>

        <div class="relative mt-6">
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
        </div>
      </div>

      <button
        onClick={() => handleNextButton()}
        class="relative items-center tracking-wide rounded-[11px] px-10 py-[18px] my-3 w-full text-white bg-primary font-semibold shadow-sm hover:bg-primary-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        Next
      </button>
      <button
        onClick={() => backStep()}
        class="relative items-center rounded-[11px] px-10 py-[18px] my-3 w-full text-primary bg-white font-semibold shadow-sm hover:bg-primary-500 border-primary"
      >
        {" "}
        Back
      </button>
      <Show when={open()}>
        <OtpModal otpVerified={nextStep} />
      </Show>
    </>
  );
};

export default StepTwo;
