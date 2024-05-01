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
