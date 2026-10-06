function processarJSON() {
  const jsonTexto = document.getElementById("jsonInput").value;
  const output = document.getElementById("output");

  try {
    // Converte a string jsonTexto em um Objeto/Array JavaScript
    const dados = JSON.parse(jsonTexto);

    // Limpa o output
    output.textContent = "";

    // Verifica se 'dados' é um Array e exibe os itens
    if (Array.isArray(dados)) {
      dados.forEach((item, index) => {
        output.textContent += `${index + 1}. Nome: ${item.nome || "Sem nome"} - Preço: R$ ${item.preco || 0}\n`;
      });
    } else {
      output.textContent = `Objeto individual lido:\nNome: ${dados.nome || "N/A"}`;
    }
    
  } catch (erro) {
    output.textContent = "Erro: O formato inserido não é um JSON válido!";
  }
}

function exportarNovoJSON() {
  const output = document.getElementById("output");

  // Objeto JS de exemplo
  const novoProduto = {
    id: 101,
    nome: "Monitor Gamer 144Hz",
    categoria: "Eletrônicos",
    emEstoque: true
  };

  // Converta o objeto 'novoProduto' para uma string JSON formatada (2 espaços de recuo)
  const jsonFormatado = JSON.stringify(novoProduto, null, 2);

  // Exibe na tela
  output.textContent = jsonFormatado;
}