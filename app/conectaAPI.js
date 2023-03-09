async function listaVideos() {
  const conexao = await fetch('http://localhost:3000/videos');
  const conexaoConvertida = await conexao.json();

  return conexaoConvertida;
}

async function criaVideo(titulo, canal, descricao, url, imagem) {
  const conexao = await fetch('http://localhost:3000/video', {
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
  const conexaoConvertidaa = await conexao.json();
  
  if (!conexao.ok) {
    throw new Error("Não foi possivel enviar o video.")
  }
  
  return conexaoConvertidaa;
}

async function buscaVideo(termo) {
  const conexao = await fetch(`http://localhost:3000/videos?q=${termo}`);
  const conexaoConvertida = conexao.json();

  return conexaoConvertida;
}

export const conectaAPI = {
  listaVideos,
  criaVideo,
  buscaVideo
}
