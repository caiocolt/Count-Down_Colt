const dia = window.document.getElementById('dia')
const hora = window.document.getElementById('hora')
const min = window.document.getElementById('min')
const seg = window.document.getElementById('seg')

const lancamento = '10 dec 2024'

function countDown() {
    const dataLanc = new Date(lancamento)
    const hoje = new Date()

    const segTotais = (dataLanc - hoje)/1000;

    const finalDias = Math.floor(segTotais / 60 / 60 / 24);
    const finalHoras = Math.floor(segTotais / 60 / 60) % 24;
    const finalMinutos = Math.floor(segTotais / 60) % 60;
    const finalSegundos = Math.floor(segTotais) %60;

    dia.innerHTML = formatoTempo(finalDias)
    hora.innerHTML = formatoTempo(finalHoras)
    min.innerHTML = formatoTempo(finalMinutos)
    seg.innerHTML = formatoTempo(finalSegundos)
}

function formatoTempo( tempo) {
    return tempo < 10? `0${tempo}` : tempo;
}

countDown();
setInterval(countDown, 1000)
