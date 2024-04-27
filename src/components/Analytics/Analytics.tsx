import { Chart } from "../../lib/icons/Chart";

const Analytics = () => {
  return (
    <div class="mt-24 mx-auto max-w-screen-2xl">
      <p class="text-5xl leading-[50px] text-center text-main font-extrabold dark:text-white">
        Unlocking Data with
        <span class="bg-[#FFF0D9] dark:bg-primary">Smart Charts</span>
      </p>
      <div class="flex flex-col md:flex-row justify-center items-center mt-16 gap-6">
        <Chart />
        <div class="max-w-[468px] flex flex-col gap-4">
          <p class="text-4xl font-bold text-primary dark:text-white">
            Analytics
          </p>
          <p class="text-lg leading-7 text-main dark:text-white">
            Transform raw data into meaningful insights that captivate and
            engage your audience. You can easily create dynamic and visually
            appealing charts that seamlessly integrate with your website's
            design.
          </p>
          <div class="flex flex-col gap-3">
            <div class="flex gap-2">
              <div class="rounded-full bg-primary dark:bg-white h-5 w-5"></div>
              <p class="text-main dark:text-primary font-bold">
                View all your shipments and parcels in one platform
              </p>
            </div>
            <div class="flex gap-2">
              <div class="rounded-full bg-primary dark:bg-white h-5 w-5"></div>
              <p class="text-main dark:text-primary font-bold">
                View all your shipments and parcels in one platform
              </p>
            </div>
            <div class="flex gap-2">
              <div class="rounded-full bg-primary dark:bg-white h-5 w-5"></div>
              <p class="text-main dark:text-primary font-bold">
                View all your shipments and parcels in one platform
              </p>
            </div>
            <div class="flex gap-2">
              <div class="rounded-full bg-primary dark:bg-white h-5 w-5"></div>
              <p class="text-main dark:text-primary font-bold">
                Access tracking dashboards and reports
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
