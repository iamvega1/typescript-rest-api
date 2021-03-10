export class BaseHttpController {
  constructor() {
    this.autoBindMethods()
  }

  private autoBindMethods() {
    const methods = Object.getOwnPropertyNames(Object.getPrototypeOf(this))

    methods
      .filter((method) => method !== 'constructor')
      // @ts-expect-error
      .forEach((method) => (this[method] = this[method].bind(this)))
  }
}
