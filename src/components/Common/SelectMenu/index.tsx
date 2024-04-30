import { createSignal, type Component } from "solid-js";


interface Props {
  label: string;
}
const SelectMenu: Component<Props> = ({ label }) => {
  // Define options array
  const options = [
    "Tom Cook",
    "Wade Cooper",
    "John Doe",
    "Jane Smith",
    "Alice Johnson",
  ];

  // State for selected option
  const [selectedOption, setSelectedOption] = createSignal<string>();

  // State for list visibility
  const [isListOpen, setIsListOpen] = createSignal(false);

  const toggleList = () => {
    setIsListOpen(!isListOpen());
  };

  const selectOption = (option: string) => {
    setSelectedOption(option);
    setIsListOpen(false);
  };

  return (
    <div class="relative">
      <label
        for="select-menu"
        class="absolute z-[1] font-semibold top-[-13px] left-2 inline-block bg-white px-1 text-[14px] sm:text-[16px] text-[#6940DA]"
      >
        {label}
      </label>
      <div class="relative mt-2">
        <button
          type="button"
          class="relative w-full cursor-default md:text-[16px] text-[#ccc] border-primary rounded-md border-[1.7px] px-[10px] py-[1rem] bg-white text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-1 sm:text-sm sm:leading-6"
          aria-haspopup="listbox"
          aria-expanded={isListOpen()}
          aria-labelledby="listbox-label"
          onClick={toggleList}
        >
          <span class="block truncate">
            {selectedOption() ? selectedOption() : "Nothing Selected"}
          </span>
          <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <svg
              class={`h-5 w-5 text-gray-400 ${isListOpen() ? "transform rotate-180" : ""
                }`}
              viewBox="0 0 20 20"
              fill="none"
              stroke="#6940DA"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 15l6-6 6 6"
              />
            </svg>
          </span>
        </button>

        {isListOpen() && (
          <ul
            class="absolute z-10 mt-2 max-h-60 w-full overflow-auto rounded-md border border-primary bg-white text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
            tabindex="-1"
            role="listbox"
            aria-labelledby="listbox-label"
            aria-activedescendant="listbox-option-3"
          >
            {options.map((option, index) => (
              <li
                class="text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9 ho hover:bg-primary hover:text-white"
                id={`listbox-option-${index}`}
                role="option"
                onClick={() => selectOption(option)}
              >
                <span class="font-normal block truncate">{option}</span>
                {selectedOption() === option && (
                  <span class="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4">
                    <svg
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SelectMenu;
