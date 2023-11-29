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

// Header mobile
const btnMobile = document.getElementsByClassName("btn-mobile")[0];

function toggleMenu(event) {
  if (event.type === "touchstart") event.prevent.Default();
  const nav = document.querySelector(".nav");
  nav.classList.toggle("active");
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);
