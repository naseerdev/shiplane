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
