# Diário Ágil

Blog da Equipe 2 de Engenharia de Software II (2º TADS, IFPR Campus Umuarama, 2026) sobre os métodos ágeis **Scrum** e **DSDM**.

Equipe: Bruno Reis Verteiro, Ezequiel Antonio de Souza e Samuel Cerqueira Torres.
Professora: Márcia Cristina Dadalto Pascutti.

## Estrutura

```
diario-agil/
├── index.html              página inicial (lista de posts)
├── posts/
│   ├── scrum.html
│   ├── dsdm.html
│   ├── comparativo.html
│   └── equipe.html
└── assets/
    ├── css/style.css       cores, fontes, layout e modo escuro
    ├── js/main.js          cálculo do tempo de leitura
    └── img/favicon.svg
```

## Como editar

- **Texto de um post:** abra o arquivo em `posts/`, troque o texto entre as tags `<p>` e `</p>` e salve. No GitHub, dá para editar direto no navegador clicando no arquivo e no ícone de lápis.
- **Data do post:** troque o texto e o atributo `datetime` da tag `<time>` no post e no `index.html`.
- **Cores:** estão todas no topo do `assets/css/style.css`, nas variáveis `--bg`, `--text`, `--accent` etc. O bloco `@media (prefers-color-scheme: dark)` tem as cores do modo escuro.
- **Novo post:** copie um arquivo de `posts/`, troque título, autor e conteúdo, e adicione um novo `<li>` no topo da lista do `index.html` (o mais recente fica em cima).

O tempo de leitura é calculado sozinho pelo `main.js` (200 palavras por minuto). Na página inicial ele está escrito à mão, então atualize se o post mudar muito de tamanho.

Para testar no computador, basta abrir o `index.html` no navegador.
