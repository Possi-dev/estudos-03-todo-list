# 03 — A Lista que nao se Apaga

> **Capitulo 3 da linha do tempo.** O portfolio esquecia tudo ao fechar a aba. Eu queria que algo permanecesse. Descobri o `localStorage` — e, pela primeira vez, vi dados sobreviverem ao fechamento do navegador.

**Anterior:** [02 — O Portfolio que se Mexe](https://github.com/Possi-dev/estudos-02-portfolio-simples) | **Proximo:** [04 — O Blog das Semanas](https://github.com/Possi-dev/estudos-04-blog-estatico)

---

## A historia

No projeto 02, o problema era claro: a pagina era viva, mas amnesica. Tudo se perdia ao recarregar.

A IA sugeriu: *"Que tal uma lista de tarefas com `localStorage`?"*

Nao sabia o que era `localStorage`. A IA explicou: e uma pequena area de armazenamento dentro do navegador. Nao e um banco de dados. Nao e um servidor. E so uma caixinha no seu Chrome onde voce pode guardar texto — e ele la continua mesmo depois de fechar tudo.

Construi uma todo list que:

- **Adiciona tarefas** com `Date.now()` como ID unico
- **Marca como concluida** com checkbox (texto riscado)
- **Exclui** com um botao vermelho
- **Filtra** por Todas / Pendentes / Concluidas — sem recarregar a pagina
- **Mostra estatisticas** em tempo real: "3 de 5 tarefas pendentes"
- **Persiste tudo** em `localStorage` com JSON

E entao veio o momento magico. Adicionei cinco tarefas. Fechei a aba. Fechei o navegador. Esperei um minuto. Reabri. As cinco tarefas estavam la.

*> Funcionou. Os dados sobreviveram. Sem servidor. Sem banco. So navegador.*

Foi tambem aqui que aprendi algo inesperado: seguranca. A IA incluiu uma funcao `escapeHTML()` que impede o usuario de injetar HTML perigoso no texto da tarefa. Eu nem sabia que isso era um risco. Agora sabia.

---

## Demo ao vivo

**[https://possi-dev.github.io/estudos-03-todo-list/](https://possi-dev.github.io/estudos-03-todo-list/)**

---

## Como este projeto foi feito

**Transparencia:** Este codigo foi gerado pela IA **opencode**. Meu papel foi:

- Entender como `localStorage` guarda dados no navegador (persistem apos fechar a aba)
- Estudar os metodos de array usados (`filter`, `find`, `push`)
- Entender "event delegation" — um unico listener na `<ul>` cuida de todos os itens
- Ver como o filtro (Todas / Pendentes / Concluidas) funciona sem recarregar a pagina

Nao escrevi o codigo do zero — ele foi gerado pela IA e eu estudei o resultado.

---

## O que este projeto ensina

| Conceito | Onde esta no codigo |
|----------|---------------------|
| localStorage | `JSON.parse(localStorage.getItem(...))` salva e carrega tarefas |
| Metodos de array | `filter` (filtrar), `find` (buscar), `push` (adicionar) |
| Event delegation | Um listener no `#todo-list` cuida de cliques em todos os itens |
| Filtros dinamicos | Variavel `currentFilter` controla o que aparece na tela |
| XSS basico | Funcao `escapeHTML()` previne injecao de HTML perigoso |
| Animacao CSS | `@keyframes slideIn` faz os itens "deslizarem" ao aparecer |

---

## Estrutura dos arquivos

```
03-todo-list/
├── index.html    # Estrutura: form, filtros, lista, stats — 33 linhas
├── style.css     # Estilos: cards, animacao slideIn, checkboxes — 120 linhas
├── script.js     # Logica: CRUD via localStorage, filtros, eventos — 88 linhas
├── README.md
├── LICENSE
└── .gitignore
```

---

## Funcionalidades

- Adicionar tarefa (Enter ou clicar em "Adicionar")
- Marcar como concluida (checkbox)
- Excluir tarefa (botao "Excluir")
- Filtrar: Todas / Pendentes / Concluidas
- Estatisticas em tempo real ("X de Y pendentes")
- Dados persistem ao fechar o navegador (localStorage)

---

## Arquitetura (papo de senior)

Esse projeto tem um padrao escondido que agora consigo ver: e um **MVC informal** sem framework:

- **Model:** array `todos` em memoria + `localStorage` para persistencia
- **View:** funcao `render()` que transforma o modelo em DOM
- **Controller:** event listeners que atualizam o modelo e chamam `render()`

Sem React. Sem Vue. Sem biblioteca. So JavaScript e o navegador — e ja funciona como uma aplicacao de verdade.

---

## Como visualizar

**Online:** Clique no link de demo acima.

**Local:** Abra o `index.html` no navegador.

---

## O que aprendi neste capitulo

Aprendi que dados podem sobreviver sem servidor. Que `localStorage` e o primeiro passo rumo a persistencia real. Aprendi que seguranca importa mesmo em projetos pequenos — uma funcao de 5 linhas (`escapeHTML`) protege contra XSS. Aprendi que event delegation e elegante: um listener cuida de mil itens.

Mas agora eu tinha um inquietude. Ate entao, todos os meus projetos eram **uma pagina so**. A web real nao e assim. A web e multiplas paginas, links, navegacao, conteudo distribuido.

*> Eu queria construir algo com varias paginas. Como um site de verdade.*

Isso me levou ao [Projeto 04](https://github.com/Possi-dev/estudos-04-blog-estatico).

---

## Proximos passos de aprendizado

- [ ] Adicionar edicao inline (clicar no texto para editar)
- [ ] Adicionar ordenacao por data de criacao
- [ ] Tentar reescrever a logica de filtros do zero

---

## Licenca

MIT — veja [LICENSE](LICENSE).
