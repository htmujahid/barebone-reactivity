import { CoreComponent } from "./core-component";

export class SignalComponent extends CoreComponent {
  _renderStrategy: ((value: any) => HTMLElement) | null = null

  signal<T>(initialValue: T, name: string) {
    const that = this

    return {
      name,
      _value: initialValue,
      get value() {
        return this._value
      },
      set value(value: T) {
        this._value = value
        that.rerender(name, value)
      },
      register(node: HTMLElement, callback?: (value: T) => HTMLElement) {
        node.dataset[`signal_${name}`] = ''
        that._renderStrategy = callback || null
        callback && callback(this._value)
      },
    }
  }

  rerender(key: string, value: any) {
    const element = this.element
    if (!element) return

    const selector = `[data-signal_${key}]`
    const nodes = element.querySelectorAll(selector)

    nodes.forEach((node) => {
      if (!node) return;
      if (this._renderStrategy) {
        (node as HTMLElement) = this._renderStrategy(value)
      } else {
        (node as HTMLElement).innerText = value.toString()
      }
    })
  }
}
