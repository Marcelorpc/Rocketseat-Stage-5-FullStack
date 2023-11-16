let darkMode = true
const ToggleButton = document.getElementById("toggle-mode")

ToggleButton.addEventListener("click", (event) => {
  document.documentElement.classList.toggle("light")

  const mode = darkMode ? 'Light' : 'Dark'

  event.currentTarget.querySelector('span').textContent = `${mode} mode ativado!`

  darkMode = !darkMode
})