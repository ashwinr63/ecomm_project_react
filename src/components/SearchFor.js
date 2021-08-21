import React, {useState} from 'react'
import ProductList from 'components/ProductList'
import { Pagination } from 'antd'

const SearchFor = ({result}) => {

    const [currPage, setCurrPage] = useState(1)
    const pageSize = 3
    const startRow = (currPage - 1) * pageSize
    const endRow = startRow + pageSize
    const totalPages = Math.ceil(result.length / pageSize)

    const ProductArray = result.slice(startRow,endRow).map((products) => <ProductList key={products.prod_name} data={products} />)

    return (
        <>
        
        <section className="results">
        <h2 className="heading">Results</h2>
        <div className="product-list">
            {ProductArray}
        </div>
           
        <nav aria-label="Pagination" className="pagination">
            <p id="pageNumber">
                {ProductArray.length} {(ProductArray.length === 1) ? `product` : `products`} of {result.length}
            </p>
            <p className="pages"><Pagination defaultCurrent={currPage} total={result.length} defaultPageSize={pageSize} onChange={(page) => setCurrPage(page)}></Pagination>
        </p>
        </nav>
        </section>
        </>
    )
}

export default SearchFor