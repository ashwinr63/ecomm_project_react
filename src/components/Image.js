import React, {useState} from 'react'
import pImg from 'img/Honda_Civic.jpg'
const Image = ({src, alt, ...attr}) => {

  // State will hold the image url
  const [img, setImg] = useState(``)
  //let img = null

  if (src) {
    import(`img/${src}`).then((image) => setImg(image.default))
    //img = require(`img/${src}`).default
  }

  return (
    <img src={(img) ? img : pImg} alt={alt} {...attr} />
  )
}

export default Image