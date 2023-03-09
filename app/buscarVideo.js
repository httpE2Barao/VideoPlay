import { conectaAPI } from "./conectaAPI.js";
import constroiCard from "./mostrarVideos.js";

const btPesquisar = document.querySelector('[data-btPesquisar]');
const espacoPesquisa = document.querySelector('[data-pesquisa]');
const btInicio = document.querySelector('[data-inicio]');

export default async function buscaVideo(evento) {
    evento.preventDefault();
    
    const busca = await conectaAPI.buscaVideo(espacoPesquisa.value);
    const lista = document.querySelector('[data-lista]');

    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }

    busca.forEach(elemento => lista.appendChild(constroiCard(
        elemento.titulo, elemento.canal, elemento.descricao, elemento.url, elemento.imagem)));

    if (busca.length==0) {
        lista.innerHTML = `<h2 class='mensagem__titulo'>Não existe vídeos sobre: ${espacoPesquisa.value}</h2>`
    }
}

btPesquisar.addEventListener('click', evento => buscaVideo(evento));
espacoPesquisa.addEventListener('keypress', evento => evento.key == "Enter" ? buscaVideo(evento) : '');
btInicio.addEventListener('click', (evento) => {
    espacoPesquisa.value = '';
    buscaVideo(evento);
})