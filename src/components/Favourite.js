import React, { useContext } from 'react'
import Image from 'components/Image'
import ProdContext from 'contexts/ProdContext'
import Header from 'components/Header'
import Footer from 'components/Footer'

const Favourite = ({data}) => {

    const {prod_name, prod_img, old_price, prod_price, prod_desc, prod_link, prod_rate, prod_type, prod_color} = data

    //delete product from the file
    const prodDel = useContext(ProdContext)

    // render 
    return (
        <div className="fav-product">
            
        </div>
    )

}
export default Favourite