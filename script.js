var centesimos = 0
var segundos = 0
var minutos = 0
var horas = 0

function startCrono() {
  control = setInterval(cronometro, 10)
  document.getElementById('start').disabled = true
  document.getElementById('stop').disabled = false
  document.getElementById('reset').disabled = true
}

function stopCrono() {
  clearInterval(control)
  document.getElementById('start').disabled = false
  document.getElementById('stop').disabled = true
  document.getElementById('reset').disabled = false
}

function resetCrono() {
  clearInterval(control)
  horas = 0
  minutos = 0
  segundos = 0
  centesimos = 0
  document.getElementById('horas').innerText = '00'
  document.getElementById('minutos').innerText = '00'
  document.getElementById('segundos').innerText = '00'
  document.getElementById('centesimos').innerText = '000'
  document.getElementById('start').disabled = false
  document.getElementById('stop').disabled = true
  document.getElementById('reset').disabled = true
}

function cronometro() {
  if ((centesimos += 10) == 1000) {
    centesimos = 0
    segundos++
  }
  if (segundos == 60) {
    segundos = 0
    minutos++
  }
  if (minutos == 60) {
    minutos = 0
    horas++
  }
  if (horas == 23 && minutos == 60) {
    centesimos = 0
    segundos = 0
    minutos = 0
    horas = 0
  }

  document.getElementById('centesimos').innerText = returnCent(centesimos)
  document.getElementById('segundos').innerText = returnData(segundos)
  document.getElementById('minutos').innerText = returnData(minutos)
  document.getElementById('horas').innerText = returnData(horas)
}

function returnData(input) {
  return input > 9 ? input : `0${input}`
}

function returnCent(input) {
  return input < 100 ? `0${input}` : input
}
