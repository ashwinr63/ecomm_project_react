import React from 'react'
import {Link} from 'react-router-dom'

const Page404 = () => {
    return (
        <div style={{textAlign: "center", width: "70vw", margin: "auto"}}>
         <h2 style={{fontFamily: "Courier New"}}>Looks like the Page is not available</h2>
         <Link to="/"><p>Let's try again.</p></Link>
         </div>
    )
}