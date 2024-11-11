import { CounterButton } from "./counter-button"

export function AddCounter() {
  const button = document.createElement('button')
  button.classList.add('add-counter', 'button')
  button.type = 'button'
  button.style.width = '100%'
  button.innerText = 'Add Counter'
  return button
}

AddCounter.script = () => {
  const button = document.querySelector<HTMLButtonElement>('.add-counter')!
  const counters = document.querySelector<HTMLDivElement>('#counters')!

  button.addEventListener('click', () => {
    const counter = new CounterButton()
    const counterElement = counter.get()
    if (!counterElement) return
    counters.appendChild(counterElement)
  })
}

