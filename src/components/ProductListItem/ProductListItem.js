import React from 'react';

function ProductListItem({imgSrc, title, description, price}) {

  return(
     <div className="productList__item">
       <img src={imgSrc} alt="" />
       <h3>{title}</h3>
       <p className="description">{description}</p>
       <p className="price">{price}</p>
     </div>
  )
}

export default ProductListItem;
