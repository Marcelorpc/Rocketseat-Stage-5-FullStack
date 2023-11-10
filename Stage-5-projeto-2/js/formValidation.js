export const Validation = (weight, height) => {
  const AlertError = document.querySelector(".alert-error")
  const NotANumber = weight == "" || height == "" || isNaN(weight) || isNaN(height)

  if (NotANumber) {
    AlertError.classList.add("open")
    return false
  } 
  else {
    AlertError.classList.remove("open")
    return true
  }
}