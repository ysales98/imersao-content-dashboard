import { fireEvent, render, screen } from '@testing-library/react'
import App from './App'

describe('Painel de conteúdos', () => {
  beforeEach(() => window.localStorage.clear())

  it('filtra conteúdos pelo campo de busca', () => {
    render(<App />)
    fireEvent.change(screen.getByPlaceholderText(/busque por título/i), { target: { value: 'Ezequiel' } })
    expect(screen.getByText('Quando Deus sopra sobre ossos secos')).toBeInTheDocument()
    expect(screen.queryByText('O senhorio de Cristo')).not.toBeInTheDocument()
  })

  it('salva um conteúdo como favorito', () => {
    render(<App />)
    fireEvent.click(screen.getByLabelText(/adicionar antes que houvesse mundo/i))
    expect(screen.getByRole('button', { name: /favoritos 1/i })).toBeInTheDocument()
    expect(JSON.parse(window.localStorage.getItem('imersao:favorites'))).toContain('antes-que-houvesse-mundo')
  })

  it('combina filtro por categoria com a contagem de resultados', () => {
    render(<App />)
    fireEvent.click(screen.getByRole('button', { name: 'Soberania' }))
    expect(screen.getByText('2 conteúdos encontrados')).toBeInTheDocument()
    expect(screen.getByText('Antes que houvesse mundo')).toBeInTheDocument()
    expect(screen.queryByText('Boa Notícia x Má Notícia')).not.toBeInTheDocument()
  })

  it('abre e fecha o resumo de um conteúdo', () => {
    render(<App />)
    fireEvent.click(screen.getAllByRole('button', { name: /ler resumo/i })[0])
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    fireEvent.keyDown(window, { key: 'Escape' })
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('permite limpar uma busca sem resultados', () => {
    render(<App />)
    const search = screen.getByPlaceholderText(/busque por título/i)
    fireEvent.change(search, { target: { value: 'conteúdo inexistente' } })
    fireEvent.click(screen.getByRole('button', { name: /limpar filtros/i }))
    expect(search).toHaveValue('')
    expect(screen.getByText('8 conteúdos encontrados')).toBeInTheDocument()
  })
})
