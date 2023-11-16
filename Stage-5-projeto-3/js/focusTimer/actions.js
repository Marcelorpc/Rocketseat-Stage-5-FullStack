import state from "./state.js"
import * as timer from "./timer.js"
import * as elements from "./elements.js"
import * as sounds from "./sounds.js"

export const ToggleRunning = () => {
  state.isRunning = document.documentElement.classList.toggle("running")

  timer.COUNTDOWN()
  sounds.BUTTON_PRESS_AUDIO.play()
}

export const Set = () => {
  elements.minutes.setAttribute('contenteditable', true)
  elements.minutes.focus()
}

export const ToggleMusic = () => {
  state.isMute = document.documentElement.classList.toggle("music-on")

  if(state.isMute) {
    sounds.BG_AUDIO.play()
    return
  }

  sounds.BG_AUDIO.pause()
}

export const Reset = () => {
  state.isRunning = false
  document.documentElement.classList.remove("running")
  timer.UPDATE_DISPLAY()
  sounds.BUTTON_PRESS_AUDIO.play()
}