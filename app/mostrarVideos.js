import { conectaAPI } from "./conectaAPI.js";

const lista = document.querySelector('[data-lista]');

function constroiCard(titulo, canal, descricao, url, imagem) {
    const video = document.createElement('li')
    video.className = 'videos__item';
    video.innerHTML = `
    <iframe width="100%" height="72%" src="${url}"
    title="${titulo}" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
    <div class="descricao-video">
    <img src="${imagem}" alt="Logo do canal">
    <h3>${titulo}</h3>
    <h4>${canal}</h4>
    <p>${descricao}</p>
    </div>`;

    return video;
}

async function listaVideos() {
    const listaAPI = await conectaAPI.listaVideos();
    listaAPI.forEach(elemento => lista.appendChild(
        constroiCard(elemento.titulo, elemento.canal, elemento.descricao, elemento.url, elemento.imagem)))
}

listaVideos();