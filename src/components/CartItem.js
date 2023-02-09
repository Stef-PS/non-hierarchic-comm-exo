class CartItem extends HTMLElement {
  name = ''
  quantity = 0
  price = 0
  index = 0
  #linePriceElement
  
  constructor() {
    super()
    this.name = this.getAttribute('name')
    this.quantity = Number(this.getAttribute('quantity'))
    this.price = Number(this.getAttribute('price'))
    this.index = Number(this.getAttribute('index'))
    this.render()
  }

  render() {
    console.log(`Rendering CartItem #${this.index} (${this.name})`)
    if (this.index > 0) {
    this.innerHTML = `
      <li>
        <span>${this.name}</span>
        <span>(${this.price.toFixed(2)} €)</span>
        <quantity-stepper index="${this.index}" value="${this.quantity}"></quantity-stepper>
        <span class="trash">🗑️</span>
        <span class="line-total-price">${(this.quantity * this.price).toFixed(2)} €</span>
      </li>
    `
    this.#linePriceElement = this.querySelector('.line-total-price')
    }
  }

  renderPrice() {
    console.log(`Rendering CartItem #${this.index} (${this.name}) price`)
    this.#linePriceElement.textContent = `${(this.quantity * this.price).toFixed(2)} €`
  }
}

customElements.define('cart-item', CartItem)
