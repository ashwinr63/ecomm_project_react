import React from 'react'
import ProductList from './ProductList'

const SearchFor = ({results}) => {
    const ProductArray = results.slice(0,20).map((products) => <ProductList key={products.prod_name} data={products}/>)

    return (
        <div className="container">
            {ProductArray}

            <p id="product_numbers">
                {ProductArray.length}{(ProductArray.length === 1) ? `products` : `product`} of {results.length}
            </p>
        </div>
    )
}

export default SearchFor