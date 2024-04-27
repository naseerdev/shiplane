import { Arrow } from "../../lib/icons/Arrow";
import { HeroImg } from "../../lib/icons/HeroImg";
import { StarDisable } from "../../lib/icons/StarDisable";
import { StarFill } from "../../lib/icons/StarFill";

const Hero = () => {
  return (
    <div class="flex justify-between mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 mt-20">
      <div class="flex flex-col gap-6">
        <p class="text-[68px] leading-[75px] text-main w-20 font-extrabold dark:text-white">
          Optimized{" "}
          <span class="bg-[#FFF0D9] dark:bg-primary">Deliveries,</span> Maximum{" "}
          <span class="bg-[#FFF0D9] dark:bg-primary">Revenue!</span>
        </p>
        <p class="text-lg leading-[27px] w-[50%] text-main dark:text-white">
          Optimize your shipment journey and transform data into useful business
          insights to reduce costs and achieve goals smartly.
        </p>
        <div class="flex gap-5">
          <input
            type="email"
            placeholder="Hamzashahzad@Xeon.Com"
            class="rounded-full border p-4 w-[35%]"
          />
          <button class="rounded-full bg-primary p-4">
            <Arrow />
          </button>
        </div>
        <div class="flex items-center gap-5">
          <div class="isolate flex -space-x-2 overflow-hidden">
            <img
              class="relative z-30 inline-block h-10 w-10 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <img
              class="relative z-20 inline-block h-10 w-10 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <img
              class="relative z-10 inline-block h-10 w-10 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
              alt=""
            />
          </div>
          <div class="flex flex-col">
            <p class="text-3xl text-main font-bold dark:text-white">2,291</p>
            <p class="text-main dark:text-white">Happy Customers</p>
          </div>
          <div class="border h-8"></div>
          <div class="flex flex-col">
            <p class="text-3xl text-main font-bold dark:text-white ">4.8/5</p>
            <div class="flex items-center">
              {[...Array(4)].map((_, index) => (
                <StarFill />
              ))}
              <StarDisable />
              <p class="ml-3 text-main dark:text-white">Rating</p>
            </div>
          </div>
        </div>
      </div>
      <div class="hidden md:block ">
        <HeroImg />
      </div>
    </div>
  );
};

export default Hero;
