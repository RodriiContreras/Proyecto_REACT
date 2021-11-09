import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartArrowDown} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function CartWidget() {
    return (
               <Link to={'/cart'}><FontAwesomeIcon style={{ fontSize:'25px',color:'black',position:'absolute',top:'25px',left:'95%',zIndex:'+4050'}} icon={faCartArrowDown}/></Link>
       )
}

export default CartWidget
