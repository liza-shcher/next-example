import React from 'react';
import ProductListItem from '../ProductListItem/ProductListItem';

function ProductList({ products }) {
  return (
      <>
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
