function verificarAcesso() {
  const input = document.getElementById("inputEntrada");
  const resultado = document.getElementById("resultado");
  
  // Obter o valor digitado e converter para Número
  const idade = Number(input.value);

  // Verificação da regra de acesso por idade
  if (idade >= 18) {
    resultado.textContent = "Acesso Permitido!";
    resultado.classList.add("permitido");
    resultado.classList.remove("negado");
  } else {
    resultado.textContent = "Acesso Negado: Apenas para maiores de 18 anos.";
    resultado.classList.add("negado");
    resultado.classList.remove("permitido");
  }
}