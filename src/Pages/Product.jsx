import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import BreadCrumps from '../Component/breadcrumps/BreadCrumps'
import ProductDisplay from '../Component/productdisplay/ProductDisplay'
import DescriptionBox from '../Component/descriptionbox/DescriptionBox'
import RelatedProducts from '../Component/relatedproducts/RelatedProducts'
const Product = () => {
  const { all_product } = useContext(ShopContext)
  const { productId } = useParams()
  const product = all_product.find((e) => e.id === Number(productId))
  return (
    <div>
      <BreadCrumps product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  )
}

export default Product;