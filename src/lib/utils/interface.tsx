import type { Accessor } from "solid-js";

export type InputFieldChange = InputEvent & {
  currentTarget: HTMLInputElement;
  target: Element;
};
export interface InputFieldProps {
  label: string;
  placeholder: string;
  type?: string;
  name?: string;
  value?: string;
  error: string | Accessor<string>;
  onInput?: (value: string) => void;
}
export interface SelectMenuProps {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}

export interface StepThreeStateInterface {
  websiteAddress: string;
  salesChannels: string;
  shippingMethod: string;
  ordersPerMonth: string;
  isChecked1: boolean;
  isChecked2: boolean;
}
export interface StepTwoDataInterface {
  name: string,
  companyName: string,
  phoneNumber: string,
  companyInfo: string,
  numberStatus: string
}
export interface CompletedDataInterface extends StepTwoDataInterface {
  email: string
}
export interface SaleChannelListInterface {
  id: string;
  title: string;
}
export interface OrderListIntegration extends SaleChannelListInterface {
  created_at: string;
  updated_at: string;
  integration_type: string;
  integration: string;
  is_active: boolean;
}
        