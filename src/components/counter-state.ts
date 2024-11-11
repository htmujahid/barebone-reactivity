import { StateComponent } from "../core/state-component";

export class CounterStateComponent extends StateComponent {
  counter = this.state(0);
  incrementRef = this.ref<HTMLButtonElement>()
  decrementRef = this.ref<HTMLButtonElement>()

  render() {
    const article = document.createElement('article')
    article.innerHTML = '<header>Counter with state, will render whole component on state change</header>'

    const div = document.createElement('div')
    article.id = 'counter-state'
    div.role = 'group'

    const buttonIncrement = document.createElement('button')
    this.incrementRef.current = buttonIncrement
    buttonIncrement.type = 'button'
    buttonIncrement.innerText = 'Increment'

    const counter = document.createElement('span')
    counter.id = 'counter'
    counter.style.margin = 'auto'
    counter.style.fontSize = '2rem'
    counter.style.textAlign = 'center'
    counter.innerText = this.counter.value.toString()

    const buttonDecrement = document.createElement('button')
    this.decrementRef.current = buttonDecrement
    buttonDecrement.type = 'button'
    buttonDecrement.innerText = 'Decrement'

    div.appendChild(buttonIncrement)
    div.appendChild(counter)
    div.appendChild(buttonDecrement)

    article.appendChild(div)

    buttonIncrement.onclick = () => this.counter.value++
    buttonDecrement.onclick = () => this.counter.value--

    return article
  }

  // script() {
  //   const increment = this.incrementRef.current
  //   const decrement = this.decrementRef.current

  //   if (!increment || !decrement) return

  //   increment.onclick = () => this.counter.value++
  //   decrement.onclick = () => this.counter.value--
  // }
}
