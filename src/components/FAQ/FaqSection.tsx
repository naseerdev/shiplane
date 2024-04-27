import { type Component, createSignal } from "solid-js";
interface FAQItem {
  question: string;
  answer: string;
}

const FaqSection: Component = () => {
  const faqs: FAQItem[] = [
    {
      question: "What's the best thing about Switzerland?",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      question: "What's the best thing about Switzerland?",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      question: "What's the best thing about Switzerland?",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    // Add more FAQ items as needed
  ];

  // Define state for tracking open/closed state of each question
  const [openIndexes, setOpenIndexes] = createSignal<number[]>([]);

  // Function to toggle the open/close state of a question
  const toggleQuestion = (index: number) => {
    setOpenIndexes((prev) => {
      const isOpen = prev.includes(index);
      if (isOpen) {
        return prev.filter((i) => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  return (
    <div>
      <div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div class="mx-auto max-w-4xl divide-y divide-white/10">
          <p class="text-5xl leading-[50px] text-center text-main font-extrabold dark:text-white">
            All your questions and{" "}
            <span class="bg-[#FFF0D9] dark:bg-primary">Answers, Here!</span>
          </p>
          {faqs.map((faq, index) => (
            <dl class="mt-10 space-y-6 divide-y divide-white/10">
              <div class="p-6 shadow-md bg-white rounded-xl ">
                <dt>
                  <button
                    type="button"
                    class="flex w-full items-start justify-between text-left text-main "
                    aria-controls={`faq-${index}`}
                    aria-expanded={openIndexes().includes(index)}
                    onClick={() => toggleQuestion(index)}
                  >
                    <span class="text-2xl font-bold leading-7">
                      {faq.question}
                    </span>
                    <span class="ml-6 flex h-7 items-center">
                      <svg
                        class={`h-6 w-6 ${
                          openIndexes().includes(index) ? "hidden" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 6v12m6-6H6"
                        />
                      </svg>
                      <svg
                        class={`h-6 w-6 ${
                          openIndexes().includes(index) ? "" : "hidden"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M18 12H6"
                        />
                      </svg>
                    </span>
                  </button>
                </dt>
                <dd
                  class={`mt-5 pr-12 ${
                    openIndexes().includes(index) ? "" : "hidden"
                  }`}
                  id={`faq-${index}`}
                >
                  <p class="text-xl leading-7 text-main ">{faq.answer}</p>
                </dd>
              </div>
            </dl>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
