import React from 'react';
import ProductListItem from '../ProductListItem/ProductListItem';

function ProductList({ products }) {
  return (
      <>
        <button onClick={() => console.log('click')}>click</button>
        {
          products && products.length > 0 && (
              <div>
                {
                  products.map((product, index) => {
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
