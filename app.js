document.addEventListener("DOMContentLoaded", () => {
    const inputNome = document.getElementById("amigo");
    const listaNomes = document.getElementById("listaAmigos");
    const resultado = document.getElementById("resultado");
    let nomes = [];

    window.adicionarAmigo = function () {
        const nome = inputNome.value.trim();
        if (!nome) {
            alert("Por favor, insira um nome válido.");
            return;
        }
        nomes.push(nome);
        atualizarLista();
        inputNome.value = "";
    };

    window.sortearAmigo = function () {
        if (nomes.length === 0) {
            alert("A lista de amigos está vazia. Adicione nomes antes de sortear.");
            return;
        }
        const indiceSorteado = Math.floor(Math.random() * nomes.length);
        const sorteado = nomes[indiceSorteado];
        resultado.innerHTML = `<li>O amigo secreto sorteado é: <strong>${sorteado}</strong></li>`;
    };

    function atualizarLista() {
        listaNomes.innerHTML = "";
        nomes.forEach(nome => {
            const li = document.createElement("li");
            li.textContent = nome;
            listaNomes.appendChild(li);
        });
    }
});
