import { createSignal } from "solid-js"
import Timer from "../Timer"

const EstimateTime = () => {
  const [completed, setCompleted] = createSignal(false)
  return (
    <p class="mx-auto pb-2 text-center text-dark text-[24px] leading-5 font-semibold  dark:text-white">
      {
        completed() ? <>Now you can <span class="text-primary">SingIn</span> check your <span class="text-primary">Email</span></> : <>
          Estimated Time : <span class="text-primary"><Timer time={120} onComplete={() => setCompleted(true)} /></span>
        </>
      }

    </p>
  )
}

export default EstimateTime