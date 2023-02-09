const fruits = [
  'Apple',
  'Banana',
  'Strawberry',
  'Pineapple',
  'Watermelon',
  'Orange',
  'Kiwi',
  'Grapefruit',
  'Peach',
  'Passion Fruit',
  'Clementine',
  'Mango',
  'Lime',
  'Papaya',
  'Nectarine',
  'Pear',
  'Raspberry',
  'Blueberry',
  'Blackberry',
  'Cherry',
  'Lemon',
  'Grape',
  'Apricot',
  'Pomegranate',
  'Melon',
  'Plum',
  'Kumqat',
  'Fig',
  'Guava'
]

const generateList = (count) => {
  const list = []
  for (let i = 0; i < count; i++) {
    list.push({
      index: i + 1,
      name: fruits[Math.floor(Math.random() * fruits.length)],
      quantity: Math.floor(Math.random() * 10) + 1,
      price: (Math.random() * 4) + 0.5
    })
  }
  return list
}

export default generateList
