import { History } from "../../lib/icons/History";
import { Simplify } from "../../lib/icons/Simplify";
import { Warning } from "../../lib/icons/Warning";
import { Performance } from "../../lib/icons/Performance";

const SmartFeatures = () => {
  const Features = [
    {
      icon: <Simplify />,
      title: "Auto tracking and Updating",
      description:
        "Our system ensures that you're always up-to-date with the latest status of your shipments.",
    },
    {
      icon: (
        <Warning
          fillColor={
            localStorage.getItem("dark") === "dark" ? "#fff" : "#1B2149"
          }
        />
      ),
      title: "Delivery Alerts",
      description:
        "Receive timely alerts notifying you as soon as your shipments reach their destinations.",
    },
    {
      icon: <History />,
      title: "Tracking History",
      description:
        "Historic records for tracked shipments provide a detailed account of past delivery activities.",
    },
    {
      icon: <Performance />,
      title: "Performance Repots",
      description:
        "Analyze shipping performance across carriers to identify opportunities for improvements.",
    },
  ];
  return (
    <div class="mt-24 mx-auto max-w-screen-2xl">
      <p class="text-5xl leading-[50px] text-center text-main font-extrabold dark:text-white">
        Smart <span class="bg-[#FFF0D9] dark:bg-primary">Features</span>
      </p>
      <div class="flex flex-col md:flex-row justify-between items-center mt-20 gap-y-6 md:gap-y-0 md:gap-x-6 px-10">
        {Features.map((item) => {
          return (
            <div class="flex flex-col  w-full md:w-72 space-y-3 md:space-y-0">
              <div>{item.icon}</div>
              <p class="text-[22px] font-normal text-main dark:text-white">
                {item.title}
              </p>
              <p class="text-main md:text-left dark:text-[#BEBEBE]">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SmartFeatures;
