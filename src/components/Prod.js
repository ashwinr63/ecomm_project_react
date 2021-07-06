import React from 'react'

const Prod = ({prod_name, prod_img, prod_price, prod_desc}) =>{
    return(
        <div>
            <img src={prod_img} alt="car" />
            <h3>{prod_name}</h3>
            <price>{prod_price}</price>
            <p>{prod_desc}</p>
        </div>
    )
}
export default Prod