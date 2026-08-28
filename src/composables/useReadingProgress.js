export const SCROLL_KEY = 'bd_scroll_positions'
export const SCROLL_THRESHOLD = 300

export function getSavedScroll() {
  try { return JSON.parse(localStorage.getItem(SCROLL_KEY)) || {} } catch { return {} }
}

export function saveScroll(path, y) {
  if (!path) return
  const map = getSavedScroll()
  map[path] = Math.round(y || 0)
  try { localStorage.setItem(SCROLL_KEY, JSON.stringify(map)) } catch (e) { /* ignore */ }
}

export function clearSavedScroll() {
  try { localStorage.removeItem(SCROLL_KEY) } catch (e) { /* ignore */ }
}
