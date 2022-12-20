type Step = {
  id: number
  buttons?: {
    prev?: string
    next?: string
  }
  component: React.ReactChild
}

export type Props = {
  steps: Step[]
  initialStep?: number
  hasPrevOnLastStep?: boolean
}
