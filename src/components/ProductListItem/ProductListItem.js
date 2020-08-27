import React from 'react';

function ProductListItem({imgSrc, title, description, price}) {
  return(
     <div className="product-item">
       <div className="image-container">
          <img src={imgSrc} alt="" />
       </div>
       <h3>{title}</h3>
       <p className="description">{description}</p>
       <p className="price">{price}</p>
     </div>
  )
}

export default ProductListItem;
