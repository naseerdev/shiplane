import { type Accessor, type Component } from "solid-js";
import { Completed } from "../../lib/icons/Completed";
import ProgressBar from "../Common/ProgressBar/ProgressBar";




const StepFour: Component = ({ }) => {
  const currentStep: Accessor<number> = () => 4
  return (
    <div
      class="mx-auto mt-0 sm:mt-5 md:mt-10 max-w-[750px] sm:p-[24px] py-[24px] px-[8px] relative"
    >
      <div class="absolute left-[-100px] top-[100px] rounded-full bg-primary dark:bg-primary h-[14px] w-[14px]"></div>
      <div class="px-0 sm:px-[24px] pb-[5px]">
        <p
          class="text-[2.3rem] sm:text-5xl mt-2 leading-[50px] text-center text-main font-extrabold dark:text-white"
        >
          Getting Things Ready for you
        </p>
        <p
          class="mx-auto mt-2 sm:mt-6 mb-6
      p-3 rounded bg-primary text-center text-sm leading-4 sm:leading-8 text-white dark:text-white shadow-md"
        >
          Don't want to wait? No problem. We will share your credentials via email once your app is ready!
        </p>
      </div>
      <ProgressBar currentStep={currentStep} />
      <div class="max-w-[511px] mx-auto mt-4">

        <div class="py-[24px] px-[10px] sm:p-[24px] rounded-[15px]">
          <div class="mb-6">
            <Completed />
          </div>
        </div>

      </div>
    </div>
  );
};

export default StepFour;
