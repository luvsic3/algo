const vdom = {
  tagName: 'ul',
  props: { class: 'list' },
  children: [
    {
      tagName: 'li',
      children: ['item1'],
    },
    {
      tagName: 'li',
      children: ['item1'],
    },
  ],
}

/**
 *
 * @param {vdom} vdom
 */
function createElement(vdom) {
  if (!vdom) return
  if (typeof vdom === 'string') return document.createTextNode(vdom)
  const el = document.createElement(vdom.tagName)

  const children = vdom.children?.map((child) => {
    el.appendChild(createElement(child))
  })

  for (const key in vdom.props) {
    const value = vdom.props[key]
    el.setAttribute(key, value)
  }
  return el
}

const el = createElement(vdom)

document.querySelector('#root').appendChild(el)
