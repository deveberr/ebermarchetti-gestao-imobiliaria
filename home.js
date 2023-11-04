// const campoBusca = document.getElementById("campo-busca");

// const textoDesejado = "Digite a cidade, bairro ou código do imóvel...";
// let larguraDesejada = textoDesejado.length - 10;
// campoBusca.style.width = larguraDesejada + "ch";

// function atualizarLarguraCampoBusca() {
//   if (window.innerWidth <= 600) {
//     larguraDesejada = textoDesejado.length - 15;
//   } else {
//     larguraDesejada = textoDesejado.length - 10;
//   }
// }

// window.addEventListener("resize", function () {
//   campoBusca;
//   if (window.innerWidth <= 600) {
//     campoBusca.placeholder = "Busque por imóveis...";
//   } else {
//     campoBusca.placeholder = textoDesejado;
//   }
// });

const campoBusca = document.getElementById("campo-busca");

const textoDesejado = "Digite a cidade, bairro ou código do imóvel...";
let larguraDesejada = textoDesejado.length - 10;

// Função para verificar e atualizar a largura do campo de busca
function atualizarLarguraCampoBusca() {
  if (window.innerWidth <= 600) {
    larguraDesejada = textoDesejado.length - 10; // Altere o valor desejado
  } else {
    larguraDesejada = textoDesejado.length - 10; // Valor padrão
  }
  campoBusca.style.width = larguraDesejada + "ch";
}

// Adicione um ouvinte de evento para verificar a largura da tela
window.addEventListener("load", atualizarLarguraCampoBusca);
window.addEventListener("resize", atualizarLarguraCampoBusca);

// Função para verificar e atualizar o placeholder
function atualizarPlaceholderCampoBusca() {
  if (window.innerWidth <= 600) {
    campoBusca.placeholder = "Digite o código do imóvel";
  } else {
    campoBusca.placeholder = textoDesejado;
  }
}

// Adicione um ouvinte de evento para verificar a largura da tela
window.addEventListener("load", atualizarPlaceholderCampoBusca);
window.addEventListener("resize", atualizarPlaceholderCampoBusca);
