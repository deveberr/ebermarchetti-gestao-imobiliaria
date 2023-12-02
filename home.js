const campoBusca = document.getElementById("campo-busca");

const textoDesejado = "Digite o código do imóvel...";
let larguraDesejada = textoDesejado.length - 10;

// Função para verificar e atualizar a largura do campo de busca
function atualizarLarguraCampoBusca() {
  if (window.innerWidth <= 600) {
    larguraDesejada = textoDesejado.length - 6; // Altere o valor desejado
  } else {
    larguraDesejada = textoDesejado.length - 6; // Valor padrão
  }
  campoBusca.style.width = larguraDesejada + "ch";
}

// Adicione um ouvinte de evento para verificar a largura da tela
window.addEventListener("load", atualizarLarguraCampoBusca);
window.addEventListener("resize", atualizarLarguraCampoBusca);

// Header menu mobile
const btnMobile = document.getElementsByClassName("btn-mobile")[0];

function toggleMenu(event) {
  if (event.type === "touchstart") event.prevent.Default();
  const nav = document.querySelector(".nav");
  nav.classList.toggle("active");
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu, { passive: true });

// Lightbox

// document.addEventListener("DOMContentLoaded", function () {
//   const lightbox = document.getElementById("lightbox");
//   const lightboxContent = document.querySelector(".lightbox-content");
//   const lightboxClose = document.getElementById("lightbox-close");
//   const lightboxTriggers = document.querySelectorAll(".lightbox-trigger");

//   lightboxTriggers.forEach((trigger) => {
//     trigger.addEventListener("click", function () {
//       const imageUrl = trigger.querySelector("img").src;
//       lightboxContent.src = imageUrl;
//       lightbox.style.display = "flex";
//     });
//   });

//   lightboxClose.addEventListener("click", function () {
//     lightbox.style.display = "none";
//   });

//   lightbox.addEventListener("click", function (event) {
//     if (event.target === lightbox) {
//       lightbox.style.display = "none";
//     }
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const lightbox = document.getElementById("lightbox");
  const lightboxContent = document.querySelector(".lightbox-content");
  const lightboxClose = document.getElementById("lightbox-close");
  const lightboxTriggers = document.querySelectorAll(".lightbox-trigger");

  lightboxTriggers.forEach((trigger) => {
    trigger.addEventListener("click", function () {
      const imageUrl = trigger.getAttribute("data-src");
      lightboxContent.src = imageUrl;
      lightbox.style.display = "flex";
    });
  });

  lightboxClose.addEventListener("click", function () {
    lightbox.style.display = "none";
  });

  lightbox.addEventListener("click", function (event) {
    if (event.target === lightbox) {
      lightbox.style.display = "none";
    }
  });
});
