import React from 'react'
import ProductList from './ProductList'

const SearchFor = ({result}) => {
    const ProductArray = result.slice(0,20).map((products) => <ProductList key={products.prod_name} data={products} />)

    return (

        <div className="container">
            {ProductArray}

            <p id="pageNumber">
                {/* {ProductArray.length}{(ProductArray.length === 1) ? `Product` : `products`} of {results.length} */}
                {ProductArray.length} {(ProductArray.length === 1) ? `product` : `products`} of {result.length}
            </p>
        </div>
    )
}

export default SearchFor