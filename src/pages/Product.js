import React, {useState} from 'react'
import Layout from 'components/Layout'
import SearchFor from 'components/SearchFor'
import filterlogo from '../img/filter_list_black_24dp.svg'
import Image from 'components/Image'

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
    .filter(({prod_name}) => prod_name.toUpperCase().includes(query.toUpperCase()))
    .filter(({prod_name}) => methods.length === 0 || prod_name.filter((method)=> methods.includes(method)).length > 0)
    .sort(sort)

    const handleQuery = (event) => {
        //setQuery(event.target.value)
    
        setSearchState({
          ...searchState,
          query: event.target.value
        })
    }
        //for Sorting operation

        const handleSort = ({target}) => {

            let sorting
            if (target.value === "0") {
              sorting = (max, min) => max.prod_price - min.prod_price
            } else if (target.value === "1") {
              sorting = (max, min) => min.prod_price - max.prod_price
            }
        
            setSearchState({
              ...searchState,
              sort: sorting
            })
          }
          const handleMethod = ({target}) => {
            // When a check or uncheck a checkbox, add/remove the "value" from the Array
        
            if (target.checked) {
              setSearchState({
                ...searchState,
                methods: [...searchState.methods, target.value]
              })
            } else {
              setSearchState({
                ...searchState,
                methods: searchState.methods.filter((method) => method !== target.value)
              })
            }
          }

    return (
        <Layout>
        <form className="filters">
          <h2>Filters</h2>
          <fieldset className="search">
            <input type="search" name="search" id="filterResults" autoComplete="off" onChange={handleQuery} value={query}/>
          </fieldset>
          <fieldset>
          <select name="sort" id="sort" defaultValue="0" onChange={handleSort}>
            <option value="1">Price, highest to lowest</option>
            <option value="0">Price, lowest to highest</option>
            <option value="newest">Latest Arrivals</option>
          </select>
        </fieldset>
        <fieldset className="slider">
          <label htmlFor="filterPrice">Price:</label>
          <input type="range" name="price" id="filterPrice" value={minPrice} min="0" max="30" step="0.1" onChange={handlePrice}/>
          <output htmlFor="filterPrice">{minPrice.toFixed(1)}</output>
        </fieldset>
            <button type="button" className="filter-button">
            <Image src={filterlogo}/>
            </button>

            <fieldset className="color" onChange={handleMethod}>
              <legend>Colour</legend>
              <ul className="filter-list">
                <li><input type="checkbox" name="colour" value="black" id="black"/> <label htmlFor="black">Black</label></li>
                <li><input type="checkbox" name="colour" value="white" id="white"/> <label htmlFor="white">White</label></li>
                <li><input type="checkbox" name="colour" value="grey" id="grey"/> <label htmlFor="grey">Grey</label></li>
                <li><input type="checkbox" name="colour" value="red" id="red"/> <label htmlFor="red">Red</label></li>
                <li><input type="checkbox" name="colour" value="blue" id="blue"/> <label htmlFor="blue">Blue</label></li>
              </ul>
            </fieldset>
            <fieldset className="types">
              <legend>Types</legend>
              <ol className="filter-list">
                <li><input type="checkbox" name="size" value="xs" id="xs"/> <label htmlFor="xs">Gas</label></li>
                <li><input type="checkbox" name="size" value="sm" id="sm"/> <label htmlFor="sm">Diesel</label></li>
                <li><input type="checkbox" name="size" value="md" id="md"/> <label htmlFor="md">Hydrogen</label></li>
                <li><input type="checkbox" name="size" value="lg" id="lg"/> <label htmlFor="lg">Hybrid</label></li>
                <li><input type="checkbox" name="size" value="xl" id="xl"/> <label htmlFor="xl">Electric</label></li>
              </ol>
            </fieldset>
            <fieldset className="ratings">
            <legend>Ratings (above)</legend>
            <ol className="filter-list">
              <li>
                <input type="radio" name="rating" value="4" id="aboveFour"/>
                <label htmlFor="aboveFour">
                  <span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star_border</span>
                </label>
              </li>
              <li>
                <input type="radio" name="rating" value="3" id="aboveThree"/>
                <label htmlFor="aboveThree">
                  <span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star_border</span><span className="material-icons">star_border</span>
                </label>
              </li>
              <li>
                <input type="radio" name="rating" value="2" id="aboveTwo"/>
                <label htmlFor="aboveTwo">
                  <span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star_border</span><span className="material-icons">star_border</span><span className="material-icons">star_border</span>
                </label>
              </li>
              <li>
                <input type="radio" name="rating" value="1" id="aboveOne"/>
                <label htmlFor="aboveOne">
                  <span className="material-icons">star</span><span className="material-icons">star_border</span><span className="material-icons">star_border</span><span className="material-icons">star_border</span><span className="material-icons">star_border</span>
                </label>
              </li>
            </ol>
          </fieldset>
          </form>
        <SearchFor result={searchResult} />
        </Layout>
    )

}

export default Product