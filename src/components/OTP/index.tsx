import { createSignal, type Component } from "solid-js";
import { endpoints } from "../../lib/endpoints";

interface Props {
  otpVerified: () => void;
  closeModal: () => void;
  phoneNumber: string
}

const OtpModal: Component<Props> = ({ otpVerified, closeModal, phoneNumber }) => {
  const [otp, setOtp] = createSignal(["", "", "", ""]);
  const [error, setError] = createSignal("");
  const [loading, setLoading] = createSignal<boolean>(false);

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    if (otp().some((value) => value === "")) {
      setError("Please enter the OTP");
    } else {

      try {
        setLoading(true);
        const data = new FormData();
        data.append("phone_number", phoneNumber);
        data.append("otp", otp().join(""));
        const response = await fetch(endpoints.number_verification, {
          method: 'POST',
          body: data,
        });

        const result = await response.json();

        if (response.status === 200) {
          otpVerified();
        } else {
          setError(result.error.otp[0]);
          otpVerified();
        }

      } catch (error) {
        console.error('An error occurred:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleInput = (e: Event, index: number) => {
    const newValue = (e.target as HTMLInputElement).value.replace(/\D/, "");
    setOtp((prev) => {
      const newOtp = prev.slice();
      newOtp[index] = newValue;
      return newOtp;
    });
    if (newValue !== "" && index < 3) {
      const nextIndex = index + 1;
      const nextInput = document.getElementById(`otp-${nextIndex}`);
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  return (
    <div
      class="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
          <div class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
            <div>
              <div class="mt-3 text-center sm:mt-5">
                <p class="text-[28px]/[34px] mb-4 mt-2 text-center text-main font-extrabold dark:text-dark">
                  Verify
                  <span class="bg-[#FFF0D9] dark:bg-primary dark:text-white">
                    {" "}
                    OTP via Phone
                  </span>
                </p>
                <div class="mt-2">
                  <p class="text-sm text-gray-500  max-w-[14rem] mx-auto">
                    We have sent verification code on this number xxxxxxxxx{phoneNumber.slice(-4)}
                  </p>
                  <p class="text-[10px] mt-2 text-gray-500  max-w-[14rem] mx-auto">
                    Please enter correct OTP code to verify its you.
                  </p>
                </div>
              </div>
            </div>
            <form id="otp-form" class="mt-6">
              <div class="flex items-center justify-center gap-3">
                {[...Array(4)].map((_, index) => (
                  <input
                    type="text"
                    class="w-14 h-14 text-center border-solid border-primary text-2xl font-extrabold text-slate-900 bg-transparent border hover:border-primary appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                    value={otp()[index] || ""}
                    onInput={(e) => handleInput(e, index)}
                    placeholder="0"
                    maxlength="1"
                    pattern="\d*"
                    id={`otp-${index}`}
                  />
                ))}
              </div>
              {error() && (
                <p class="text-red-500 text-sm mt-2 text-center">{error()}</p>
              )}
              <div class="mt-5 sm:mt-6">
                <button
                  onClick={handleSubmit}
                  class="relative flex justify-center items-center tracking-wide text-[16px] rounded-[11px] px-10 py-[9px] my-1 w-full text-white bg-primary font-normal shadow-sm hover:bg-primary-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  {
                    loading() ?
                      <div role="status">
                        <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                        <span class="sr-only">Loading...</span>
                      </div> : "Verify OTP"
                  }
                </button>
                <button
                  onClick={() => closeModal()}
                  class="relative items-center text-[16px]  border-solid border-[1px] rounded-[11px] px-10 py-[9px] mt-2 w-full text-primary bg-white font-normal shadow-sm hover:bg-primary-500 border-primary"
                >
                  {" "}
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpModal;
