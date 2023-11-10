import { CalculateIMC } from "./utils.js"

export const Modal = {
  modalWrapper: document.querySelector(".modal-wrapper"),
  imcText: document.querySelector("#imc-text"),
  closeButton: document.querySelector(".close"),

  //funcao para abrir o modal com a resposta
  open(weight, height) {
    Modal.imcText.innerText = `Seu IMC e de ${CalculateIMC(weight, height)}`
    Modal.modalWrapper.classList.add("open")
  },

  //Funcao para fechar o modal e zerar o formulario
  close(form) {
    form.reset(form)
    Modal.modalWrapper.classList.remove("open")
  }
}