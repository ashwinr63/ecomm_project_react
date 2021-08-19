import React, {useContext} from 'react'
import ProdContext from 'contexts/ProdContext'
import Image from 'components/Image'
import SecondImg from 'img/010721.jpg'


const SingleProduct = ({data}) => {
    const {prod_name, prod_img, old_price, prod_price, prod_desc, prod_link, prod_rate, prod_type, prod_color} = data

    const cartProd = useContext(ProdContext)
    const addCart = cartProd.addCart

    return (
        <div>
        <div classname="img-container">
                <div classname="big-image">
                    <Image src={prod_img} alt={prod_name} classname="bigimg" id="bigimg"/>
                </div>
                <div classname="thumbail"> 
                  <img src={SecondImg} alt={prod_name} id="thumb1" classname="thumb"/>
                </div>
        </div>
        <div classname="product-data">
        <h3>Honda Civic</h3>
                <data value="20k"><del>{old_price}</del> <ins>{prod_price}</ins></data>
                <dl className="prod-rating">
                  <dt>{prod_rate}</dt>
                  <dd>4.4 <span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star_half</span></dd>
                </dl> 
                <button type="button" className="selection">
                <span className="material-icons">
                shopping_cart</span>
                </button>
                <button type="button" className="selection">
                    <span className="material-icons">favorite_border</span>
                </button>
        </div>
        <div className="prod-choice">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque mollitia ipsum tempora. Perferendis voluptatem temporibus, vitae qui rerum id voluptatum reprehenderit laudantium fugit quos enim voluptas iste est soluta voluptatibus..</p>
                <form className="filter-set">
                  <fieldset className="field-list">
                    <legend>Colours</legend>
                    <ul>
                      <li><label><input type="radio" name="colour" value="r"/>Red</label></li>
                      <li><label><input type="radio" name="colour" value="w"/> White</label></li>
                      <li><label><input type="radio" name="colour" value="b"/> Blue</label></li>
                    </ul>
                  </fieldset>
                  <fieldset className="field-list">
                    <legend>Types</legend>
                    <ol>
                      <li><label><input type="radio" name="type" value="d"/> Diesel</label></li>
                      <li><label><input type="radio" name="type" value="p"/> Gas</label></li>
                      <li><label><input type="radio" name="type" value="e"/> Electric</label></li>
                    </ol>
                  </fieldset>
                </form>
            </div>
        </div>
    )
}

export default SingleProduct