import { endpoints } from "../endpoints";
import type { OrderListIntegration, SaleChannelListInterface } from "./interface";

export const SITE_DOMAIN = "https://irsal.pk";
export const checkStartTrialLocation = () =>
  window.location.pathname === "/start-free-trial" || window.location.pathname === "/start-free-trial/";
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
      method: 'POST',
      body: data,
    });
    const result = await response.json();

    if (result?.message === "Available") {
      return "true";
    } else {
      return result.error[key][0]
    }
  } catch (error) {
    console.error('An error occurred', error);
    return `${error}`;
  }
}

export const numberVerification = async (value: string, key: string) => {
  try {
    const data = new FormData();
    data.append(key, value);
    const response = await fetch(endpoints.number_verification, {
      method: 'POST',
      body: data,
    });
    const result = await response.json();
    console.log("Number", response, result);
    // if (result?.message === "Available") {
    //   return "true";
    // } else {
    //   return result.error[key][0]
    // }
  } catch (error) {
    console.error('An error occurred', error);
    return `${error}`;
  }
}

export const listSaleChannel = async (key: string): Promise<string | SaleChannelListInterface[]> => {
  try {
    const response = await fetch(endpoints.list_order_integration(key), {
      method: 'GET'
    });
    const result = await response.json();
    const list: OrderListIntegration[] = result.results;
    console.log("Number>>>>>.", response, list);
    return list.map(result => ({ id: result.id, title: result.title }))
  } catch (error) {
    console.error('An error occurred', error);
    return `${error}`;
  }
}


