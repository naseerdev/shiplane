interface Props {
  label: string;
  placeholder: string;
}

const InputField = ({ label, placeholder }: Props) => {
  return (
    <div class="relative">
      <label
        for="name"
        class="absolute font-semibold top-[-13px] left-2 inline-block bg-white px-1 text-[16px] text-[#6940DA]"
      >
        {label}
      </label>
      <input
        type="text"
        name="name"
        id="name"
        class="block w-full md:text-[16px] rounded-md border-[1.7px] px-[10px] py-[1rem] text-gray-900 shadow-sm ring-1 ring-inset ring-[#6940DA] placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 focus-visible:outline-0 text-sm sm:leading-6"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
