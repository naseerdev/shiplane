import { Mail } from "../../lib/icons/Mail";
import { Phone } from "../../lib/icons/Phone";

const Footer = () => {
  return (
    <div class="relative mx-auto max-w-7xl">
      <footer class="" aria-labelledby="footer-heading">
        <h2 id="footer-heading" class="sr-only">
          Footer
        </h2>
        <div class=" pb-8 pt-20 sm:pt-24 lg:px-8 lg:pt-32">
          <div class="xl:grid xl:grid-cols-3 xl:gap-8">
            <div class="grid grid-cols-2 gap-8 xl:col-span-2">
              <div class="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 class="text-[30px] font-semibold leading-6 text-main dark:text-primary">
                    Irsal
                  </h3>
                  <ul role="list" class="mt-6 space-y-4">
                    <li class="flex gap-2 items-center">
                      <Mail />
                      <a
                        href="#"
                        class="text-base leading-6 hover:text-main dark:text-white"
                      >
                        Help@Frybix.Com
                      </a>
                    </li>
                    <li class="flex gap-2 items-center">
                      <Phone />
                      <a
                        href="#"
                        class="text-base leading-6 text-main dark:text-white"
                      >
                        +1234 456 67889
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="mt-10 md:mt-0">
                  <h3 class="text-[30px] font-semibold leading-6 text-main dark:text-primary">
                    Links
                  </h3>
                  <ul role="list" class="mt-6 space-y-4">
                    <li>
                      <a
                        href="#"
                        class="text-base leading-6 text-main dark:text-white"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="text-base leading-6 text-main dark:text-white"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="text-base leading-6 text-main dark:text-white"
                      >
                        Bookings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="text-base leading-6 text-main dark:text-white"
                      >
                        Blog
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 class="text-[30px] font-semibold leading-6 text-main dark:text-primary">
                    Legal
                  </h3>
                  <ul role="list" class="mt-6 space-y-4">
                    <li>
                      <a
                        href="#"
                        class="text-base leading-6 text-main dark:text-white"
                      >
                        Terms Of Use
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="text-base leading-6 text-main dark:text-white"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="text-base leading-6 text-main dark:text-white"
                      >
                        Cookie Policy
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="mt-10 md:mt-0">
                  <h3 class="text-[30px] font-semibold leading-6 text-main dark:text-primary">
                    Product
                  </h3>
                  <ul role="list" class="mt-6 space-y-4">
                    <li>
                      <a
                        href="#"
                        class="text-base leading-6 text-main dark:text-white"
                      >
                        Take Tour
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="text-base leading-6 text-main dark:text-white"
                      >
                        Live Chat
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="text-base leading-6 text-main dark:text-white"
                      >
                        Reviews
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="mt-10 xl:mt-0">
              <h3 class="text-[30px] font-semibold leading-6 text-main dark:text-primary">
                Newsletter
              </h3>
              <ul role="list" class="mt-6 space-y-4">
                <li>
                  <p class="text-base leading-6 text-main dark:text-white">
                    Stay Up to date
                  </p>
                </li>
              </ul>
              <form class="mt-6 sm:flex sm:max-w-md">
                <label for="email-address" class="sr-only">
                  Email address
                </label>
                <div class="flex items-center border p-2 rounded-full bg-white">
                  <input
                    type="email"
                    name="email-address"
                    id="email-address"
                    autocomplete="email"
                    required
                    class="w-full min-w-0 appearance-none  bg-white  px-3 py-1.5 text-base text-main placeholder:text-gray-500 sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
                    placeholder="Your email"
                  />
                  <div class="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                    <button
                      type="submit"
                      class="flex w-full items-center justify-center rounded-full bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="mt-16 mx-10 border-t border-main dark:border-white pt-8 sm:mt-20 lg:mt-24">
            <p class="mt-8 text-base text-center leading-5 text-main dark:text-white md:order-1 md:mt-0">
              Copyright 2022 Frybix inc. all rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
