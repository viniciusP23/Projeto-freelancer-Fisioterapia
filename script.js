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

