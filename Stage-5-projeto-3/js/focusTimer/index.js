import state from './state.js'
import * as Events from './events.js'
import * as timer from './timer.js'

export const Start = (minutes, seconds) => {
  state.minutes = minutes
  state.seconds = seconds

  timer.UPDATE_DISPLAY()

  Events.RegisterControls()
  Events.SET_MINUTES()
}