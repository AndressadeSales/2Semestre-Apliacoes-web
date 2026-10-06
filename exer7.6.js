// Base de dados em memória
const personagens = [
  { 
    id: 1, 
    nome: "Fred Flintstone", 
    idade: 41, 
    foto: "https://upload.wikimedia.org/wikipedia/en/a/ad/Fred_Flintstone.png" 
  },
  { 
    id: 2, 
    nome: "Bob Pai", 
    idade: 55, 
    foto: "https://upload.wikimedia.org/wikipedia/en/2/29/Augie_Doggie_and_Doggie_Daddy.png" 
  },
  { 
    id: 3, 
    nome: "Rabugento", 
    idade: 19, 
    foto: "https://upload.wikimedia.org/wikipedia/en/e/e6/Muttley.png" 
  },
  { 
    id: 4, 
    nome: "Penélope Charmosa", 
    idade: 25, 
    foto: "https://upload.wikimedia.org/wikipedia/en/e/e3/Penelope_Pitstop.png" 
  },
  { 
    id: 5, 
    nome: "Zé Colméia", 
    idade: 36, 
    foto: "https://upload.wikimedia.org/wikipedia/en/1/18/Yogi_Bear_character.png" 
  },
  { 
    id: 6, 
    nome: "Dom Pixote", 
    idade: 32, 
    foto: "https://upload.wikimedia.org/wikipedia/en/d/df/Huckleberry_Hound.png" 
  },
  { 
    id: 7, 
    nome: "Manda-Chuva", 
    idade: 28, 
    foto: "https://upload.wikimedia.org/wikipedia/en/1/14/Top_Cat_character.png" 
  },
  { 
    id: 8, 
    nome: "Scooby-Doo", 
    idade: 16, 
    foto: "https://upload.wikimedia.org/wikipedia/en/5/53/Scooby-Doo.png" 
  }
];

// Estado da aplicação
let candidatoSelecionado = null;
let podeSerVotado = false;

// Inicializa a listbox de candidatos ao carregar
function carregarSelectPersonagens() {
  const select = document.getElementById("selectPersonagem");
  
  personagens.forEach(personagem => {
    const option = document.createElement("option");
    option.value = personagem.id;
    option.textContent = personagem.nome;
    select.appendChild(option);
  });
}

function selecionarPersonagem() {
  const select = document.getElementById("selectPersonagem");
  const idEscolhido = Number(select.value);

  // Encontra o candidato pelo ID
  candidatoSelecionado = personagens.find(p => p.id === idEscolhido);

  const painel = document.getElementById("painelDetalhes");

  if (candidatoSelecionado) {
    document.getElementById("fotoCandidato").src = candidatoSelecionado.foto;
    document.getElementById("nomeCandidato").textContent = candidatoSelecionado.nome;
    document.getElementById("idadeCandidato").textContent = candidatoSelecionado.idade;

    painel.style.display = "block";
  } else {
    painel.style.display = "none";
  }

  validarElegibilidade();
}

function validarElegibilidade() {
  const cargo = document.getElementById("selectCargo").value;
  const statusEl = document.getElementById("mensagemStatus");
  const btnVotar = document.getElementById("btnVotar");

  podeSerVotado = false;
  btnVotar.disabled = true;

  if (!candidatoSelecionado || !cargo) {
    statusEl.style.display = "none";
    return;
  }

  const idade = candidatoSelecionado.idade;
  let idadeMinima = 0;

  // Lógica da idade mínima por cargo
  switch (cargo) {
    case "Presidente":
    case "Senador(a)":
      idadeMinima = 35;
      break;
    case "Deputado(a) Federal":
    case "Deputado(a) Estadual":
      idadeMinima = 21;
      break;
    default:
      idadeMinima = 0;
  }

  // Verifica se a idade é suficiente
  if (idade >= idadeMinima) {
    podeSerVotado = true;
    statusEl.textContent = `Elegível para o cargo de ${cargo}!`;
    statusEl.className = "status elegivel";
    btnVotar.disabled = false;
  } else {
    podeSerVotado = false;
    statusEl.textContent = `Inelegível! Idade mínima necessária: ${idadeMinima} anos.`;
    statusEl.className = "status inelegivel";
  }

  statusEl.style.display = "block";
}

function registrarVoto() {
  if (!podeSerVotado) return;

  const cargo = document.getElementById("selectCargo").value;

  // Estrutura do comprovante de voto
  const comprovanteVoto = {
    dataHora: new Date().toISOString(),
    candidato: candidatoSelecionado.nome,
    cargo: cargo,
    protocolo: Math.floor(Math.random() * 1000000)
  };

  // Converte para JSON formatado
  const jsonVoto = JSON.stringify(comprovanteVoto, null, 2);

  // Exibe o resultado no container de saída
  document.getElementById("jsonResult").textContent = jsonVoto;
}

// Execução inicial ao carregar a página
carregarSelectPersonagens();