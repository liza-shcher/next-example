import React, { useState } from 'react';
import ProductListItem from '../ProductListItem/ProductListItem';

let productIndex = 0;

function ProductList({ products }) {

  function getProducts (amount = 4) {
    productIndex += amount;
    return products.slice(productIndex - amount, productIndex);
  }
  const [selectedProducts, setSelectedProducts] = useState(getProducts());

  function onButtonClick() {
    setSelectedProducts(getProducts())
  }

  return (
      <>
        <h2>Product List</h2>
        <button onClick={onButtonClick}>load products</button>
        {
          selectedProducts && selectedProducts.length > 0 && (
              <div className="product-list__list">
                {
                  selectedProducts.map((product, index) => {
                    return (
                        <ProductListItem
                            key={ index }
                            imgSrc={ product.image.httpSrc }
                            title={ product.title }
                            price={product.priceElement.priceWithCurrency}
                            description={product.productDetails.commaSeparatedWordsPartOne}
                        />
                    );
                  })
                }
              </div>
          )
        }
      </>
  );
}

export default ProductList;
