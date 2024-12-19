import React from 'react'
import './CardInCart.scss'
import deleteCard from '../../image/button-delete.svg'

function CardInCart({
  name,
  price,
  imageUrl,
  onDeleteFromCart,
  id,
  setIsOrderCompleted,
  drawer,
}) {
  const deleteProductInCart = () => {
    setIsOrderCompleted(false)
    onDeleteFromCart({ id })
  }

  return (
    <article className='cardInCart'>
      <img src={imageUrl} alt={'Картинка ' + name.toLowerCase()} />
      <div className='cardInCart__align'>
        <h2>{name}</h2>
        <span className='cardInCart__price'>{price}руб.</span>
      </div>
      {drawer ? (
        <button className='button' onClick={deleteProductInCart}>
          <img className='cardInCart__img' src={deleteCard} alt='удалить товар' />
        </button>
      ) : null}
    </article>
  )
}

export default CardInCart
