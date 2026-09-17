export function Header({ favoritesCount, onShowFavorites, showingFavorites }) {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Imersão e Devoção - início">
        <span className="brand-mark">I&D</span>
        <span>
          <strong>Imersão & Devoção</strong>
          <small>Conhecer profundamente. Viver fielmente.</small>
        </span>
      </a>
      <button
        className={`favorites-button ${showingFavorites ? 'active' : ''}`}
        type="button"
        onClick={onShowFavorites}
        aria-pressed={showingFavorites}
      >
        Favoritos <span>{favoritesCount}</span>
      </button>
    </header>
  )
}
