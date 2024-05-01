import type { Accessor, Component } from "solid-js";

interface Props {
  currentStep: Accessor<number>;
}

const steps = [
  { label: "Account", color: "#6940DA" },
  { label: "Personal", color: "#6940DA" },
  { label: "Integration", color: "#1B2149" },
];

const ProgressBar: Component<Props> = ({ currentStep }) => {
  return (
    <nav aria-label="Progress">
      <ol role="list" class="flex items-center justify-center">
        {steps.map((step, index) => (
          <li class={`relative  ${index < 2 ? "pr-[4rem]  sm:pr-[8rem]" : ""}`}>
            <div
              class="absolute inset-0 flex items-center left-12"
              aria-hidden="true"
            >
              <div
                class={`h-0.5 w-full ${index < 2
                  ? index + 1 >= currentStep()
                    ? "bg-[#b4a6dc54]"
                    : "bg-primary"
                  : ""
                  } `}
              ></div>
            </div>
            <div
              class={`relative flex h-[43px] w-[43px] sm:h-[50px] sm:w-[50px] items-center justify-center rounded-full ${index + 1 <= currentStep()
                ? index + 1 === currentStep()
                  ? "border-primary"
                  : "bg-primary dark:bg-white border-[#b4a6dc54]"
                : "bg-white dark:bg-transparent border-[#b4a6dc54] "
                } border-2 `}
            >
              {index + 1 < currentStep() && index + 1 !== currentStep() ? (
                <svg
                  class="h-[32px] w-[32px] text-white "
                  viewBox="0 0 20 20"
                  fill="bg-white dark:bg-primary"
                  aria-hidden="true"
                  stroke="#fff"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              ) : (
                <span
                  class="bg-transparent dark:text-white group-hover:bg-gray-300 text-[22px]"
                  aria-hidden="true"
                >
                  {index + 1}
                </span>
              )}

              <span class="absolute bottom-[-30px] text-[15px] sm:text-[17px] font-bold text-[#6940DA] dark:text-white">
                {step.label}
              </span>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};
export default ProgressBar;
