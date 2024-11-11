import { SignalComponent } from "../core/signal-component";

export class CounterSignalComponent extends SignalComponent {
  counter = this.signal(0, 'counter');
  incrementRef = this.ref<HTMLButtonElement>()
  decrementRef = this.ref<HTMLButtonElement>()

  render() {
    const article = document.createElement('article')
    article.innerHTML = '<header>Counter with signal, will render only the changed part</header>'

    const div = document.createElement('div')
    div.id = 'counter-signal'
    div.role = 'group'

    const buttonIncrement = document.createElement('button')
    this.incrementRef.current = buttonIncrement
    buttonIncrement.type = 'button'
    buttonIncrement.innerText = 'Increment'

    const counter = document.createElement('span')
    counter.style.margin = 'auto'
    counter.style.fontSize = '2rem'
    counter.style.textAlign = 'center'
    counter.innerText = this.counter.value.toString()
    this.counter.register(counter, (value) => {
      counter.innerText = value.toString()
      return counter;
    })

    const buttonDecrement = document.createElement('button')
    this.decrementRef.current = buttonDecrement
    buttonDecrement.type = 'button'
    buttonDecrement.innerText = 'Decrement'

    div.appendChild(buttonIncrement)
    div.appendChild(counter)
    div.appendChild(buttonDecrement)

    article.appendChild(div)

    return article
  }

  script() {
    const increment = this.incrementRef.current
    const decrement = this.decrementRef.current

    if (!increment || !decrement) return

    increment.onclick = () => this.counter.value++
    decrement.onclick = () => this.counter.value--
  }
}