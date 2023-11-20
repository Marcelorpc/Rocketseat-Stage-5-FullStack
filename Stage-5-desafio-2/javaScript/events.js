import * as elements from "./elements.js"
import * as actions from "./actions.js"

elements.TIMER_DISPLAY_BUTTONS_SONGS.forEach(activeButton => {
  activeButton.addEventListener("click", (event) => {
    actions.TOGGLE_BUTTON_MUSIC_ACTIVE(activeButton)
    actions.CONTROL_AUDIOS(activeButton)
  })
})

elements.TIMER_BUTTONS.forEach(activeButton => {
  activeButton.addEventListener("click", (event) => {
    actions.TIMER_CONTROL(activeButton)
  })
})

elements.PLUS_TIME_BUTTON.addEventListener("click", () => {
  actions.PLUS_TIME()
})

elements.MINUS_TIME_BUTTON.addEventListener("click", () => {
  actions.MINUS_TIME()
})