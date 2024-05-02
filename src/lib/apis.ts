import { endpoints } from "./endpoints";

export const verifyEmail = async (email: string) => {
  const data = new FormData();
  data.append("email", email());

  const response = await fetch(endpoints.email.verify, {
    method: 'POST',
    body: email,
  });
  return response;

};
