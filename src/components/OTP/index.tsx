import type { Component } from "solid-js";
interface Props {
  otpVerified: () => void;
}

const OtpModal: Component<Props> = ({ otpVerified }) => {
  return (
    <div
      class="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
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
                    We have sent verification code on this number xxxxxxxxx8725
                  </p>
                  <p class="text-[10px] mt-2 text-gray-500  max-w-[14rem] mx-auto">
                    Please enter correct OTP code to verify its you.
                  </p>
                </div>
              </div>
            </div>
            <form id="otp-form" class="mt-6">
              <div class="flex items-center justify-center gap-3">
                <input
                  type="text"
                  class="w-14 h-14 text-center border-solid border-primary text-2xl font-extrabold text-slate-900 bg-transparent border hover:border-primary appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                  pattern="\d*"
                  placeholder="0"
                  maxlength="1"
                />
                <input
                  type="text"
                  class="w-14 h-14 text-center border-solid border-primary text-2xl font-extrabold text-slate-900 bg-transparent border hover:border-primary appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                  pattern="\d*"
                  placeholder="0"
                  maxlength="1"
                />
                <input
                  type="text"
                  class="w-14 h-14 text-center border-solid border-primary text-2xl font-extrabold text-slate-900 bg-transparent border hover:border-primary appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                  pattern="\d*"
                  placeholder="0"
                  maxlength="1"
                />
                <input
                  type="text"
                  class="w-14 h-14 text-center border-solid border-primary text-2xl font-extrabold text-slate-900 bg-transparent border hover:border-primary appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                  pattern="\d*"
                  placeholder="0"
                  maxlength="1"
                />
              </div>
              <div class="mt-5 sm:mt-6">
                <button
                  onClick={() => otpVerified()}
                  class="relative items-center tracking-wide text-[16px] rounded-[11px] px-10 py-[9px] my-1 w-full text-white bg-primary font-normal shadow-sm hover:bg-primary-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Verify OTP
                </button>
                <button
                  // onClick={''}
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
