import React, {useState} from 'react'
import Image from 'components/Image'
import {Link} from 'react-router-dom'
const ProductList = ({data}) => {

    const {prod_name, prod_img, old_price, prod_price, prod_desc, prod_link, prod_rate, prod_type, prod_color} = data
        
    // const [img, setImg] =useState(``)
    // import (`..img/${prod_img}`).then((image) => setImg(image.default))
    return (
                <article className="product">
                <header>
                    <div className="product-list">
                        <Link to={`/SingleProductPage/${prod_name}`}><Image src= {prod_img} alt={prod_name} className = "img-class"/></Link>
                    </div>
                    <h3>{prod_name}</h3>
                    <data value="39"><del>{old_price}</del> <ins>{prod_price}</ins></data>
                    <p>{prod_desc}<Link to={`/SingleProductPage/${prod_name}`}></Link></p>
                <dl>
                <dt>Rating</dt>
                <dd>{prod_rate}</dd>
                </dl>  
                </header>
              <form className="product-filter">
                <fieldset className="field-list">
                    <legend>Colours</legend>
                    <ul>
                        {prod_color}
                    </ul>
                </fieldset>
                <fieldset className="field-list">
                    <legend>Types</legend>
                    <ol>
                        {prod_type}
                    </ol>
                </fieldset>
            </form>
                <footer>
                <button type="button" className="add-cart"><span className="material-icons"></span>Add to Cart</button>
                <button type="button"><span className="material-icons">favorite</span></button>
                </footer>   
                </article>
            )
        
    }

export default ProductList