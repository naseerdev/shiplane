import { CheckFlow } from "../../lib/icons/CheckFlow";

const Carrier = () => {
  return (
    <div class="flex flex-col justify-center items-center mt-24 mx-auto max-w-7xl">
      <p class="text-5xl leading-[50px] text-center text-main font-extrabold dark:text-white">
        Our <span class="bg-[#FFF0D9] dark:bg-primary"> 1000+ Supported</span>{" "}
        Carriers
      </p>
      <div class="w-full">
        <CheckFlow />
      </div>
    </div>
  );
};

export default Carrier;
