import { type Component } from "solid-js";
import { Completed } from "../../lib/icons/Completed";

const StepFour: Component = () => (
  <form>
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
);


export default StepFour;
