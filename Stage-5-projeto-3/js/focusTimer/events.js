import * as elements from "./elements.js"
import * as Actions from "./actions.js"
import state from "./state.js"
import * as timer from "./timer.js"

export const RegisterControls = () => {
  elements.Controls.addEventListener('click', (event) => {
    const Action = event.target.dataset.action
    if(typeof Actions[Action] != 'function'){
      return
    }
    Actions[Action]()
  })
}

export const SET_MINUTES = () => {
  elements.minutes.addEventListener("focus", () => {
    elements.minutes.textContent = ""
  })

  elements.minutes.onkeydown = (event) => /\d/.test(event.key)

  elements.minutes.addEventListener("blur", (event) => {
    let time = event.currentTarget.textContent
    time = time > 60 ? 60 : time

    state.minutes = time
    state.seconds = 0

    timer.UPDATE_DISPLAY()
    elements.minutes.removeAttribute('contenteditable')
  })
}