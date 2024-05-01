import { type Component } from "solid-js";
import type {
  InputFieldChange,
  InputFieldProps,
} from "../../lib/utils/interface";

const InputField: Component<InputFieldProps> = (props) => {
  const {
    label,
    placeholder,
    type = "text",
    name,
    value,
    onInput,
    error,
  } = props;

  const handleChange = (event: InputFieldChange) => {
    const input = event.currentTarget.value;
    if (onInput) onInput(input);
  };

  return (
    <div class="relative">
      <label class="absolute font-semibold top-[-13px] left-2 inline-block bg-white px-1 text-[14px] sm:text-[16px] text-[#6940DA]">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        class="block w-full text-[14px] sm:text-[16px]  rounded-md border-[1.7px] px-[10px] py-[13px] sm:py-[1rem] text-gray-900 shadow-sm ring-1 ring-inset ring-[#6940DA] placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 focus-visible:outline-0 sm:leading-6"
        placeholder={placeholder}
        onInput={handleChange}
      />
      {error && (
        <p class="text-red-500">
          {typeof error === "function" ? error() : (error as string)}
        </p>
      )}{" "}
    </div>
  );
};

export default InputField;
