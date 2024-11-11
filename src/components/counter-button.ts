import { StateComponent } from "../core/state-component";

export class CounterButton extends StateComponent {
  counter = this.state(0);

  render() {
    const button = document.createElement('button')
    button.classList.add('counter')
    button.type = 'button'
    button.dataset.counter = this.counter.value.toString()
    button.innerText = `Counter: ${this.counter.value}`
    return button
  }

  script() {
    const button = this.element;
    
    if (!button) return;

    button.onclick = () => {
      this.counter.value++;
    }
  }
}
