import React from 'react'
import products from '../products.json'
import Prod from './Prod'

// const ProductList = ({data}) => {

//     const {prod_name, prod_img, prod_link, prod_desc, prod_price, prod_rate, prod_type, prod_color} = data

//     return (
//         <article className="product">
//         <header>
//             <div className="product-list">
//                 <a href="product.html"><img src={`src/img/${prod_img}`} alt={`{prod_name}`} /></a>
//             </div>
//             <h3>{prod_name}</h3>
//             <data value="39"><del>${prod_price}</del> <ins>${prod_price}</ins></data>
//         </header>
//         <footer>
//         <button type="button" className="add-cart"><span className="material-icons"></span>Add to Cart</button>
//         </footer>   
//         </article>
//     )
// }
const ProductList = () =>{
    return(
        <section>
            {
                products.map((product)=>{
                    return(
                        <Prod {...product}></Prod>
                    )
                })
            }
        </section>
    )
}

export default ProductList