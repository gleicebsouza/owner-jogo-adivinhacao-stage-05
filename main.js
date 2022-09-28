//VARIÁVEIS
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// EVENTOS
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', function (e) {
  if (e.key == 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick()
  }
})

//FUNÇÕES ( função callback = chamar de volta
//MÉTODOS
function handleTryClick(event) {
  event.preventDefault()
  // event.preventDefault() : não faça o padrão desse evento

  const inputNumber = document.querySelector('#inputNumber')
  //Pegar elementos dentro do HTML. Pegamos pelo seletor CSS. Onde seu seletor css é o seu ID Usamos o 'querySeletor' para fazer a pesquisa de 'inputNumber' no código_/

  if (Number(inputNumber.value) == randomNumber) {
    toggleScreen()

    screen2.querySelector(
      ' h2'
    ).innerText = `Parabéns,acertou em  ${xAttempts} tentativas`
  }
  inputNumber.value = ''
  xAttempts++
  // pegamos o valor do INPUT através do 'value'
}
function handleResetClick() {
  toggleScreen()
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)
}
function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}
