export function Header() {

  const header = document.createElement('header')
  header.id = 'header'
  const nav = document.createElement('nav')
  const leftUl = document.createElement('ul')
  const leftLi = document.createElement('li')
  leftLi.innerHTML = '<strong>Reactivity</strong>'
  leftUl.appendChild(leftLi)
  const rightUl = document.createElement('ul')
  const rightLi = document.createElement('li')
  rightLi.innerHTML = '<a href="https://github.com/htmujahid/barebone-reactivity">Github</a>'
  rightUl.appendChild(rightLi)
  nav.appendChild(leftUl)
  nav.appendChild(rightUl)
  header.appendChild(nav)

  return header
}
