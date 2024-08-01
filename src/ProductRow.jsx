import React from 'react'

const ProductRow = ({id,title, desc, price, category, sold, img}) => {
  return (
    <tr>
          <td>{id}</td>
          <td>{title}</td>
          <td>{desc}</td>
          <td>{price}</td>
          <td>{category}</td>
          <td>{sold}</td>
          <td><img height="80px" width="80px" wid src={img}/></td>
    </tr>
  )
}

export default ProductRow