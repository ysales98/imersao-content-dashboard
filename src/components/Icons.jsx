export function SearchIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m21 21-4.4-4.4m2.4-5.1a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z" /></svg>
}

export function BookmarkIcon({ filled = false }) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" className={filled ? 'filled' : ''}><path d="M6 4.8A1.8 1.8 0 0 1 7.8 3h8.4A1.8 1.8 0 0 1 18 4.8V21l-6-3.9L6 21V4.8Z" /></svg>
}

export function ClockIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-13v4.5l3 1.8" /></svg>
}
