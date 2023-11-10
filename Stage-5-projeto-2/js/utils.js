  //Funcao para calcular o IMC
  export const CalculateIMC = (weight, height) => {
    return (weight / ((height / 100) ** 2)).toFixed(2)
  }