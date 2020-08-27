import PRODUCTS from '../data/products';

function getProducts (startIndex = 0, amount = 4) {
  return PRODUCTS.entries.slice(startIndex, startIndex + amount)
}

export {
  getProducts
}
