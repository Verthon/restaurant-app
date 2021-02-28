import { getTomorrowsDate } from '../utils/helpers'

export const DATEPICKER_CONFIG = {
  startDate: getTomorrowsDate(),
  minTime: 12,
  maxTime: 22
}

const easing = [0.175, 0.85, 0.42, 0.96]

export const TRANSITIONS = {
  initial: { opacity: 0, y: 50 },
  exit: { opacity: 0, y: 50, transition: { duration: 0.5, ease: easing } },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easing
    }
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easing
    }
  }
}
