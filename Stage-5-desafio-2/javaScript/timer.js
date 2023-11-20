import * as elements from "./elements.js"
import * as actions from "./actions.js"

export const UPDATE_DISPLAY = (minutes, seconds) => {
  elements.MINUTES.textContent = String(minutes).padStart(2, 0)
  elements.SECONDS.textContent = String(seconds).padStart(2, 0)
}

let countdownId = null
export const COUTNDOWN = () => {
  clearTimeout(countdownId)

  if(!elements.TIMER_DISPLAY.classList.contains("running")){
    return
  }

  let minutes = Number(elements.MINUTES.textContent)
  let seconds = Number(elements.SECONDS.textContent)

  seconds--
  if(seconds < 0){
    minutes--
    seconds = 59
  }

  if(minutes < 0){
    actions.TOGGLE_PLAY_START()
    actions.RESET_TIMER_APP()
    return
  }

  UPDATE_DISPLAY(minutes, seconds)
  countdownId = setTimeout(() => COUTNDOWN(), 1000)
}