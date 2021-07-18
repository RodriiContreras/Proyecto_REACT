import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartArrowDown} from '@fortawesome/free-solid-svg-icons'

function CartWidget() {
    return (
               <FontAwesomeIcon style={{ fontSize:'25px',color:'black',position:'absolute',top:'25px',left:'95%',zIndex:'+4050'}} icon={faCartArrowDown}/>
       )
}

export default CartWidget
