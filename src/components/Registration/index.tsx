import { createSignal, type Component } from "solid-js";
import ProgressBar from "../Common/ProgressBar/ProgressBar";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import { Motion } from "solid-motionone";
import StepThree from "./StepThree";

const RegistrationStepper: Component = () => {
  const [currentStep, setCurrentStep] = createSignal(1);

  const goToNextStep = () => {
    setCurrentStep(currentStep() + 1);
  };
  const oneBackStep = () => {
    setCurrentStep(currentStep() - 1);
  };

  return (
    <div>
      <div class="mb-10">
        <ProgressBar currentStep={currentStep} />
      </div>
      {currentStep() === 1 && (
        <Motion.div animate={{ x: [200, 0] }} transition={{ duration: 1 }}>
          <StepOne nextStep={goToNextStep} />
        </Motion.div>
      )}
      {currentStep() === 2 && (
        <Motion.div animate={{ x: [200, 0] }} transition={{ duration: 1 }}>
          <StepTwo nextStep={goToNextStep} backStep={oneBackStep} />
        </Motion.div>
      )}
      {currentStep() === 3 && (
        <Motion.div animate={{ x: [200, 0] }} transition={{ duration: 1 }}>
          <StepThree nextStep={goToNextStep} backStep={oneBackStep} />
        </Motion.div>
      )}
    </div>
  );
};

export default RegistrationStepper;
