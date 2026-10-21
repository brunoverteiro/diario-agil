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

## Como publicar no GitHub Pages

1. Entre no GitHub e clique em **New repository**.
2. Dê um nome (ex.: `diario-agil`), deixe como **Public** e clique em **Create repository**.
3. Na página do repositório, clique em **uploading an existing file** (ou **Add file > Upload files**).
4. Arraste **o conteúdo** da pasta `diario-agil` (o `index.html`, a pasta `posts`, a pasta `assets` e este README), e não a pasta em si. O `index.html` precisa ficar na raiz do repositório.
5. Clique em **Commit changes**.
6. Vá em **Settings > Pages**. Em **Build and deployment**, escolha **Deploy from a branch**, branch **main** e pasta **/ (root)**. Clique em **Save**.
7. Aguarde 1 ou 2 minutos e recarregue a página. O link aparece no topo: `https://SEU-USUARIO.github.io/diario-agil/`

Esse é o link para postar no Google Sala de Aula.

## Como editar

- **Texto de um post:** abra o arquivo em `posts/`, troque o texto entre as tags `<p>` e `</p>` e salve. No GitHub, dá para editar direto no navegador clicando no arquivo e no ícone de lápis.
- **Data do post:** troque o texto e o atributo `datetime` da tag `<time>` no post e no `index.html`.
- **Cores:** estão todas no topo do `assets/css/style.css`, nas variáveis `--bg`, `--text`, `--accent` etc. O bloco `@media (prefers-color-scheme: dark)` tem as cores do modo escuro.
- **Novo post:** copie um arquivo de `posts/`, troque título, autor e conteúdo, e adicione um novo `<li>` no topo da lista do `index.html` (o mais recente fica em cima).

O tempo de leitura é calculado sozinho pelo `main.js` (200 palavras por minuto). Na página inicial ele está escrito à mão, então atualize se o post mudar muito de tamanho.

Para testar no computador, basta abrir o `index.html` no navegador.
