import React from 'react'
import ProductList from './ProductList'

const SearchFor = ({result}) => {
    const ProductArray = result.slice(0,3).map((products) => <ProductList key={products.prod_name} data={products} />)

    return (

        <div className="container">
            {ProductArray}

            <nav aria-label="Pagination" className="pagination">
            <p id="pageNumber">
                {/* {ProductArray.length}{(ProductArray.length === 1) ? `Product` : `products`} of {results.length} */}
                {ProductArray.length} {(ProductArray.length === 1) ? `product` : `products`} of {result.length}
            </p>
            <ol className="pages">
          <li><a href="#" aria-label="Current Page, Page 1" aria-current="true">1</a></li>
          <li><a href="#" aria-label="Page 2">2</a></li>
          <li><a href="#" aria-label="Page 3">3</a></li>
          <li><a href="#" aria-label="Page 4">4</a></li>
          <li><a href="#" aria-label="Page 5">5</a></li>
        </ol>
        </nav>
        </div>
    )
}

export default SearchFor