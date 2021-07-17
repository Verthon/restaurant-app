import * as React from "react"

import { Button } from "ui/Button/Button"
import { Props } from "./StepWizard.types"

export const StepWizard = ({ initialStep = 0, steps, hasPrevOnLastStep = true }: Props) => {
  const [step, setStep] = React.useState({
    current: initialStep,
    allSteps: steps.length,
  })

  const hasPrev = step.current > initialStep
  const hasNext = step.current < step.allSteps - 1

  const handleGoPrev = () => {
    setStep((prevState) => ({ ...prevState, current: step.current - 1 }))
  }

  const handleGoNext = () => {
    setStep((prevState) => ({ ...prevState, current: step.current + 1 }))
  }

  return (
    <div>
      {steps[step.current].component}
      <footer>
        {hasPrev && hasPrevOnLastStep ? (
          <Button variant="transparent" size="regular" onClick={handleGoPrev}>
            {steps[step.current].buttons?.prev || "Previous"}
          </Button>
        ) : null}
        {hasNext ? (
          <Button variant="dark" size="regular" onClick={handleGoNext}>
            {steps[step.current].buttons?.next || "Next"}
          </Button>
        ) : null}
      </footer>
    </div>
  )
}
