import generateFruits from "../utils/generateList.js"

class Cart extends HTMLElement {
  #itemsCount
  #totalPrice
  #itemsList
  #cartList = generateFruits(10)

  constructor() {
    super()
    this.innerHTML = `
      <section class="cart">
        <header>
          <h2>My Cart</h2>
          <p>Items: 0</p>
        </header>
        <ul></ul>
        <footer>
          <span>Total:</span>
          <span>0 €</span>
        </footer>
      </section>
    `
    this.#itemsCount = this.querySelector('section > header > p')
    this.#itemsList = this.querySelector('section > ul')
    this.#totalPrice = this.querySelector('section > footer > span:last-child')
    this.render()
  }

  renderCartLinesCount() {
    console.log('Rendering Cart lines count')
    const totalItems = this.#cartList.reduce((acc, item) => acc + item.quantity, 0)
    this.#itemsCount.textContent = `Items: ${totalItems}`
  }

  renderTotalPrice() {
    console.log('Rendering Cart total price')
    this.#totalPrice.textContent = `${this.#cartSum()} €`
  }

  render() {
    console.log('Rendering whole Cart component')
    this.renderCartLinesCount()
    this.renderTotalPrice()
    let items = ''
    this.#cartList.forEach(item => {
      items += `
        <cart-item
          name="${item.name}"
          index="${item.index}"
          quantity="${item.quantity}"
          price="${item.price}"
        >
        </cart-item>
      `
    })
    this.#itemsList.innerHTML = items
  }

  handleEvent(event, details) {
    switch (event) {
      case 'quantityChanged':
        this.#quantityChange(details.index, details.newValue)
        break
      case 'removeItem':
        this.#deleteItem(details.index)
    }
  }

  #cartSum() {
    return this.#cartList.reduce((acc, item) => {
      return acc + item.quantity * item.price
    }, 0).toFixed(2)
  }

  #deleteItem = (index) => {
    const i = this.#cartList.findIndex(i => i.index === index)
    const cartItemElement = this.querySelector(`cart-item[index="${index}"]`)
    if (i < 0 || !cartItemElement) return
    if (confirm(`Do you want to remove "${this.#cartList[i]?.name}" from the cart?`)) {
      this.#cartList.splice(i, 1)
      cartItemElement.remove();
      this.renderCartLinesCount()
      this.renderTotalPrice()
    }
  }

  #quantityChange = (index, value) => {
    const item = this.#cartList.find(item => item.index === index)
    if (!item) return
    if (value > 0) {
      item.quantity = value
      this.renderCartLinesCount()
      this.renderTotalPrice()
    } else {
      this.#deleteItem(index)
    }
  }
}

customElements.define('cart-component', Cart);
