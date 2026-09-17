# Painel de Conteúdos Imersão & Devoção

Aplicação React criada para explorar, filtrar e favoritar estudos bíblicos. O projeto transforma o conteúdo editorial do **Imersão & Devoção** em uma interface interativa e demonstra competências de desenvolvimento front-end.

## Demonstração

Adicione aqui o link do deploy após publicar o projeto no Vercel ou Netlify.

## Funcionalidades

- Busca sem diferenciação de acentos por título, tema, série ou referência bíblica
- Filtros combináveis por categoria
- Favoritos persistidos no `localStorage`
- Visualização de resumo em modal com fechamento pela tecla `Escape`
- Contadores calculados a partir dos dados
- Estado vazio com limpeza de filtros
- Layout responsivo para desktop, tablet e celular
- Preferência de movimento reduzido e navegação básica por teclado

## Tecnologias

- React
- JavaScript ES6+
- Vite
- CSS responsivo
- Vitest
- Testing Library
- Local Storage API

## Conceitos aplicados

- Componentização
- Hooks `useState`, `useEffect`, `useMemo` e `useRef`
- Hook personalizado `useLocalStorage`
- Estado derivado e filtros combináveis
- Renderização condicional
- Persistência no navegador
- Acessibilidade semântica
- Testes de comportamento

## Como executar

```bash
git clone https://github.com/ysales98/imersao-content-dashboard.git
cd imersao-content-dashboard
npm install
npm run dev
```

## Testes e build

```bash
npm test
npm run build
```

## Publicação

O projeto pode ser publicado diretamente no Vercel:

1. Envie este repositório para o GitHub.
2. Importe o repositório no Vercel.
3. Mantenha `npm run build` como comando de build e `dist` como diretório de saída.

## Commits sugeridos

```text
feat: cria estrutura e identidade visual do painel
feat: adiciona busca e filtros por categoria
feat: persiste conteúdos favoritos no localStorage
feat: adiciona modal acessível para leitura dos resumos
test: cobre busca filtros favoritos e modal
docs: documenta execução arquitetura e deploy
```

## Estrutura

```text
src/
├── components/       # Componentes reutilizáveis
├── data/             # Dados dos conteúdos
├── hooks/            # Hook de persistência
├── test/             # Configuração dos testes
├── App.jsx            # Estado e composição principal
├── App.test.jsx       # Testes de comportamento
└── styles.css         # Sistema visual responsivo
```

## Autor

**Yan Saturnino da Silva Sales**  
[GitHub](https://github.com/ysales98) • [LinkedIn](https://www.linkedin.com/in/yan-sales-09576426b) • [Portfólio](https://ys-web-studio.ysales98.chatgpt.site/#projetos)
