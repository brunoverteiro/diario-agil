// Diário Ágil — calcula o tempo de leitura de cada post
// Conta as palavras do texto do post (sem as ilustrações) e divide por 200 palavras por minuto.

document.addEventListener("DOMContentLoaded", function () {
  var corpo = document.querySelector("[data-post-body]");
  var alvo = document.querySelector("[data-reading-time]");

  if (!corpo || !alvo) {
    return; // página sem post (ex.: página inicial)
  }

  // copia o texto e tira as figuras, que não entram na contagem
  var copia = corpo.cloneNode(true);
  copia.querySelectorAll("figure").forEach(function (figura) {
    figura.remove();
  });

  var texto = copia.textContent.trim();
  var palavras = texto.split(/\s+/).length;
  var minutos = Math.max(1, Math.round(palavras / 200));

  alvo.textContent = minutos + " min de leitura";
});
