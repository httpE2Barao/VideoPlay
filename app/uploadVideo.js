import { conectaAPI } from './conectaAPI.js';
const formulario = document.querySelector('[data-formulario]');

async function criarVideos(evento) {
    evento.preventDefault();
    const titulo = document.querySelector('[data-titulo]').value;
    const canal = document.querySelector('[data-canal]').value;
    const url = document.querySelector('[data-url]').value;
    const imagem = document.querySelector('[data-imagem]').value;
    const descricao = Math.floor(Math.random() * 10).toString();
    window.location.href = '../pages/envio-concluido.html';
    await conectaAPI.criaVideo(titulo, canal, descricao, url, imagem);
}

formulario.addEventListener('submit', evento => criarVideos(evento))