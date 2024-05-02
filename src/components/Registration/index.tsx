import { createSignal, Show, type Accessor, type Component } from "solid-js";
import ProgressBar from "../Common/ProgressBar/ProgressBar";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import { Motion } from "solid-motionone";
import StepThree from "./StepThree";
import OtpModal from "../OTP";
import type { CompletedDataInterface, StepTwoDataInterface } from "../../lib/utils/interface";
import { createStore } from "solid-js/store";
// import StepFour from "./StepFour";

const RegistrationStepper: Component = () => {

  const [completeData, setCompleteData] = createStore<CompletedDataInterface>({
    email: "", phoneNumber: "", name: "", companyName: "", companyInfo: ""
  });
  const [currentStep, setCurrentStep] = createSignal(4);
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
    setOpen(true)
  }

  return (
    <div>
      
        <div class="mb-10">
          <ProgressBar currentStep={currentStep} />
        </div>
      
      {currentStep() === 1 && (
        <Motion.div animate={{ x: [-100, 0] }} transition={{ duration: 1 }}>
          <StepOne emailAvailable={setStepOneEmail} />
        </Motion.div>
      )}
      {currentStep() === 2 && (
        <Motion.div animate={{ x: [-100, 0] }} transition={{ duration: 1 }}>
          <StepTwo backStep={oneBackStep} setStepTwoData={setStepTwoData} />
        </Motion.div>
      )}
      {currentStep() === 3 && (
        <Motion.div animate={{ x: [-100, 0] }} transition={{ duration: 1 }}>
          <StepThree nextStep={goToNextStep} backStep={oneBackStep} completeData={completeData} />
        </Motion.div>
      )}
      {currentStep() === 4 && (
        <Motion.div animate={{ x: [-100, 0] }} transition={{ duration: 1 }}>
          {/* <StepFour /> */}
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
