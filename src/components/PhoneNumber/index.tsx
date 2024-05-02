import intlTelInput from 'intl-tel-input'; // Import intlTelInput library
import 'intl-tel-input/build/css/intlTelInput.css'; // Import CSS for intlTelInput
import { createEffect, onCleanup, type Component } from 'solid-js';
import type { InputFieldProps } from '../../lib/utils/interface';

const PhoneNumberInput: Component<InputFieldProps> = (props) => {
  const {
    label,
    placeholder,
    type = "tel",
    name,
    value,
    onInput,
    error,
  } = props;

  let inputRef: HTMLInputElement | null;

  createEffect(() => {
    if (inputRef) {
      const iti = intlTelInput(inputRef, {
        initialCountry: 'pk',
        utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js',
      });

      const handleChange = () => {
        if (onInput) onInput(iti.getNumber());
      };

      inputRef.addEventListener('input', handleChange);

      onCleanup(() => {
        inputRef?.removeEventListener('input', handleChange);
      });
    }
  });

  return (
    <div class="relative">
      <label class="absolute z-10 font-semibold top-[-13px] left-2 inline-block bg-white px-1 text-[14px] sm:text-[16px] text-[#6940DA]">
        {label}
      </label>
      <input
        ref={inputRef!}
        type={type}
        name={name}
        value={value}
        class="block w-full text-[14px] sm:text-[16px] rounded-md border-[1.7px] px-[10px] py-[13px] sm:py-[1rem] text-gray-900 shadow-sm ring-1 ring-inset ring-[#6940DA] placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 focus-visible:outline-0 sm:leading-6"
        placeholder={placeholder}
      />
      {error && (
        <p class="text-red-500">
          {typeof error === "function" ? error() : (error as string)}
        </p>
      )}{" "}
    </div>
  );
};

export default PhoneNumberInput;
