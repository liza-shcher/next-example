import PRODUCTS from '../data/products';

function getProducts (startIndex = 0, endIndex = 4) {
  return PRODUCTS.entries.slice(startIndex, endIndex)
}

export {
  getProducts
}
