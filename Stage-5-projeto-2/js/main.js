import { Modal } from './modal.js'
import { HandleKeyDown } from './handleKeyDown.js'
import { Validation } from './formValidation.js'

const form = document.querySelector(".card form")
const inputWeight = document.querySelector("#form-weight")
const inputHeight = document.querySelector("#form-height")

//Valida o envio do formulario e abre do modal ou mensagem de erro
form.onsubmit = event => {
  event.preventDefault()

  if(Validation(inputWeight.value, inputHeight.value)) {
    Modal.open(inputWeight.value, inputHeight.value)
  }
}

//Lida com o fechamento do modal pelo clique do mouse
Modal.closeButton.onclick = () => {
  Modal.close(form)
}

//Lida com o fechamento do modal pelo clique da tecla esc(Escape)
window.addEventListener('keydown', event => {
  HandleKeyDown(event, form)
})

//Verifica o input
inputWeight.oninput = () => {
  document.querySelector(".alert-error").classList.remove("open")
}

inputHeight.oninput = () => {
  document.querySelector(".alert-error").classList.remove("open")
}