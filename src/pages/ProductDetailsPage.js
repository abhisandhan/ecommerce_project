import React from 'react'
import NavBar from '../features/navbar/Navbar'
import ProductDetails from '../features/product-list/components/ProductDetails'

function ProductDetailsPage() {
  return (
    <div>
        <NavBar>
            <ProductDetails></ProductDetails>
        </NavBar>
    </div>
  )
}

export default ProductDetailsPage