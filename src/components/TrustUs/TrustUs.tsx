import { StarFill } from "../../lib/icons/StarFill";
import { StarDisable } from "../../lib/icons/StarDisable";
import Marquee from "react-fast-marquee";
import { DraftBit } from "../../lib/icons/DraftBit";
import { Feedly } from "../../lib/icons/Feedly";
import { Krisp } from "../../lib/icons/Krisp";
import { Jitter } from "../../lib/icons/Jitter";
import { Grammerly } from "../../lib/icons/Grammerly";
import { HelloSign } from "../../lib/icons/HelloSign";
import { LiveChat } from "../../lib/icons/LiveChat";
import { MapBox } from "../../lib/icons/MapBox";
import { MetaMask } from "../../lib/icons/MetaMask";
import { People } from "../../lib/icons/People";
import { Sketch } from "../../lib/icons/Sketch";

const TrustUs = () => {
  const companyLogo1 = [
    { icon: <Feedly /> },
    { icon: <DraftBit /> },
    { icon: <Krisp /> },
    { icon: <Jitter /> },
    { icon: <MapBox /> },
    { icon: <Sketch /> },
    { icon: <Grammerly /> },
    { icon: <HelloSign /> },
  ];
  const companyLogo2 = [
    { icon: <HelloSign /> },
    { icon: <LiveChat /> },
    { icon: <MapBox /> },
    { icon: <People /> },
    { icon: <Krisp /> },
    { icon: <DraftBit /> },
    { icon: <MetaMask /> },
    { icon: <Sketch /> },
  ];
  return (
    <div class="mt-24">
      <div class="flex items-center justify-center">
        <p class="mr-2 text-main dark:text-white">Trusted By 20,000 Clients</p>
        {[...Array(4)].map((_, index) => (
          <StarFill />
        ))}
        <StarDisable />
      </div>
      <p class="text-5xl mt-2 leading-[50px] text-center text-main font-extrabold dark:text-white">
        They <span class="bg-[#FFF0D9] dark:bg-primary"> Trust Us.</span>
      </p>

      <div
        x-data="{}"
        x-init="$nextTick(() => {
        let ul = $refs.logos;
        ul.insertAdjacentHTML('afterend', ul.outerHTML);
        ul.nextSibling.setAttribute('aria-hidden', 'true');
    })"
        class="w-full inline-flex flex-nowrap overflow-hidden mt-20"
      >
        <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_svg]:max-w-none animate-infinite-scroll">
          {companyLogo1.map((item) => {
            return <li>{item.icon}</li>;
          })}
        </ul>
        <ul
          class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_svg]:max-w-none animate-infinite-scroll"
          aria-hidden="true"
        >
          {companyLogo1.map((item) => {
            return (
              <li class="rounded-full py-4 px-6 shadow-xl bg-white dark:shadow-[gray]">
                {item.icon}
              </li>
            );
          })}
        </ul>
      </div>

      <div
        x-data="{}"
        x-init="$nextTick(() => {
        let ul = $refs.logos;
        ul.insertAdjacentHTML('afterend', ul.outerHTML);
        ul.nextSibling.setAttribute('aria-hidden', 'true');
    })"
        class="w-full inline-flex flex-nowrap overflow-hidden mt-10"
      >
        <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_svg]:max-w-none animate-infinite-scroll">
          {companyLogo2.map((item) => {
            return <li>{item.icon}</li>;
          })}
        </ul>
        <ul
          class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_svg]:max-w-none animate-infinite-scroll"
          aria-hidden="true"
        >
          {companyLogo2.map((item) => {
            return (
              <li class="rounded-full py-4 px-6 shadow-xl bg-white dark:shadow-[gray]">
                {item.icon}
              </li>
            );
          })}
        </ul>
      </div>

      <div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        {/* <div class="flex items-center justify-center gap-6 mt-10">
          {companyLogo2.map((item) => {
            return (
              <div class="rounded-full py-4 px-6 shadow-xl bg-white dark:shadow-[gray]">
                {item.icon}
              </div>
            );
          })}
        </div>  */}
      </div>
    </div>
  );
};

export default TrustUs;
