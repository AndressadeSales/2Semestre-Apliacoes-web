function atualizarPerfil() {
  // 1. Declare três variáveis com suas informações (nome, idade e biografia)
  const nome = "Seu Nome Aqui";
  const idade = 25;
  const bio = "Estudante e entusiasta da tecnologia.";

  // 2. Atualize os elementos do HTML utilizando o DOM
  document.getElementById("nome").textContent = nome;
  document.getElementById("idade").textContent = "Idade: " + idade;
  document.getElementById("biografia").textContent = bio;
}