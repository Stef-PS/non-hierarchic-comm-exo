class Cart extends HTMLElement {
  #itemsCount
  #cartlist = [
    { name: 'Apple', quantity: 1, price: 1.50 },
  ]

  constructor() {
    super()
    this.innerHTML = `
      <section class="cart">
        <header>
          <h2>Cart</h2>
          <p>Items: 0</p>
        </header>
        <main></main>
        <footer></footer>
      </section>
    `
    this.#itemsCount = this.querySelector('p')
    this.render()
  }

  render() {
    console.log('Rendering Cart component')
    this.#itemsCount.textContent = `Items: ${this.#cartlist.length}`
  }
}

customElements.define('cart-component', Cart);
