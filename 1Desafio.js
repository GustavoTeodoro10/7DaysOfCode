function desafio1(){

  let numeroUm = 1
  let stringUm = '1'
  let numeroTrinta = 30
  let stringTrinta = '30'
  let numeroDez = 10
  let stringDez = '10'

  if (numeroUm == stringUm) {
    alert('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
  } else {
    alert('As variáveis numeroUm e stringUm não tem o mesmo valor')
  }

  if (numeroTrinta === stringTrinta) {
    alert('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
  } else {
    alert('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo')
  }

  if (numeroDez == stringDez) {
    alert('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
  } else {
    alert('As variáveis numeroDez e stringDez não tem o mesmo valor')
  }
  alert('FIM')
};