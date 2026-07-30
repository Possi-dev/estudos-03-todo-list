# Todo List

> Projeto 3 do roadmap: lista de tarefas interativa com persistencia via localStorage (sem back-end).

## Demo ao vivo

**[https://possi-dev.github.io/estudos-03-todo-list/](https://possi-dev.github.io/estudos-03-todo-list/)**

## Como este projeto foi feito

**Transparencia:** Este codigo foi gerado pela IA **opencode**. Meu papel foi:

- Entender como `localStorage` guarda dados no navegador (persistem apos fechar a aba)
- Estudar os metodos de array usados (`filter`, `find`, `push`)
- Entender "event delegation" — um unico listener na `<ul>` cuida de todos os itens
- Ver como o filtro (Todas / Pendentes / Concluidas) funciona sem recarregar a pagina

Nao escrevi o codigo do zero — ele foi gerado pela IA e eu estudei o resultado.

## O que este projeto ensina

| Conceito | Onde esta no codigo |
|----------|---------------------|
| localStorage | `JSON.parse(localStorage.getItem(...))` salva e carrega tarefas |
| Metodos de array | `filter` (filtrar), `find` (buscar), `push` (adicionar) |
| Event delegation | Um listener no `#todo-list` cuida de cliques em todos os itens |
| Filtros dinamicos | Variavel `currentFilter` controla o que aparece na tela |
| XSS basico | Funcao `escapeHTML()` previne injecao de HTML perigoso |
| Animacao CSS | `@keyframes slideIn` faz os itens "deslizarem" ao aparecer |

## Estrutura dos arquivos

```
03-todo-list/
├── index.html    # Estrutura: form, filtros, lista, stats
├── style.css     # Estilos: cards, animacao slideIn, checkboxes
├── script.js     # Logica: CRUD via localStorage, filtros, eventos
├── README.md
├── LICENSE
└── .gitignore
```

## Funcionalidades

- Adicionar tarefa (Enter ou clicar em "Adicionar")
- Marcar como concluida (checkbox)
- Excluir tarefa (botao "Excluir")
- Filtrar: Todas / Pendentes / Concluidas
- Estatisticas em tempo real ("X de Y pendentes")
- Dados persistem ao fechar o navegador (localStorage)

## Como visualizar

**Online:** Clique no link de demo acima.

**Local:** Abra o `index.html` no navegador.

## Proximos passos de aprendizado

- [ ] Adicionar edicao inline (clicar no texto para editar)
- [ ] Adicionar ordenacao por data de criacao
- [ ] Tentar reescrever a logica de filtros do zero

## Licenca

MIT — veja [LICENSE](LICENSE).
