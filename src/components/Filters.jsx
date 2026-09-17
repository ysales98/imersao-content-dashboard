import { SearchIcon } from './Icons'

export function Filters({ query, onQueryChange, category, onCategoryChange, categories, resultCount }) {
  return (
    <section className="filters" aria-label="Filtros de conteúdo">
      <label className="search-field">
        <span className="sr-only">Buscar conteúdos</span>
        <SearchIcon />
        <input
          type="search"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="Busque por título, tema ou referência bíblica"
        />
      </label>
      <div className="category-list" role="group" aria-label="Filtrar por tema">
        {categories.map((item) => (
          <button
            type="button"
            key={item}
            className={category === item ? 'selected' : ''}
            onClick={() => onCategoryChange(item)}
            aria-pressed={category === item}
          >
            {item}
          </button>
        ))}
      </div>
      <p className="result-count" aria-live="polite">
        {resultCount} {resultCount === 1 ? 'conteúdo encontrado' : 'conteúdos encontrados'}
      </p>
    </section>
  )
}
