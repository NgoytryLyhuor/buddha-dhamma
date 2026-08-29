import { ref, watch } from 'vue'

const STORAGE_KEY = 'bd_bookmarks'

export function getBookmarks() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {} } catch { return {} }
}

export function saveBookmark(path, title) {
  const map = getBookmarks()
  map[path] = title
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(map)) } catch (e) { /* ignore */ }
}

export function removeBookmark(path) {
  const map = getBookmarks()
  delete map[path]
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(map)) } catch (e) { /* ignore */ }
}

export function clearBookmarks() {
  try { localStorage.removeItem(STORAGE_KEY) } catch (e) { /* ignore */ }
}

export function isBookmarked(path) {
  return Object.prototype.hasOwnProperty.call(getBookmarks(), path)
}

export function useBookmarks() {
  const bookmarks = ref(getBookmarks())

  watch(bookmarks, (v) => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(v)) } catch (e) { /* ignore */ }
  }, { deep: true })

  function toggle(path, title) {
    if (Object.prototype.hasOwnProperty.call(bookmarks.value, path)) {
      const next = { ...bookmarks.value }
      delete next[path]
      bookmarks.value = next
    } else {
      bookmarks.value = { ...bookmarks.value, [path]: title }
    }
  }

  function remove(path) {
    const next = { ...bookmarks.value }
    delete next[path]
    bookmarks.value = next
  }

  return { bookmarks, toggle, remove }
}
