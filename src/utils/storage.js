export const getItem = (key) => window.localStorage.getItem(key)
export const setItem = (key, value) => window.localStorage.setItem(key, value)
export const getJSON = (key) => JSON.parse(getItem(key) || '{}')
export const setJSON = (key, value) => setItem(key, JSON.stringify(value))
