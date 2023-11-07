document.addEventListener("DOMContentLoaded", function () {
  const screen1 = document.querySelector(".screen1")
  const screen2 = document.querySelector(".screen2")
  const tryGuessButton = document.querySelector("#tryGuessButton")
  const resetGameButton = document.querySelector("#resetGameButton")
  const tryAndGuessParagraph = document.querySelector(".screen1 > p")

  let secretNumber = Math.round(Math.random() * 10)
  let counter = 0

  function handleTryGuessClick(event) {
    event.preventDefault()

    const inputNumber = document.querySelector("#inputNumber")
    document.querySelector(".screen1 > p").innerText = `Tentativa: ${counter}`

    if(inputNumber.value == '') {
      alert("Entrada invalida! Voce precisa digitar um numero antes de fazer sua tentativa!")
    } else {
      counter++
      if (Number(inputNumber.value) == secretNumber) {
        screen1.classList.add("hide")
        screen2.classList.remove("hide")
        screen2.querySelector("h2").innerText = `Voce acertou em ${counter} tentativas!`
      } else if (Number(inputNumber.value) > secretNumber) {
        tryAndGuessParagraph.innerText = `Tentativa ${counter} 
        Seu chute foi maior que o numero secreto!`
      } else {
        tryAndGuessParagraph.innerText = `Tentativa ${counter} 
        Seu chute foi menor que o numero secreto!`
      }
    }
    
    inputNumber.value = ''
  }

  function handleResetGameClick() {
    screen1.classList.remove("hide")
    screen2.classList.add("hide")
    counter = 1
    secretNumber = Math.round(Math.random() * 10)
    tryAndGuessParagraph.innerText = `Tentativas: 0`
  }

  tryGuessButton.addEventListener("click", handleTryGuessClick)
  resetGameButton.addEventListener("click", handleResetGameClick)
})