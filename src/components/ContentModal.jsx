import { useEffect, useRef } from 'react'
import { BookmarkIcon } from './Icons'

export function ContentModal({ content, isFavorite, onToggleFavorite, onClose }) {
  const closeButtonRef = useRef(null)

  useEffect(() => {
    closeButtonRef.current?.focus()
    const handleKeyDown = (event) => event.key === 'Escape' && onClose()
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <section className="content-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button ref={closeButtonRef} className="modal-close" type="button" onClick={onClose} aria-label="Fechar resumo">×</button>
        <span className="category-tag">{content.category}</span>
        <p className="series-label">{content.series}{content.day ? ` • Dia ${content.day}` : ''}</p>
        <h2 id="modal-title">{content.title}</h2>
        <p className="modal-scripture">{content.scripture}</p>
        <p>{content.summary}</p>
        <blockquote>“A vida cristã começa olhando para Deus, não para nós mesmos.”</blockquote>
        <div className="modal-actions">
          <button type="button" className="primary-button" onClick={() => onToggleFavorite(content.id)}>
            <BookmarkIcon filled={isFavorite} /> {isFavorite ? 'Salvo nos favoritos' : 'Salvar conteúdo'}
          </button>
          <a href="https://imersaoedevocao.ysales98.chatgpt.site/" target="_blank" rel="noreferrer">Visitar portal completo</a>
        </div>
      </section>
    </div>
  )
}
