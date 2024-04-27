import { createEffect, createSignal, Show, type Component } from "solid-js";

const Navbar: Component = () => {
  const [open, setOpen] = createSignal<boolean>(false);

  createEffect(() => {
    const mode = localStorage.getItem("mode");
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    }
  });

  const handleeChangeDarkMode = () => {
    console.log('fdas')
    const checkMode = localStorage.getItem("mode");
    if (checkMode === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.removeItem("mode");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("mode", "dark");
    }
  };
  return (
    <div>
      <nav class="relative z-10 bg-transparent ">
        <div class="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div class="flex h-16 justify-between">
            <div class="flex w-full justify-between">
              <div class="-ml-2 mr-2 flex items-center md:hidden">
                <button
                  onClick={() => setOpen(!open())}
                  type="button"
                  class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span class="absolute -inset-0.5"></span>
                  <span class="sr-only">Open main menu</span>

                  <svg
                    class="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>

                  <svg
                    class="hidden h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div class="flex flex-shrink-0 items-center">
                <p class="text-[30px] font-bold text-main dark:text-primary">
                  Irsal
                </p>
              </div>
              <div class="hidden md:ml-6 md:flex md:justify-end md:space-x-8">
                <a
                  href="#"
                  class="inline-flex items-center px-1 pt-1 text-sm font-bold text-white font-gilroy-bold cursor-pointer"
                >
                  Home
                </a>
                <a
                  href="#"
                  class="inline-flex items-center px-1 pt-1 text-smß text-white hover:font-gilroy-bold hover:font-bold cursor-pointer"
                >
                  About Us
                </a>
                <a
                  href="#"
                  class="inline-flex items-center px-1 pt-1 text-smß text-white hover:font-gilroy-bold hover:font-bold"
                >
                  Pricing
                </a>
                <a
                  href="#"
                  class="inline-flex items-center px-1 pt-1 text-smß text-white hover:font-gilroy-bold hover:font-bold"
                >
                  Features
                </a>
                <button
                  type="button"
                  class="relative items-center rounded-full px-10 my-2 text-primary bg-white font-semibold text-indigo-600 shadow-sm hover:bg-indigo-500  hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign In
                </button>
                <button
                  type="button"
                  class="relative items-center mt-5 bg-gray-200 inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
                  role="switch"
                  aria-checked="true"
                  onClick={handleeChangeDarkMode}
                >
                  <span class="sr-only">Use setting</span>
                  <span
                    aria-hidden="true"
                    class="translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                  ></span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <Show when={open()}>
          <div class="md:hidden bg-indigo-600" id="mobile-menu">
            <div class="space-y-1 pb-3 pt-2">
              <a
                href="#"
                class="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700 sm:pl-5 sm:pr-6"
              >
                Home
              </a>
              <a
                href="#"
                class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6 cursor-pointer"
              >
                About Us
              </a>
              <a
                href="#"
                class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
              >
                Pricing
              </a>
              <a
                href="#"
                class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
              >
                Features
              </a>
            </div>
          </div>
        </Show>
      </nav>
    </div>
  );
};

export default Navbar;
