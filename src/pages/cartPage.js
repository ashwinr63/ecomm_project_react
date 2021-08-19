import React, {useContext} from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Cart from 'components/Cart'
import ProdContext from 'contexts/ProdContext'
import Shopping from '../img/shopping_bag.svg'

const CartPage = () => {

    const cartProd = useContext(ProdContext)
    const CartPage = cartProd.cart
    const cartUpdate = CartPage.map((product) => <Cart key={product.prod_name} data={product}/>)

    return (
        <section className="layout-cart">
        <Header />
        <div className="carts-page">
            <h2 className="cart-shopping">Bag</h2>
            {/* {cartUpdate.length > 0 ? cartUpdate:''}  */}
            <div className="bag-cart">
            <img src={Shopping} width="100%"/>
            </div>
        </div>
        {/* Footer section */}

        <div className="cart-footer">
        <Footer />
        </div>
        </section>
    )
}
export default CartPage