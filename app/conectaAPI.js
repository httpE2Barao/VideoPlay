async function listaVideos() {
  const conexao = await fetch('http://localhost:3000/videos');
  const conexaoConvertida = await conexao.json();

  return conexaoConvertida;
}

async function criaVideo(titulo, canal, descricao, url, imagem) {
  const conexao = await fetch('http://localhost:3000/videos', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      titulo: titulo,
      canal: canal,
      descricao: `${descricao} mil visualizações`,
      url: url,
      imagem: imagem
    })
  });

  conexaoConvertida = await conexao.JSON();

  return conexaoConvertida;
}

export const conectaAPI = {
  listaVideos,
  criaVideo
}
