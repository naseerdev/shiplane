import { createSignal, Show, type Accessor, type Component } from "solid-js";
import ProgressBar from "../Common/ProgressBar/ProgressBar";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import { Motion } from "solid-motionone";
import StepThree from "./StepThree";
import OtpModal from "../OTP";
import type { CompletedDataInterface, StepTwoDataInterface } from "../../lib/utils/interface";
import { createStore } from "solid-js/store";

const RegistrationStepper: Component = () => {

  const [completeData, setCompleteData] = createStore<CompletedDataInterface>({
    email: "", phoneNumber: "", name: "", companyName: "", companyInfo: "", numberStatus: "",
  });
  const [currentStep, setCurrentStep] = createSignal(1);
  const [open, setOpen] = createSignal(false);

  const goToNextStep = () => {
    setOpen(false);
    setCurrentStep(currentStep() + 1);
  };

  const oneBackStep = () => {
    setCurrentStep(currentStep() - 1);
  };

  const setStepOneEmail = (email: Accessor<string>) => {
    setCompleteData({
      ...completeData,
      email: email()
    })
    goToNextStep()
  }

  const setStepTwoData = (data: StepTwoDataInterface) => {
    setCompleteData({
      ...completeData,
      ...data,
    })
    if (data.numberStatus === "verified") {
      goToNextStep()
    } else {
      setOpen(true)
    }

  }

  const handleSuccess = () => {
    window.location.href = "/success"
  }

  return (
    <div>

      <div class="mb-10">
        <ProgressBar currentStep={currentStep} />
      </div>

      {currentStep() === 1 && (
        <Motion.div animate={{ x: [-100, 0] }} transition={{ duration: 1 }}>
          <StepOne emailAvailable={setStepOneEmail} currentEmail={completeData.email} />
        </Motion.div>
      )}

      {currentStep() === 2 && (
        <Motion.div animate={{ x: [-100, 0] }} transition={{ duration: 1 }}>
          <StepTwo backStep={oneBackStep} setStepTwoData={setStepTwoData} currentData={completeData} />
        </Motion.div>
      )}

      {currentStep() === 3 && (
        <Motion.div animate={{ x: [-100, 0] }} transition={{ duration: 1 }}>
          <StepThree nextStep={handleSuccess} backStep={oneBackStep} completeData={completeData} />
        </Motion.div>
      )}

      <Show when={open()}>
        <OtpModal
          phoneNumber={completeData.phoneNumber}
          otpVerified={goToNextStep}
          closeModal={() => setOpen(false)}
        />
      </Show>
    </div>
  );
};

export default RegistrationStepper;
