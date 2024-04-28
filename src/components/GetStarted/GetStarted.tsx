import { GetStartedBg } from "../../lib/icons/GetStartedBg";
import { GetStartedBgBottom } from "../../lib/icons/GetStartedBgBottom";

const GetStarted = () => {
  return (
    <div class="relative bottom-72 mt-56 bg-[#F9F9F9] dark:bg-primary">
      <GetStartedBg />
      <GetStartedBgBottom />
      <div class="flex flex-col justify-center items-center gap-6">
        <p class="text-3xl sm:text-5xl sm:leading-[50px] text-center text-main font-extrabold dark:text-white">
          <span class="bg-[#FFF0D9] dark:bg-main">Get Started </span>
          With Irsal
        </p>
        <p class="text-center text-main dark:textwhite text-xl w-[25%]">
          Frybix is hub for managing productivity tasks professionaly and
          efficiently
        </p>
        <div class="flex items-center border p-2 w-[30%] rounded-full bg-white">
          <input
            type="email"
            name="email-address"
            id="email-address"
            autocomplete="email"
            required
            class="w-full min-w-0 appearance-none  bg-white  px-3 py-1.5 text-base text-main placeholder:text-gray-500 sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
            placeholder="Your email"
          />
          <div class="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
            <button
              type="submit"
              class="flex w-full items-center justify-center rounded-full bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
