const imagens = document.querySelectorAll(".feedback-card img");
const modal = document.getElementById("modalImg");
const modalImg = document.getElementById("imgModalConteudo");
const fechar = document.querySelector(".fechar-modal");

imagens.forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
  });
});

fechar.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

///


function enviarWhats(event) {

  event.preventDefault()

  const nome = document.getElementById("nome").value
  const mensagem = document.getElementById("mensagem").value
  const telefone = "5514997665295"

  const texto = `Olá! me chamo ${nome}, ${mensagem}`
  const msgFormatada = encodeURIComponent(texto)

  const url = `https://whatsa.me/${telefone}/?t=${msgFormatada}`

  window.open(url, "_blank")
}

