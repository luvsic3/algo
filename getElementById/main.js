/**
 *
 * @param {HTMLElement} parent
 * @param {string} id
 */
function getElementById(parent, id) {
  const queue = [parent]
  while (queue.length) {
    const current = queue.shift()
    if (current.id === id) return current
    current.childNodes.forEach((child) => queue.push(child))
  }
  return null
}

const el = getElementById(document.documentElement, 'li')

console.log(el)
