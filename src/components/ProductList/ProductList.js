import React, { useState } from 'react';
import { getProducts } from '../../services/productService';
import ProductListItem from '../ProductListItem/ProductListItem';


function ProductList({ products }) {

  const [selectedProducts, setSelectedProducts] = useState(products);

  function onButtonClick(startIndex, endIndex) {
    setSelectedProducts(getProducts(startIndex, endIndex))
  }

  return (
      <>
        <h2>Product List</h2>
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
        <div className="pagination">
          <button onClick={() => onButtonClick(0)}>1</button>
          <button onClick={() => onButtonClick(4)}>2</button>
          <button onClick={() => onButtonClick(8)}>3</button>
          <button onClick={() => onButtonClick(12)}>4</button>
          <button onClick={() => onButtonClick(16)}>5</button>
          <button onClick={() => onButtonClick(20)}>6</button>
        </div>
      </>
  );
}

export default ProductList;
