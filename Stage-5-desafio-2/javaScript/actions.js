import * as elements from "./elements.js"
import * as audios from "./audios.js"
import * as timer from "./timer.js"

export const TIMER_CONTROL = (activeButton) => {
  if(activeButton.id == "button-play"){
    TOGGLE_PLAY_START()
    elements.TIMER_DISPLAY.classList.add("running")
    timer.COUTNDOWN()
  } else if(activeButton.id == "button-pause"){
    TOGGLE_PLAY_START()
    elements.TIMER_DISPLAY.classList.remove("running")
  }
  if(activeButton.id == "button-stop"){
    TOGGLE_STOP(activeButton)
  }
}

export const TOGGLE_PLAY_START = () =>{
  elements.TIMER_PLAY_BUTTON.classList.toggle("secondary")
  elements.TIMER_PAUSE_BUTTON.classList.toggle("secondary")
  elements.TIMER_PAUSE_BUTTON.classList.toggle("active")

  if(elements.TIMER_BUTTON_STOP.classList.contains("active")){
    elements.TIMER_BUTTON_STOP.classList.remove("active")
  }
}

const TOGGLE_STOP = (activeButton) => {
  if(elements.TIMER_DISPLAY.classList.contains("running")) {
    if(elements.TIMER_PAUSE_BUTTON.classList.contains("active")){
      TOGGLE_PLAY_START()
    }
    
    activeButton.classList.toggle("active")
    RESET_TIMER_APP()
    setTimeout(() => {
      activeButton.classList.toggle("active")
    }, 500);
  }
}

export const TOGGLE_BUTTON_MUSIC_ACTIVE = (activeButton) => {
  activeButton.classList.toggle("active")

  elements.TIMER_DISPLAY_BUTTONS_SONGS.forEach(button => {
    if(button.id != activeButton.id){
      button.classList.remove("active")
    }
  })
}

export const CONTROL_AUDIOS = (activeButton) => {
  if(activeButton.id == "button-forest" && activeButton.classList.contains("active")){
    audios.FOREST_SONG.play()
  } else {
    audios.FOREST_SONG.pause()
  }

  if(activeButton.id == "button-rain" && activeButton.classList.contains("active")){
    audios.RAIN_SONG.play()
  } else {
    audios.RAIN_SONG.pause()
  }

  if(activeButton.id == "button-coffe-shop" && activeButton.classList.contains("active")){
    audios.COFFE_SHOP_SONG.play()
  } else {
    audios.COFFE_SHOP_SONG.pause()
  }

  if(activeButton.id == "button-fireplace" && activeButton.classList.contains("active")){
    audios.FIREPLACE_SONG.play()
  } else {
    audios.FIREPLACE_SONG.pause()
  }
}

export const PLUS_TIME = () => {
  if(elements.TIMER_DISPLAY.classList.contains("running")) {
    return
  } else {
    let MINUTES = Number(elements.MINUTES.textContent)
    let SECONDS = Number(elements.SECONDS.textContent)
    
    if(MINUTES < 60){
      elements.PLUS_TIME_BUTTON.classList.add("active")
      MINUTES+=5
    }
  
    timer.UPDATE_DISPLAY(MINUTES, SECONDS)
    setTimeout(() => {
      elements.PLUS_TIME_BUTTON.classList.remove("active")
    }, 200);
  }
}

export const MINUS_TIME = () => {
  if(elements.TIMER_DISPLAY.classList.contains("running")) {
    return
  } else {
    let MINUTES = Number(elements.MINUTES.textContent)
    let SECONDS = Number(elements.SECONDS.textContent)
  
    if(MINUTES > 0){
      elements.MINUS_TIME_BUTTON.classList.add("active")
      MINUTES-=5
    }
    
    timer.UPDATE_DISPLAY(MINUTES, SECONDS)
    setTimeout(() => {
      elements.MINUS_TIME_BUTTON.classList.remove("active")
    }, 200);
  }
}

export const RESET_TIMER_APP = () => {
  elements.TIMER_DISPLAY.classList.remove("running")
  timer.UPDATE_DISPLAY(5, 0)
}