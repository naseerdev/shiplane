import { createEffect, createSignal, Show, type Component } from "solid-js";
import { createStore } from "solid-js/store";
import { CheckFill } from "../../lib/icons/CheckFill";
import { CheckLite } from "../../lib/icons/CheckLite";
import {
  ORDERED_PER_MONTH_OPTIONS,
  SALE_CHANNEL_OPTIONS,
  SHIP_ORDER_OPTIONS,
} from "../../lib/utils/constants";
import type { CompletedDataInterface, SaleChannelListInterface, StepThreeStateInterface } from "../../lib/utils/interface";
import SelectMenu from "../Common/SelectMenu";
import InputField from "../InputField/InputField";
import { listSaleChannel } from "../../lib/utils/utils";
import { endpoints } from "../../lib/endpoints";

interface Props {
  nextStep: () => void;
  backStep: () => void;
  completeData: CompletedDataInterface
}

const StepThree: Component<Props> = ({ nextStep, backStep, completeData }) => {
  const [laseChannelList, setSalesChannelList] = createStore<SaleChannelListInterface[]>([]);
  const [shipTypeList, setShipTypeList] = createStore<SaleChannelListInterface[]>([]);
  const [loading, setLoading] = createSignal<boolean>(false);

  const getOrderListData = async () => {
    const integrationList = await listSaleChannel("ecommerce") as SaleChannelListInterface[];
    const shipTypeList = await listSaleChannel("courier") as SaleChannelListInterface[];

    setSalesChannelList(integrationList);
    setShipTypeList(shipTypeList);
  }
  createEffect(() => {
    getOrderListData();
  }, [])

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

  const toggleCheck2 = () => {
    setStepThreeFields({
      ...stepThreeFields,
      isChecked2: !stepThreeFields.isChecked2,
    });
    setErrors((prev) => ({ ...prev, isChecked2: "" }))
  }
  const checkValidation = (): boolean => {
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
      if (isChecked2) return true;
      else
        setErrors({ ...errors, isChecked2: "Please checked privacy policy" });
      return false;
    } else {
      return false
    }

  }
  const handleNextButton = async () => {

    const result = checkValidation();
    if (result) {
      try {
        setLoading(true);
        const { phoneNumber, companyInfo, companyName, name, email } = completeData;
        const integrationId1 = laseChannelList.find(value => value.title === stepThreeFields.salesChannels)?.id
        const integrationId2 = shipTypeList.find(value => value.title === stepThreeFields.shippingMethod)?.id
        const data = {
          phone_number: phoneNumber,
          company_name: companyName,
          customer_name: name,
          company_information: companyInfo,
          use_as_marketing: stepThreeFields.isChecked1,
          agree_term_and_condition: stepThreeFields.isChecked2,
          email: email,
          integration_channels: [
            integrationId1, integrationId2
          ],
        }


        const response = await fetch(endpoints.onBoarding, {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const result = await response.json();
        console.log("result", result)
        nextStep()
        // if (result === "true") {
        //   console.log("email is available")
        //   emailAvailable(email)
        // } else {
        //   setError("Email is already registered");
        //   console.log("email is not available")
        // }

      } catch (error) {
        console.error('An error occurred:', error);
      } finally {
        setLoading(false);
      }

    }

  };

  const handleChangeInput = (value: string, key: string) => {
    setStepThreeFields((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: "" }))
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
          {
            laseChannelList.length > 0 &&
            <SelectMenu
              options={laseChannelList.map((menu) => menu.title)}
              label="Which sales channels do you currently sell on"
              value={stepThreeFields.salesChannels}
              onChange={(value) => handleChangeInput(value, "salesChannels")}
            />
          }
          <Show when={errors.salesChannels}>
            <p class="text-red-500">{errors.salesChannels}</p>
          </Show>
        </div>
        <div class="mb-6">
          {
            shipTypeList.length > 0 &&
            <SelectMenu
              options={shipTypeList.map((menu) => menu.title)}
              label="How do you currently ship e-commerce orders with"
              value={stepThreeFields.shippingMethod}
              onChange={(value) => handleChangeInput(value, "shippingMethod")}
            />
          }
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
          {
            loading() ?
              <div role="status">
                <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                <span class="sr-only">Loading...</span>
              </div> : "Let’s Start!"
          }
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
