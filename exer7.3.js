// Array inicial de tarefas
const tarefas = ["Estudar JavaScript", "Fazer os exercícios", "Comprar café", "Revisar o código"];

function renderizarTarefas() {
  const listaEl = document.getElementById("listaTarefas");
  listaEl.innerHTML = ""; // Limpa a lista antes de renderizar

  // Laço de repetição percorrendo o array 'tarefas'
  tarefas.forEach((tarefa) => {
    // 1. Crie um novo elemento 'li'
    const li = document.createElement("li");

    // 2. Defina o textContent do 'li' com o texto da tarefa atual
    li.textContent = tarefa;

    // 3. Adicione o 'li' dentro de 'listaEl'
    listaEl.appendChild(li);
  });
}

// Executa a função ao carregar a página
renderizarTarefas();