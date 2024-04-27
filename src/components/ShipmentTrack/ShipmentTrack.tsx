import { ShipmentBg } from "../../lib/icons/ShipmentBg";

const ShipmentTrack = () => {
  return (
    <div class="mt-24 mx-auto max-w-screen-2xl">
      <p class="text-5xl leading-[50px] text-center text-main font-extrabold dark:text-white">
        <span class="bg-[#FFF0D9] dark:bg-primary">Shipment Tracking</span> -
        All in one place
      </p>
      <div class="flex flex-col md:flex-row justify-center items-center mt-16 ">
        <div class="max-w-[468px] flex flex-col gap-4 ps-2">
          <p class="text-4xl font-bold text-primary dark:text-white">
            Why Irsal?
          </p>
          <p class="text-lg leading-7 text-main dark:text-white">
            Put an end to uncertainty surrounding your parcel's or shipments.
            Our precise data tracking and shipment history ensures you're kept
            informed of all shipments status.
          </p>
          <p class="text-lg text-main dark:text-white leading-7">
            View all of your shipments within a single centralized platform,
            where you can easily sort and filter them based on criteria such as
            status, destination, carrier, and additional parameters.
          </p>
          <div class="flex flex-col gap-3">
            <div class="flex gap-2">
              <div class="rounded-full bg-primary dark:bg-white h-5 w-5"></div>
              <p class="text-main dark:text-primary font-bold">
                View all your shipments and parcel's in one platform
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
        <ShipmentBg class="md:hidden" />
      </div>
    </div>
  );
};

export default ShipmentTrack;
