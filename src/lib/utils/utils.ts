import { endpoints } from "../endpoints";
import type { OrderListIntegration, SaleChannelListInterface } from "./interface";

export const SITE_DOMAIN = "https://irsal.pk";
export const checkHomeLocation = () => window.location.pathname === "/";
export const validateEmail = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};
export const validatePhoneNumber = (phoneNumber: string): boolean => {
  const regex = /^\d{10}$/;
  return regex.test(phoneNumber);
};

export const validateCompanyName = (companyName: string): boolean => {
  if (!companyName.trim()) {
    return false;
  }
  if (/\s/.test(companyName) || /[^\w\s]/.test(companyName)) {
    return false;
  }
  return true;
};

export const checkAvailability = async (value: string, key: string): Promise<string> => {
  try {
    const data = new FormData();
    data.append(key, value);
    const response = await fetch(endpoints.check_availability, {
      method: "POST",
      body: data,
    });
    const result = await response.json();

    if (result?.message === "Available") {
      return "true";
    } else {
      return result.error[key][0];
    }
  } catch (error) {
    return `${error}`;
  }
};

export const numberVerification = async (value: string, key: string): Promise<string> => {
  try {
    const data = new FormData();
    data.append(key, value);
    const response = await fetch(endpoints.number_verification, {
      method: "POST",
      body: data,
    });
    const result = await response.json();

    if (result?.otp_delivery_status === "verified") {
      return "verified";
    } else if (result?.otp_delivery_status === "sent" || result?.otp_delivery_status === "pending") {
      return "sent";
    } else {
      return "failed";
    }
  } catch (error) {
    console.error("An error occurred", error);
    return `${error}`;
  }
};

export const listSaleChannel = async (key: string): Promise<string | SaleChannelListInterface[]> => {
  try {
    const response = await fetch(endpoints.list_order_integration(key), {
      method: "GET",
    });
    const result = await response.json();
    const list: OrderListIntegration[] = result.results;

    return list.map((result) => ({ id: result.id, title: result.title }));
  } catch (error) {
    return `${error}`;
  }
};
