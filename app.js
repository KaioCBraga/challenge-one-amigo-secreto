let amigos = [];

function adicionarAmigo() {
  let input = document.getElementById("amigo");

  // Verifica se o campo de entrada está vazio
  if (input.value.trim() === "") {
    alert("Por favor, insira um nome!!");
  } else {
    // Adiciona o nome ao array de amigos
    amigos.push(input.value.trim());

    // Limpa o campo de entrada
    input.value = "";
  }
  gerarLista();
}

function gerarLista() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  for (let i = 0; i < amigos.length; i++) {
    let item = document.createElement("li");
    item.textContent = amigos[i];
    lista.appendChild(item);
  }
}

function sortearAmigo() {
  if (amigos.length !== 0) {
    let nomeSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado = document.getElementById("resultado");
    resultado.textContent = "Você escolheu: " + nomeSorteado;
  } else {
    alert("Digite um nome no espaço superior!");
  }
}
