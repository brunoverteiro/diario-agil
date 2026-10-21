// Diário Ágil — calcula o tempo de leitura de cada post
// Conta as palavras do texto do post e divide por 200 palavras por minuto.

document.addEventListener("DOMContentLoaded", function () {
  var corpo = document.querySelector("[data-post-body]");
  var alvo = document.querySelector("[data-reading-time]");

  if (!corpo || !alvo) {
    return; // página sem post (ex.: página inicial)
  }

  var texto = corpo.innerText.trim();
  var palavras = texto.split(/\s+/).length;
  var minutos = Math.max(1, Math.round(palavras / 200));

  alvo.textContent = minutos + " min de leitura";
});
