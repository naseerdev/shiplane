import { Show, type Component } from "solid-js";
import { createStore } from "solid-js/store";
import { CheckFill } from "../../lib/icons/CheckFill";
import { CheckLite } from "../../lib/icons/CheckLite";
import {
  ORDERED_PER_MONTH_OPTIONS,
  SALE_CHANNEL_OPTIONS,
  SHIP_ORDER_OPTIONS,
} from "../../lib/utils/constants";
import type { StepThreeStateInterface } from "../../lib/utils/interface";
import SelectMenu from "../Common/SelectMenu";
import InputField from "../InputField/InputField";

interface Props {
  nextStep: () => void;
  backStep: () => void;
}

const StepThree: Component<Props> = ({ nextStep, backStep }) => {
  const [stepThreeFields, setStepThreeFields] =
    createStore<StepThreeStateInterface>({
      websiteAddress: "",
      salesChannels: "",
      shippingMethod: "",
      ordersPerMonth: "",
      isChecked1: false,
      isChecked2: false,
    });

  const [errors, setErrors] = createStore<{ [key: string]: string }>({
    websiteAddress: "",
    salesChannels: "",
    shippingMethod: "",
    ordersPerMonth: "",
    isChecked2: "",
  });

  const toggleCheck1 = () =>
    setStepThreeFields({
      ...stepThreeFields,
      isChecked1: !stepThreeFields.isChecked1,
    });
  const toggleCheck2 = () =>
    setStepThreeFields({
      ...stepThreeFields,
      isChecked2: !stepThreeFields.isChecked2,
    });

  const handleNextButton = () => {
    const {
      websiteAddress,
      salesChannels,
      shippingMethod,
      ordersPerMonth,
      isChecked2,
    } = stepThreeFields;

    const errors = {
      websiteAddress: websiteAddress.trim()
        ? ""
        : "Website Address is required",
      salesChannels: salesChannels.trim() ? "" : "Sales Channels are required",
      shippingMethod: shippingMethod.trim()
        ? ""
        : "Shipping Method is required",
      ordersPerMonth: ordersPerMonth.trim()
        ? ""
        : "Orders Per Month is required",
    };

    setErrors(errors);

    if (
      !errors.websiteAddress &&
      !errors.salesChannels &&
      !errors.shippingMethod &&
      !errors.ordersPerMonth
    ) {
      if (isChecked2) nextStep();
      else
        setErrors({ ...errors, isChecked2: "Please checked privacy policy" });
    }
  };

  const handleChangeInput = (value: string, key: string) => {
    setStepThreeFields((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <>
      <div class="py-[24px] px-[10px] sm:p-[24px] border-[#E7EBFF] rounded-[15px] border-solid shadow dark:bg-white">
        <div class="mb-6">
          <InputField
            label="Website Address"
            placeholder="Enter Website Address"
            value={stepThreeFields.websiteAddress}
            onInput={(value) => handleChangeInput(value, "websiteAddress")}
            error={errors.websiteAddress}
          />
          <Show when={errors.websiteAddress}>
            <p class="text-red-500">{errors.websiteAddress}</p>
          </Show>
        </div>
        <div class="mb-6">
          <SelectMenu
            options={SALE_CHANNEL_OPTIONS}
            label="Which sales channels do you currently sell on"
            value={stepThreeFields.salesChannels}
            onChange={(value) => handleChangeInput(value, "salesChannels")}
          />
          <Show when={errors.salesChannels}>
            <p class="text-red-500">{errors.salesChannels}</p>
          </Show>
        </div>
        <div class="mb-6">
          <SelectMenu
            options={SHIP_ORDER_OPTIONS}
            label="How do you currently ship e-commerce orders with"
            value={stepThreeFields.shippingMethod}
            onChange={(value) => handleChangeInput(value, "shippingMethod")}
          />
          <Show when={errors.shippingMethod}>
            <p class="text-red-500">{errors.shippingMethod}</p>
          </Show>
        </div>
        <div class="mb-6">
          <SelectMenu
            label="How many orders per month do you process"
            options={ORDERED_PER_MONTH_OPTIONS}
            value={stepThreeFields.ordersPerMonth}
            onChange={(value) => handleChangeInput(value, "ordersPerMonth")}
          />
          <Show when={errors.ordersPerMonth}>
            <p class="text-red-500">{errors.ordersPerMonth}</p>
          </Show>
        </div>
        <div>
          <div class="flex flex-col gap-3 check-list">
            <div class="flex gap-2" onClick={toggleCheck1}>
              <div class="h-[14px] w-[14px] me-2">
                {stepThreeFields.isChecked1 ? <CheckFill /> : <CheckLite />}
              </div>
              <p class="text-[14px] text-[#1B2149]  font-normal dark:text-[#000]">
                Sign up to our marketing list for helpful e-commerce content,
                product updates and help from our sales teams.
              </p>
            </div>
            <div class="flex gap-2" onClick={toggleCheck2}>
              <div class="h-[14px] w-[14px] me-2">
                {stepThreeFields.isChecked2 ? <CheckFill /> : <CheckLite />}
              </div>
              <p class="text-[14px] text-[#1B2149]  font-normal dark:text-[#000]">
                I agree to Irsal{" "}
                <a href="" class="text-[#6940DA] font-semibold">
                  Terms and Service
                </a>{" "}
                and{" "}
                <a href="" class="text-[#6940DA] font-semibold">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>
        </div>
        <Show when={errors.isChecked2}>
          <p class="text-red-500">{errors.isChecked2}</p>
        </Show>
        <button
          onClick={handleNextButton}
          class="relative items-center tracking-wide rounded-[11px] px-10 py-[11px] sm:py-[18px] my-4 w-full text-white bg-primary font-semibold shadow-sm hover:bg-primary-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          Let’s Start!
        </button>
        <button
          onClick={backStep}
          class="relative items-center border-solid border-[1px] rounded-[11px] px-10 py-[11px] sm:py-[18px] w-full text-primary bg-white font-semibold shadow-sm hover:bg-primary-500 border-primary"
        >
          Back
        </button>
      </div>
    </>
  );
};

export default StepThree;
