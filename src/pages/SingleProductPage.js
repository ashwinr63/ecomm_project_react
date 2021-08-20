import React, {useContext} from 'react'
import {useParams} from 'react-router-dom'
import Layout from 'components/Layout'
import Header from 'components/Header'
import Footer from 'components/Footer'
import ProdContext from 'contexts/ProdContext'
import SingleProduct from 'components/SingleProduct'

const SingleProductPage = () => {

        //Creating single product.
        const {slug} = useParams()
        const SingleProd = useContext(ProdContext)
        const SingleProductPage = SingleProd.viewProduct(slug)
        
        //updating single product
        const product = SingleProductPage.find((product) => product.prod_name === slug)

        return (
                <Layout>
                <Header />
                <SingleProduct data={product}/>
                <Footer />
                </Layout>
        )
}

export default SingleProductPage