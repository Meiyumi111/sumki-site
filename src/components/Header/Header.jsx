import React from 'react'
import { AppContext } from '../../AppContext/AppContext'

import './Header.scss'
import { Link } from 'react-router-dom'
import logo from '../../image/lg.png'
import basket from '../../image/cart2.png'
import like from '../../image/heart3.png'
import profile from '../../image/user.png'


function Header({ onClickOpenCart, amountProducts }) {
  const { favoriteCards } = React.useContext(AppContext)
  
  return (
    <header className='header'>
      <div className='header__wrapper-left'>
        <Link to='/Home'>
          <img className='header__logo' src={logo} alt='логотип' />
        </Link>
        <div className='header__align'>
          <h2 className='header__title'>Harmony of Fashion</h2>
          <p className='header__subtitle'>Роскошь и престиж</p>
        </div>
      </div>
      <div className='header__wrapper-right'>
        <button className='button' onClick={onClickOpenCart}>
          <img className='header__icon' src={basket} alt='корзина' />
          <span className='header__text'>{amountProducts()} руб.</span>
        </button>
        <button className='button header__button-like'>
          <Link to='/favorite'>
            <img className='header__icon' src={like} alt='закладки' />
            {favoriteCards.length ? <span>{favoriteCards.length}</span> : null}
          </Link>
        </button>
        <button className='button'>
          <Link to='/order'>
            <img className='header__icon' src={profile} alt='история заказов' />
          </Link>
        </button>
       
      </div>
    </header>
  )
}

export default Header
