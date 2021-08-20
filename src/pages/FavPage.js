import React, {useContext, useState} from 'react'
import {Link} from 'react-router-dom'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Cart from 'components/Cart'
import ProdContext from 'contexts/ProdContext'

const FavPage = () => {

    let cartProd = useContext(ProdContext)
    let CartPage = cartProd.cart

    let cartUpdate = CartPage.map((product) => <Cart key={product.prod_name} data={product}/>)


    return (
        <>
        <Header/>
        <div className="cart-page">
            {cartUpdate.length > 0 ? cartUpdate: 'No Items in Cart'}
        </div>
        <Footer/>
        </>
    )
}

export default FavPage