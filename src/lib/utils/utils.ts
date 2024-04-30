import { REGISTER_ROUTE } from "./constants";

export const checkStartTrialLocation = () => window.location.pathname === REGISTER_ROUTE
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
