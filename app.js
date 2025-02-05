let amigoSecreto = [];

function agregarAmigo() {
    let nuevoAmigo = document.querySelector('#amigo').value.trim();
    if (nuevoAmigo === "") {
        alert("El campo no debe estar vacío");
        return;
    }
    amigoSecreto.push(nuevoAmigo);
    limpiarCaja();
    actualizarLista();
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    if (amigoSecreto.length === 0) {
        let li = document.createElement("li");
        li.textContent = "No hay amigos agregados";
        lista.appendChild(li);
        return;
    }

    for (let i = 0; i < amigoSecreto.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigoSecreto[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; 

    if (amigoSecreto.length === 0) {
        let li = document.createElement("li");
        li.textContent = "No hay amigos para sortear.";
        resultado.appendChild(li);
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigoSecreto.length);
    let amigoSorteado = amigoSecreto[indiceAleatorio];

    let li = document.createElement("li");
    li.textContent = `🎉 Amigo sorteado: ${amigoSorteado} 🎉`;
    resultado.appendChild(li);
}