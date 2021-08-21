import React, { useContext } from 'react'
import ProdContext from 'contexts/ProdContext'
import Image from 'components/Image'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SecondImg from 'img/010721.jpg'
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';


const SingleProduct = ({ data }) => {
  const { prod_name, prod_img, old_price, prod_price, prod_desc, prod_link, prod_rate, prod_type, prod_color } = data

  const cartProd = useContext(ProdContext)
  const addToCart = cartProd.addToCart

  return (
    <>
      <div classname="img-container">
        <div classname="big-image">
          <Image src={prod_img} alt={prod_name} classname="bigimg" id="bigimg" />
        </div>
        <div classname="thumbail">
          <img src={SecondImg} alt={prod_name} id="thumb1" classname="thumb" />
        </div>
      </div>
      <div classname="product-data">
        <h3>{prod_name}</h3>
        <data value="20k"><del>{old_price}</del> <ins>{prod_price}</ins></data>
        <dl className="prod-rating">
          <dt>{prod_rate}</dt>
          <dd>{prod_rate} <span><StarIcon /></span><span><StarIcon /></span><span ><StarIcon /></span><span ><StarIcon /></span><span><StarHalfIcon /></span></dd>
        </dl>
        <button type="button" className="add-cart" onClick={() => addToCart(prod_name)}>
          <span >
            <ShoppingCartIcon /></span>
        </button>
        <button type="button" className="fav-btn" onClick={() => addToFav(prod_name)}>
          <span ><FavoriteRoundedIcon/></span>
        </button>
      </div>
      <div className="prod-choice">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque mollitia ipsum tempora. Perferendis voluptatem temporibus, vitae qui rerum id voluptatum reprehenderit laudantium fugit quos enim voluptas iste est soluta voluptatibus..</p>
        <form className="filter-set">
          <fieldset className="field-list">
            <legend>Colours</legend>
            <ul>
              <li><label><input type="radio" name="colour" value="r" />Red</label></li>
              <li><label><input type="radio" name="colour" value="w" /> White</label></li>
              <li><label><input type="radio" name="colour" value="b" /> Blue</label></li>
            </ul>
          </fieldset>
          <fieldset className="field-list">
            <legend>Types</legend>
            <ol>
              <li><label><input type="radio" name="type" value="d" /> Diesel</label></li>
              <li><label><input type="radio" name="type" value="p" /> Gas</label></li>
              <li><label><input type="radio" name="type" value="e" /> Electric</label></li>
            </ol>
          </fieldset>
        </form>
      </div>
      </>
  )
}

export default SingleProduct