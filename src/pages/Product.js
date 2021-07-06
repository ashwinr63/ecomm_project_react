import React, {useState} from 'react'
import Layout from '../components/Layout'
import Filter from '../components/Filter'
import SearchFor from '../components/SearchFor'

const Product = ({data}) => {

    const [searchState, setSearchState] = useState({
        query: ``,
        minPrice: 0,
        sort: (min, max) => min.prod_price - max.prod_price
    })

    const {query, minPrice, sort} = searchState
    // setting minimum price for product

    const handlePrice = (event) => {
            setSearchState({
        ...searchState, minPrice:Number(event.target.value),
    })
    }

    const searchResult = data
    .filter(({prod_price}) => prod_price >= minPrice)
    .filter(({prod_name}) => prod_name.toUpperCase().includes(query.toUpperCase())).sort(sort)


}

export default Product