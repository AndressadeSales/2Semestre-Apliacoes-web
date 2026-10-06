// Base de dados simulando entrada vinda de um arquivo/API JSON
const jsonBaseDeDados = `[
  {"id": 1, "nome": "Smartphone Galaxy", "categoria": "Eletrônicos", "preco": 2500},
  {"id": 2, "nome": "Camiseta Algodão", "categoria": "Roupas", "preco": 80},
  {"id": 3, "nome": "Notebook Pro", "categoria": "Eletrônicos", "preco": 5200},
  {"id": 4, "nome": "Jaqueta Jeans", "categoria": "Roupas", "preco": 220},
  {"id": 5, "nome": "Fone Sem Fio", "categoria": "Eletrônicos", "preco": 350}
]`;

// 1. Converter o JSON para Array de objetos JavaScript
const produtos = JSON.parse(jsonBaseDeDados);

function renderizar(lista) {
  const container = document.getElementById("gradeProdutos");
  container.innerHTML = "";

  if (lista.length === 0) {
    container.innerHTML = "<p>Nenhum produto encontrado.</p>";
    return;
  }

  // Percorre a lista recebida e renderiza cada card
  lista.forEach(produto => {
    const card = document.createElement("div");
    card.className = "card-produto";
    
    // Estrutura HTML interna do card
    card.innerHTML = `
      <h3>${produto.nome}</h3>
      <p>Categoria: ${produto.categoria}</p>
      <p class="preco">R$ ${produto.preco.toFixed(2)}</p>
    `;

    container.appendChild(card);
  });
}

function filtrarProdutos() {
  const texto = document.getElementById("filtroTexto").value.toLowerCase();
  const categoria = document.getElementById("filtroCategoria").value;

  // Lógica de filtragem com .filter()
  const produtosFiltrados = produtos.filter(produto => {
    // 1. Condição do nome
    const bateuNome = produto.nome.toLowerCase().includes(texto);
    
    // 2. Condição da categoria
    const bateuCategoria = categoria === "todas" || produto.categoria === categoria;

    // Retorna verdadeiro se ambas as condições forem atendidas
    return bateuNome && bateuCategoria;
  });

  // Renderiza apenas os produtos filtrados
  renderizar(produtosFiltrados);
}

// Renderização inicial com todos os produtos
renderizar(produtos);