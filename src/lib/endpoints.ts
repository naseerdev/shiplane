import { base_url } from "./utils/constants";

export const endpoints = {
  email: {
    verify: `${base_url}/api/v1/onboarding/check-availability/`,
  },
  check_availability: `${base_url}/api/v1/onboarding/check-availability/`,
  number_verification: `${base_url}/api/v1/onboarding/number-verification/`,
  list_order_integration: (key: string) => `${base_url}/api/v1/onboarding/integration_channels/?integration_type=${key}`,
  onBoarding: `${base_url}/api/v1/onboarding/onboard/`
}