// Seleciona o botão de menu hambúrguer e a lista de itens do menu
const hamburgerMenu = document.querySelector(".hamburger-menu");
const menu = document.querySelector(".menu");

// Adiciona um evento de clique ao botão de menu hambúrguer
hamburgerMenu.addEventListener("click", () => {
  // Alterna a classe 'active' para mostrar ou esconder o menu
  menu.classList.toggle("active");
});
