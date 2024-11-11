import { SignalComponent } from "../core/signal-component";

export class Todo extends SignalComponent {
  todos = this.signal<string[]>(['working'], 'todos')

  render(): HTMLElement | null {
    const article = document.createElement('article')
    article.innerHTML = '<header>Todo with signal, will render only the changed part</header>'

    const div = document.createElement('div')
    div.id = 'todo'

    const form = document.createElement('form')
    form.role = 'group'

    const input = document.createElement('input')
    input.type = 'text'
    input.placeholder = 'Add a new todo'

    form.appendChild(input)

    const button = document.createElement('button')
    button.innerText = 'Add'
    button.type = 'button'

    button.onclick = () => {
      const value = input.value
      if (!value) return

      this.todos.value = [...this.todos.value, value]
      input.value = ''
    }

    form.appendChild(button)

    const list = document.createElement('ul')
    list.id = 'todo-list'

    this.todos.register(list, (value) => {
      const lastEntry = value[value.length - 1]
      const li = document.createElement('li')
      li.innerText = lastEntry
      list.appendChild(li)
      return list;
    })

    div.appendChild(form)
    div.appendChild(list)

    article.appendChild(div)

    return article
  }
}