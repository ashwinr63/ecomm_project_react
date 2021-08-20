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
        <>
        <Header/>
        <div className="fav-container">
            <Image src={prod_img} alt={prod_name}/>
        </div>
        <div className="fav-details">
            <h3>{prod_name}</h3>
            <h3>{prod_desc}</h3>
            <h3>{prod_price}</h3>
        </div>
        <button className="fav" type="button" onClick={delCart}>Remove This!</button>
        <Footer/>
        </>
    )

}
export default Favourite