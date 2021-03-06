import React, {useContext} from 'react'
import Image from 'components/Image'
import ProdContext from 'contexts/ProdContext'
import Header from 'components/Header'
import Footer from 'components/Footer'


const Cart = ({data}) => {
    
    const {prod_id, prod_name, prod_img, old_price, prod_price, prod_desc, prod_link, prod_rate, prod_type, prod_color} = data  

    return (
        <ProdContext.Provider value= {{data:products, viewProduct:viewProduct, cart:cart, addToCart:addToCart }}>
        <Header/>
        <section className="cart-container">
        <div className="inside-cart">
        <Image src={prod_img} alt={prod_name}/>
        </div> 
        <div className="product-cart">
        <h2>{prod_name}</h2>
        <h3>{prod_desc}</h3>
        <data><del>{old_price}</del> <ins>{prod_price}</ins></data>
        </div>
        <div className="number-in-cart">
        <button type="button" className="btn-cart" onClick={() => addToCart(data.prod_id)}>Delete</button>
        </div>
        </section>
        <Footer/>
        </ProdContext.Provider>
    )
}

export default Cart