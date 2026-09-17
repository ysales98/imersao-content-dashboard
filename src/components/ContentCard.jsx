import { BookmarkIcon, ClockIcon } from './Icons'

export function ContentCard({ content, isFavorite, onToggleFavorite, onOpen }) {
  return (
    <article className="content-card">
      <div className="card-topline">
        <span className="category-tag">{content.category}</span>
        <button
          className="bookmark-button"
          type="button"
          onClick={() => onToggleFavorite(content.id)}
          aria-label={isFavorite ? `Remover ${content.title} dos favoritos` : `Adicionar ${content.title} aos favoritos`}
          title={isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
        >
          <BookmarkIcon filled={isFavorite} />
        </button>
      </div>
      <p className="series-label">{content.series}{content.day ? ` • Dia ${content.day}` : ''}</p>
      <h2>{content.title}</h2>
      <p className="scripture">{content.scripture}</p>
      <p className="summary">{content.summary}</p>
      <div className="card-footer">
        <span><ClockIcon /> {content.minutes} min</span>
        <button type="button" onClick={() => onOpen(content)}>Ler resumo <span aria-hidden="true">→</span></button>
      </div>
    </article>
  )
}
