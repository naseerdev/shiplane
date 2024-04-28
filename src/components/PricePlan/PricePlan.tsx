import { createSignal, type Component } from "solid-js";
import { PriceIconOne } from "../../lib/icons/PriceIconOne";
import TickIcon from "../../lib/icons/TickIcon";
import { ProIcon } from "../../lib/icons/ProIcon";

const PricePlan: Component = () => {
  const [free] = createSignal([
    "Enhanced Analytics",
    "Custom Domain",
    "E-commerce Integration",
    "Priority Support",
    "Advanced Security",
  ]);
  const [pro] = createSignal([
    "Advanced Marketing Tools",
    "Customizeable Templates",
    "Multi-User Access",
    "Third-Party Integratioin",
    "24/7 Priority Security",
  ]);

  return (
    <div class="relative isolate bg-transparent px-6 py-16 sm:py-32 lg:px-8">
      <div class="mx-auto max-w-2xl text-center lg:max-w-4xl">
        <p class="text-3xl sm:text-5xl sm:leading-[50px] text-center text-main font-extrabold dark:text-white">
          Find your{" "}
          <span class="bg-[#FFF0D9] dark:bg-primary">Perfect Plan</span>
        </p>
      </div>
      <p class="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-main dark:text-white">
        Discover the ideal plan to fuel your business growth. Our pricing
        options are carefully crafted to cater to businesses.
      </p>
      <div class="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-6 lg:max-w-4xl lg:grid-cols-2">
        <div class="rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10 bg-white sm:mx-8 lg:mx-0 rounded-t-3xl">
          <PriceIconOne />
          <h1
            id="tier-hobby"
            class="text-[44px] mt-6 font-semibold leading-7 text-primary font-gilroy-bold"
          >
            Free
          </h1>
          <p class="text-[24px] mt-6 font-semibold leading-8 text-[#1B2149]">
            Unleash the Power of Your Business with Free Plan
          </p>
          <p class="mt-4 flex items-baseline gap-x-2">
            <span class="text-6xl font-bold tracking-tight text-primary font-gilroy-bold">
              $34
            </span>
            <span class="text-2xl text-gray-500">per month</span>
          </p>
          <ul
            role="list"
            class="mt-8 space-y-3 text-sm leading-6 sm:mt-10 border-t pt-5 text-gray-600"
          >
            {free().map((item, index) => (
              <li class="flex gap-x-3 text-primary text-2xl">
                <TickIcon />
                {item}
              </li>
            ))}
          </ul>
          <a
            href="#"
            aria-describedby="tier-hobby"
            class="mt-8 block rounded-md py-2.5 px-3.5 text-center text-2xl font-gilroy-bold font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10 text-primary ring-1 ring-inset ring-gray-600 hover:ring-gray-600 focus-visible:outline-gray-900"
          >
            Get Started
          </a>
        </div>
        <div class="rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10 bg-white sm:mx-8 lg:mx-0 rounded-t-3xl">
          <ProIcon />
          <div class="flex items-baseline gap-2">
            <h1
              id="tier-hobby"
              class="text-[44px] mt-6 font-semibold leading-7 text-main font-gilroy-bold"
            >
              Pro
            </h1>
            <p class="text-lg px-1 text-main border boder-main rounded-xl">
              Best Offer
            </p>
          </div>

          <p class="text-[24px] mt-6 font-semibold leading-8 text-[#1B2149]">
            Take Your Business to the Next Level with Pro Plan.
          </p>
          <p class="mt-4 flex items-baseline gap-x-2">
            <span class="text-6xl font-bold tracking-tight text-main font-gilroy-bold">
              $56
            </span>
            <span class="text-2xl text-gray-500">per month</span>
          </p>
          <ul
            role="list"
            class="mt-8 space-y-3 text-sm leading-6 sm:mt-10 border-t pt-3 text-primary"
          >
            {pro().map((item, index) => (
              <li class="flex gap-x-3 text-main text-2xl">
                <TickIcon />
                {item}
              </li>
            ))}
          </ul>
          <a
            href="#"
            aria-describedby="tier-hobby"
            class="mt-8 block rounded-md py-2.5 px-3.5 text-center text-2xl font-gilroy-bold font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10 text-main ring-1 ring-inset ring-gray-600 hover:ring-gray-600 focus-visible:outline-gray-900"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default PricePlan;
