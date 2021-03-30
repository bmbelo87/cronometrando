var centesimos = 0;
var segundos = 0;
var minutos = 0;
var horas = 0;
var x = 0;
var crono = new Array();
var cronocompara = new Array();

function inicia() {
    control = setInterval(cronometro, 10);
    document.getElementById("start").disabled = true;
    document.getElementById("pause").disabled = false;
    document.getElementById("reset").disabled = false;
    document.getElementById("save").disabled = false;
}

function pausa() {
    clearInterval(control);
    document.getElementById("start").disabled = false;
    document.getElementById("pause").disabled = true;
    document.getElementById("save").disabled = false;
}

function reseta() {
    clearInterval(control);
    horas = 0;
    minutos = 0;
    segundos = 0;
    centesimos = 0;
    document.getElementById("horas").innerText = "00";
    document.getElementById("minutos").innerText = "00";
    document.getElementById("segundos").innerText = "00";
    document.getElementById("centesimos").innerText = "000";
    document.getElementById("start").disabled = false;
    document.getElementById("pause").disabled = true;
    document.getElementById("reset").disabled = true;
    document.getElementById("save").disabled = false;
}

function cronometro() {
    if ((centesimos += 10) == 1000) {
        centesimos = 0;
        segundos++;
    }
    if (segundos == 60) {
        segundos = 0;
        minutos++;
    }
    if (minutos == 60) {
        minutos = 0;
        horas++;
    }

    document.getElementById('centesimos').innerText = returnData(centesimos);
    document.getElementById('segundos').innerText = returnData(segundos);
    document.getElementById('minutos').innerText = returnData(minutos);
    document.getElementById('horas').innerText = returnData(horas);
}

function returnData(input) {
    return input > 10 ? input : `0${input}`
}

function salvar() {
    crono.push(`${horas}:${minutos}:${segundos}:${centesimos}<br/>`);

    var container = document.getElementById("teste");
    container.innerHTML = crono.join('');
    if (document.getElementById("start").disabled == false) {
        document.getElementById("save").disabled = true;
    }
}