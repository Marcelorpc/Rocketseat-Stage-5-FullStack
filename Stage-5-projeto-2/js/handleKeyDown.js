//Importa o modulo modal
import { Modal } from "./modal.js"


//Logica e exportacao da funcao que lida com os cliques do teclado
export const HandleKeyDown = (event, form) => {
  switch(event.key){
    case 'Escape':
      Modal.close(form)
      break
    default:
  }
}