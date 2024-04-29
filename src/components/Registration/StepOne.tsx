import type { Component } from "solid-js";
import InputField from "../InputField/InputField";
interface Props {
  nextStep: () => void;
}
const StepOne: Component<Props> = ({ nextStep }) => {
  return (
    <div class="p-[24px] border-[#E7EBFF] rounded-[15px] border-solid shadow">
      <div class="mb-6">
        <InputField label="Email" placeholder="Enter your email address" />
        <button
          onClick={() => nextStep()}
          class="relative items-center tracking-wide rounded-[11px] px-10 py-[18px] my-3 w-full text-white bg-primary font-semibold shadow-sm hover:bg-primary-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StepOne;
