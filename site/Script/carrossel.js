const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;

function updateCurrentItem(index) {
 items.forEach((item) => item.classList.remove("current-item"));
 items[index].scrollIntoView({ behavior: "smooth", inline: "center" });
 items[index].classList.add("current-item");
}

controls.forEach((control) => {
 control.addEventListener("click", (e) => {
    const isLeft = e.target.classList.contains("arrow-left");
    currentItem = isLeft ? currentItem - 1 : currentItem + 1;

    if (currentItem >= maxItems) {
      currentItem = 0;
    } else if (currentItem < 0) {
      currentItem = maxItems - 1;
    }

    updateCurrentItem(currentItem);
 });
});

let comentarios = [];

function adicionarComentario() {
    const nomeInput = document.getElementById('nome');
    const comentarioInput = document.getElementById('comentario');

    const nome = nomeInput.value;
    const comentario = comentarioInput.value;

    if (nome && comentario) {
        const novoComentario = {
            nome: nome,
            comentario: comentario
        };

        comentarios.push(novoComentario);

        nomeInput.value = '';
        comentarioInput.value = '';

        exibirComentarios();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

function exibirComentarios() {
    const comentariosLista = document.getElementById('comentarios_lista');
    comentariosLista.innerHTML = '';

    comentarios.forEach((comentario) => {
        const comentarioElemento = document.createElement('div');
        comentarioElemento.innerHTML = `<strong>${comentario.nome}:</strong> ${comentario.comentario}`;
        comentariosLista.appendChild(comentarioElemento);
    });
}
