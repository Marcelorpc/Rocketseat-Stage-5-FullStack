document.addEventListener("DOMContentLoaded", function() {
  const screen1 = document.querySelector(".screen1")
  const screen2 = document.querySelector(".screen2")
  const fortuneCookie = document.querySelector("#fortune-cookie")
  const openAnotherCookieButton = this.querySelector("#open-another-cookie-button")
  const sortedPhrase = document.querySelector("#sorted-phrase")
  let phrasesList = [
    "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
    "A vida fica mais doce quando compartilhamos sorrisos sinceros.",
    "Espalhe a alegria e colha amizades.",
    "A gentileza é a linguagem universal do coração.",
    "Sorria, pois você ilumina o mundo com sua felicidade.",
    "Um simples gesto de bondade pode fazer toda a diferença.",
    "Cultive a alegria e colha a gratidão.",
    "A felicidade é um presente que você pode dar a si mesmo e aos outros.",
    "Sua gentileza é a chave para corações felizes.",
    "Nunca subestime o poder de um sorriso genuíno.",
    "Ame, sorria, viva - essas são as chaves para a verdadeira felicidade."
  ]
  let randomNumber = Math.floor(Math.random() * phrasesList.length)

  function toggleScreens() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
  }

  function sortPhrase() {
    sortedPhrase.innerText = phrasesList[randomNumber]
    randomNumber = Math.floor(Math.random() * phrasesList.length)
  }

  fortuneCookie.addEventListener("click", toggleScreens)
  fortuneCookie.addEventListener("click", sortPhrase)
  openAnotherCookieButton.addEventListener("click", toggleScreens)
})