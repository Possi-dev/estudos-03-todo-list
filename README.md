# Todo List — localStorage

> Projeto 3: lista de tarefas com persistência no navegador (sem back-end), filtros dinâmicos e proteção básica contra XSS.

**Anterior:** [02 — Portfolio](https://github.com/Possi-dev/estudos-02-portfolio-simples) | **Próximo:** [04 — Blog Estático](https://github.com/Possi-dev/estudos-04-blog-estatico)

---

## Demo

**[https://possi-dev.github.io/estudos-03-todo-list/](https://possi-dev.github.io/estudos-03-todo-list/)**

---

## O que este projeto ensina

| Conceito | Onde está no código |
|----------|---------------------|
| localStorage | `JSON.parse(localStorage.getItem(...))` salva e carrega tarefas |
| Métodos de array | `filter`, `find`, `push` |
| Event delegation | Um listener no `#todo-list` cuida de todos os itens |
| Filtros dinâmicos | Variável `currentFilter` controla o que aparece |
| XSS básico | Função `escapeHTML()` previne injeção de HTML |
| Animação CSS | `@keyframes slideIn` nos itens |

---

## Funcionalidades

- Adicionar tarefa (Enter ou botão)
- Marcar/desmarcar como concluída (checkbox)
- Excluir tarefa
- Filtrar: Todas / Pendentes / Concluídas
- Estatísticas em tempo real ("X de Y pendentes")
- Dados persistem ao fechar o navegador

---

## Estrutura

```
03-todo-list/
├── index.html    # Form, filtros, lista, stats (33 linhas)
├── style.css     # Cards, animação slideIn, checkboxes (120 linhas)
├── script.js     # CRUD via localStorage, filtros, eventos (88 linhas)
├── README.md
├── LICENSE
└── .gitignore
```

---

## Arquitetura (informal)

O código segue um padrão MVC simples sem framework:
- **Model:** array `todos` em memória + `localStorage`
- **View:** `render()` transforma o modelo em DOM
- **Controller:** listeners chamam `saveAndRender()` para sincronizar

---

## Como foi feito

**Transparência:** Código gerado pela IA **opencode**. Foquei em entender como `localStorage` dá persistência sem servidor, como *event delegation* evita listeners duplicados, e por que `escapeHTML()` é necessário mesmo em projeto simples.

---

## Próximos passos de estudo

- [ ] Edição inline (clicar no texto para editar)
- [ ] Ordenação por data de criação
- [ ] Reescrever a lógica de filtros do zero

---

## Licença

MIT — veja [LICENSE](LICENSE).