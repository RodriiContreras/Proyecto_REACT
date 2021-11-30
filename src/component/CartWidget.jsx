import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartArrowDown} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import './CartWidget.css'

function CartWidget() {
    return (
               <Link to={'/cart'}><FontAwesomeIcon id='navbar_cart' icon={faCartArrowDown}/></Link>
       )
}

export default CartWidget
