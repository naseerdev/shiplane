import { createEffect, createSignal, onCleanup, onMount, type Component } from "solid-js";
import { HamburgerMenu } from "../../lib/icons/hamburgerMenu";
import { HamburgerClose } from "../../lib/icons/HamburgerClose";

const Navbar: Component = () => {
  const [open, setOpen] = createSignal<boolean>(false);
  const [isDarkMode, setIsDarkMode] = createSignal<boolean>(false);
  let containerRef: HTMLDivElement;

  createEffect(() => {
    const mode = localStorage.getItem("mode");
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true)
    } else {
      setIsDarkMode(false)
    }
  });

  const handleeChangeDarkMode = () => {
    const checkMode = localStorage.getItem("mode");
    if (checkMode === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.removeItem("mode");
      setIsDarkMode(false)
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("mode", "dark");
      setIsDarkMode(true)
    }
  };

  const handleClickOutside = (event: Event) => {
    if (!containerRef.contains(event.target as Node)) {
      if (open()) setOpen(false);
    };
  };

  onMount(() => document.addEventListener('click', handleClickOutside));
  onCleanup(() => document.removeEventListener('click', handleClickOutside));

  return (
    <div>
      <nav class="relative z-10 bg-transparent ">
        <div class="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 pt-5">
          <div class="flex h-16 justify-between" ref={containerRef!}>
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

                  {!open() ? <HamburgerMenu /> :

                    <HamburgerClose />}
                </button>
              </div>
              <div class="flex flex-shrink-0 items-center">
                <p class="text-[30px] font-bold text-white sm:text-primary dark:text-primary">
                  Irsal
                </p>
              </div>
              <div class="hidden md:ml-6 md:flex md:justify-end md:space-x-8">
                <a
                  href="#"
                  class="inline-flex items-center px-1 pt-1 text-sm font-bold text-white "
                >
                  Home
                </a>
                <a
                  href="#"
                  class="inline-flex items-center px-1 pt-1 text-smß text-white  hover:font-bold"
                >
                  About Us
                </a>
                <a
                  href="#"
                  class="inline-flex items-center px-1 pt-1 text-smß text-white  hover:font-bold"
                >
                  Pricing
                </a>
                <a
                  href="#"
                  class="inline-flex items-center px-1 pt-1 text-smß text-white  hover:font-bold"
                >
                  Features
                </a>
                <a
                  class="relative items-center rounded-full px-10 my-2 text-primary bg-white font-semibold shadow-sm hover:bg-indigo-500  hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 flex  justify-center"
                >
                  Sign In
                </a>
                <button
                  type="button"
                  class={`relative items-center mt-5  inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ${isDarkMode() ? "bg-indigo-600" : 'bg-gray-200'}`}
                  role="switch"
                  aria-checked="true"
                  onClick={handleeChangeDarkMode}
                >
                  <span class="sr-only">Use setting</span>
                  <span
                    aria-hidden="true"
                    class={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${isDarkMode() ? "translate-x-5" : 'translate-x-0'}`}
                  ></span>
                </button>

              </div>
            </div>
          </div>
        </div>

        <div class={`${open() ? `block` : `hidden`}`} >
          <div class="md:hidden  absolute w-full px-4" id="mobile-menu">
            <div class="space-y-1 pb-3 pt-2 bg-indigo-600">
              <a
                href="#"
                class="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700 sm:pl-5 sm:pr-6"
              >
                Home
              </a>
              <a
                href="#"
                class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-[#fff] hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
              >
                About Us
              </a>
              <a
                href="#"
                class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-[#fff] hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
              >
                Pricing
              </a>
              <a
                href="#"
                class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-[#fff] hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
              >
                Features
              </a>
              <a
                class="relative items-center rounded-full px-10 my-2 text-primary bg-white font-semibold shadow-sm hover:bg-indigo-500  hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 flex  justify-center mx-4 py-2"
              >
                Sign In
              </a>
              <div class="py-2 pl-3 pr-4">
                <button
                  type="button"
                  class={`relative items-center  inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-white transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2  border-1 border ${isDarkMode() ? "bg-indigo-600" : 'bg-gray-200'}`}
                  role="switch"
                  aria-checked="true"
                  onClick={handleeChangeDarkMode}
                >
                  <span class="sr-only">Use setting</span>
                  <span
                    aria-hidden="true"
                    class={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${isDarkMode() ? "translate-x-5" : 'translate-x-0'}`}
                  ></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
