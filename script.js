const nome = document.getElementById("nome")
const mensagem = document.getElementById("mensagem")
const telefone = "5514998871712"

const texto = `Olá! me chamo ${nome}, ${mensagem}`
const msgFormatada = encodeURIComponent(texto)

const url = `https://whatsa.me/${telefone}/?t=${msgFormatada}`

window.open(url, "-blank")