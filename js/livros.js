// Lista de livros exibida na página inicial.
const livros = [
  { titulo: "Pro Git", autor: "Scott Chacon e Ben Straub", ano: 2014 },
  { titulo: "O Programador Pragmático", autor: "Andrew Hunt e David Thomas", ano: 1999 },
  { titulo: "Código Limpo", autor: "Robert C. Martin", ano: 2008 },
];

function renderizarLivros(lista) {
  const ul = document.getElementById("lista-livros");
  ul.innerHTML = "";
  for (const livro of lista) {
    const li = document.createElement("li");
    li.textContent = `${livro.titulo} — ${livro.autor} (${livro.ano})`;
    ul.appendChild(li);
  }
}

renderizarLivros(livros);
