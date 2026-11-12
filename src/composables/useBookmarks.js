import { ref, computed } from 'vue'

const STORAGE_KEY = 'buddha_dhamma_bookmarks'

// Shared reactive state
const savedBookmarks = ref([])

function loadBookmarks() {
  if (typeof window === 'undefined') return
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      savedBookmarks.value = JSON.parse(raw)
    }
  } catch (e) {
    console.error('Failed to load bookmarks', e)
  }
}

function saveBookmarks() {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(savedBookmarks.value))
  } catch (e) {
    console.error('Failed to save bookmarks', e)
  }
}

// Initial load
loadBookmarks()

export function useBookmarks() {
  const bookmarks = computed(() => savedBookmarks.value)

  function isBookmarked(path) {
    if (!path) return false
    return savedBookmarks.value.some(b => b.path === path)
  }

  function toggleBookmark(item) {
    if (!item || !item.path) return false
    const idx = savedBookmarks.value.findIndex(b => b.path === item.path)
    if (idx !== -1) {
      savedBookmarks.value.splice(idx, 1)
      saveBookmarks()
      return false
    } else {
      savedBookmarks.value.unshift({
        path: item.path,
        titleK: item.titleK || item.km || item.path,
        titleE: item.titleE || item.en || item.path,
        num: item.num || '',
        savedAt: Date.now()
      })
      saveBookmarks()
      return true
    }
  }

  function removeBookmark(path) {
    const idx = savedBookmarks.value.findIndex(b => b.path === path)
    if (idx !== -1) {
      savedBookmarks.value.splice(idx, 1)
      saveBookmarks()
    }
  }

  return {
    bookmarks,
    isBookmarked,
    toggleBookmark,
    removeBookmark
  }
}
