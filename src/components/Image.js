import React, {useState} from 'react'
import pImg from 'img/Logo.png'

const Image = ({src, alt, ...attr}) => {

  // State will hold the image url
  const [img, setImg] = useState(``)

  if (src) {
    import(`img/${src}`).then((image) => setImg(image.default))
  }

  return (
    <img src={(img) ? img : pImg} alt={alt} {...attr}  />
  )
}

export default Image