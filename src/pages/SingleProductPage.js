import React, {useContext} from 'react'
import {useParams} from 'react-router-dom'
import Layout from 'components/Layout'
import Header from 'components/Header'
import Footer from 'components/Footer'
import SingleProduct from 'components/SingleProduct'
import ProdContext from 'contexts/ProdContext'

const SingleProductPage = () => {

        //Creating single product.
        const {slug} = useParams()
        const SingleProduct = useContext(ProdContext)
        const SingleProductPage = SingleProduct.viewProduct(slug)
        
        //updating single product
        const prods = SingleProductPage.find((product) => product.prod_name === slug)

        return (
                <>
                <Header />
                <SingleProduct data={prods} />
                <Footer/>
                </>
        )
}

export default SingleProductPage