import { AddCounter } from "./add-counter"
import { CounterButton } from "./counter-button"

export function Counters() {
  const article = document.createElement('article')
  article.innerHTML = '<header>Counters with state</header>'

  const div = document.createElement('div')
    div.id = 'counters'
    div.style.display = 'flex'
    div.style.gap = '1rem'
    div.style.flexWrap = 'wrap'
    // div.style.justifyContent = 'space-between'

    div.appendChild(new CounterButton().get())
    div.appendChild(new CounterButton().get())
    div.appendChild(new CounterButton().get())

  article.appendChild(div)

  article.appendChild(AddCounter())

  return article
}
