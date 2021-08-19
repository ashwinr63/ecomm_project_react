import React, {useContext} from 'react'
import {useParams} from 'react-router-dom'
import Layout from 'components/Layout'
import Header from 'components/Header'
import Footer from 'components/Footer'
import { ProdContext } from 'context/ProdContext';

const SingleProductPage = () => {

        //Creating single product.
        const {slug} = useParams()
        
}

export default SingleProductPage