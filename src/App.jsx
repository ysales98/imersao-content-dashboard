import { useMemo, useState } from 'react'
import { Header } from './components/Header'
import { Filters } from './components/Filters'
import { ContentCard } from './components/ContentCard'
import { ContentModal } from './components/ContentModal'
import { categories, contents } from './data/contents'
import { useLocalStorage } from './hooks/useLocalStorage'

function normalize(value) {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
}

export default function App() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('Todos')
  const [showingFavorites, setShowingFavorites] = useState(false)
  const [selectedContent, setSelectedContent] = useState(null)
  const [favorites, setFavorites] = useLocalStorage('imersao:favorites', [])

  const filteredContents = useMemo(() => {
    const normalizedQuery = normalize(query.trim())
    return contents.filter((content) => {
      const matchesCategory = category === 'Todos' || content.category === category
      const searchableText = normalize(`${content.title} ${content.category} ${content.scripture} ${content.series}`)
      const matchesQuery = !normalizedQuery || searchableText.includes(normalizedQuery)
      const matchesFavorites = !showingFavorites || favorites.includes(content.id)
      return matchesCategory && matchesQuery && matchesFavorites
    })
  }, [category, favorites, query, showingFavorites])

  function toggleFavorite(id) {
    setFavorites((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id])
  }

  function clearFilters() {
    setQuery('')
    setCategory('Todos')
    setShowingFavorites(false)
  }

  return (
    <div id="top" className="app-shell">
      <Header
        favoritesCount={favorites.length}
        showingFavorites={showingFavorites}
        onShowFavorites={() => setShowingFavorites((current) => !current)}
      />
      <main>
        <section className="hero">
          <p className="eyebrow">Biblioteca de estudos</p>
          <h1>Teologia para aprofundar a fé e formar a vida.</h1>
          <p>Explore estudos bíblicos, organize sua leitura e salve os conteúdos que deseja revisitar.</p>
          <dl className="hero-stats">
            <div><dt>{contents.length}</dt><dd>estudos</dd></div>
            <div><dt>{categories.length - 1}</dt><dd>temas</dd></div>
            <div><dt>{contents.reduce((total, content) => total + content.minutes, 0)}</dt><dd>minutos</dd></div>
          </dl>
        </section>

        <Filters
          query={query}
          onQueryChange={setQuery}
          category={category}
          onCategoryChange={setCategory}
          categories={categories}
          resultCount={filteredContents.length}
        />

        <section id="conteudos" className="content-grid" aria-label="Conteúdos disponíveis">
          {filteredContents.map((content) => (
            <ContentCard
              key={content.id}
              content={content}
              isFavorite={favorites.includes(content.id)}
              onToggleFavorite={toggleFavorite}
              onOpen={setSelectedContent}
            />
          ))}
        </section>

        {filteredContents.length === 0 && (
          <section className="empty-state">
            <span aria-hidden="true">⌕</span>
            <h2>Nenhum conteúdo encontrado</h2>
            <p>Tente outro termo ou remova os filtros ativos.</p>
            <button type="button" onClick={clearFilters}>Limpar filtros</button>
          </section>
        )}
      </main>
      <footer>
        <p><strong>Imersão & Devoção</strong> — projeto React para portfólio de Yan Sales.</p>
        <a href="https://github.com/ysales98">GitHub</a>
      </footer>

      {selectedContent && (
        <ContentModal
          content={selectedContent}
          isFavorite={favorites.includes(selectedContent.id)}
          onToggleFavorite={toggleFavorite}
          onClose={() => setSelectedContent(null)}
        />
      )}
    </div>
  )
}
