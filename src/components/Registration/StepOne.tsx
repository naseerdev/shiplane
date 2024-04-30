import { type Component, createSignal } from "solid-js";
import InputField from "../InputField/InputField";
import { validateEmail } from "../../lib/utils/utils";

interface Props {
  nextStep: () => void;
}

const StepOne: Component<Props> = ({ nextStep }) => {
  const [email, setEmail] = createSignal("");
  const [error, setError] = createSignal<string>("");

  const handleEmailChange = (value: string) => {
    setEmail(value);
    setError("");
  };

  const handleSubmit = (event: Event) => {
    event.preventDefault();
    if (!email()) {
      setError("Email is required");
      return;
    } else if (!validateEmail(email())) {
      setError("Please enter a valid email address.");
      return;
    }
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div class="py-[24px] px-[10px] sm:p-[24px] border-[#E7EBFF] rounded-[15px] border-solid shadow dark:bg-white">
        <div class="mb-6">
          <InputField
            label="Email"
            placeholder="Enter your email address"
            type="text"
            name="email"
            value={email()}
            onInput={handleEmailChange}
            error={error}
          />
        </div>
        <button
          type="submit"
          class="relative items-center tracking-wide rounded-[11px] px-10 py-[11px] sm:py-[18px] w-full text-white bg-primary font-semibold shadow-sm hover:bg-primary-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default StepOne;
