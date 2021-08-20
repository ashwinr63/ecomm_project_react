import React from 'react'
import {useParams} from 'react-router-dom'
import Header from 'components/Header'
import Footer from 'components/Footer'
import ProdContext from 'contexts/ProdContext'
import SingleProduct from 'components/SingleProduct'
import '../css/index.css'
import '../css/style.css'

const SingleProductPage = () => {

        //Creating single product.
        const {slug} = useParams()
        const SingleProduct1 = useContext(ProdContext)
        const SingleProductPage = SingleProduct1.viewProduct(slug)
        
        //updating single product
        const prods = SingleProductPage.find((product) => product.prod_name === slug)

        return (
                <>
                <Header />

                <SingleProduct data={prods}/>

                <Footer/>
                </>

        )
}

export default SingleProductPage