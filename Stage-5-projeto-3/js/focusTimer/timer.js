import state from "./state.js"
import * as elements from './elements.js'
import { Reset } from "./actions.js"
import { KITCHEN_TIMER } from "./sounds.js"

export const COUNTDOWN = () => {
  clearTimeout(state.CountDownId)

  if(!state.isRunning){
    return
  }

  let minutes = Number(elements.minutes.textContent)
  let seconds = Number(elements.seconds.textContent)

  seconds--
  if(seconds < 0) {
    seconds = 59
    minutes--
  }

  if(minutes < 0) {
    Reset()
    KITCHEN_TIMER.play()
    return
  }

  UPDATE_DISPLAY(minutes, seconds)
  state.CountDownId =  setTimeout(() => COUNTDOWN(), 1000)
}

export const UPDATE_DISPLAY = (minutes, seconds) => {
  minutes = minutes ?? state.minutes
  seconds = seconds ?? state.seconds

  elements.minutes.textContent = String(minutes).padStart(2, "0")
  elements.seconds.textContent = String(seconds).padStart(2, "0")
}