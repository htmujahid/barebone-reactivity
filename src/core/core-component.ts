export class CoreComponent {
  element: HTMLElement | null = null;

  ref<T extends HTMLElement>() {
    return new Proxy({ current: null as T | null }, {
      set: (target, key, value) => {
        target[key as keyof typeof target] = value;
        return true;
      }
    })
  }

  render() {
    return this.element;
  }

  script() {
  }

  get() {
    this.element = this.render();

    this.script();

    return this.element ?? document.createElement('template');
  }
}