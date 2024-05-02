import { type Component, createSignal } from "solid-js";
import { Completed } from "../../lib/icons/Completed";




const StepFour: Component = ({  }) => {

  return (
    <div
  class="mx-auto mt-0 sm:mt-5 md:mt-10 max-w-[750px] sm:p-[24px] py-[24px] px-[8px] relative"
>
<div class="absolute left-[-100px] top-[100px] rounded-full bg-primary dark:bg-white h-[14px] w-[14px]"></div>
  <div class="px-0 sm:px-[24px] pb-[5px]">
    <p
      class="text-[2.3rem] sm:text-5xl mt-2 leading-[50px] text-center text-main font-extrabold dark:text-white"
    >
Getting Things Ready for you
    </p>
    <p
      class="mx-auto mt-2 sm:mt-6  
      p-3 rounded bg-primary text-center text-sm leading-4 sm:leading-8 text-white dark:text-white shadow-md"
    >
   Don't want to wait? No problem. We will share your credentials via email once your app is ready!
    </p>
  </div>
  <div class="max-w-[511px] mx-auto mt-2">
  <form >
      <div class="py-[24px] px-[10px] sm:p-[24px] border-[#E7EBFF] rounded-[15px] border-solid shadow dark:bg-white">
        <div class="mb-6">
        <Completed />
        </div>
        <p
      class="text-[20px] sm:[23px] mt-2 leading-[26px] text-center font-semibold dark:text-dark"
    >
    Estimated Time : <span class="text-primary dark:text-primary"> 02:00</span>
    </p>
      </div>
    </form>
  {/* <RegistrationStepper client:only="solid-js" /> */}
  </div>
  </div>
  );
};

export default StepFour;
