class QuantityStepper extends HTMLElement {
  #index
  #value
  #viewer

  constructor() {
    super()
    this.innerHTML = `
      <button class="decrement">-</button>
        <span class="quantity"></span>
      <button class="increment">+</button>
    `
    this.querySelector('.increment').addEventListener('click', this.increment)
    this.querySelector('.decrement').addEventListener('click', this.decrement)
    this.#viewer = this.querySelector('.quantity')
    this.#value = Number(this.getAttribute('value') || '0')
    this.#index = Number(this.getAttribute('index') || '0')
    this.render()
  }

  render() {
    console.log(`Rendering QuantityStepper #${this.#index}`)
    this.#viewer.textContent = this.#value
  }

  increment = () => {
    this.#value++
    this.render()
  }

  decrement= () => {
    if (this.#value > 0) {
      this.#value--
      this.render()
    }
  }
}

customElements.define('quantity-stepper', QuantityStepper)
