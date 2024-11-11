import { CoreComponent } from "./core-component";

export class StateComponent extends CoreComponent {
  state(initialValue: number) {
    return new Proxy({ value: initialValue }, {
      set: (target, key, value) => {
        target[key as keyof typeof target] = value;
        this.rerender();
        return true;
      }
    });
  }

  rerender() {
    const element = this.element;
    if (!element) return;

    const newElement = this.get();

    if (!newElement) return;
    
    element.replaceWith(newElement)
  }
}
