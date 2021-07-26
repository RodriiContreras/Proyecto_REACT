import React from 'react'

function Item({nombreItem,precioItem,idItem}){
    return (
        <div>
             <ul>
                 <li>{nombreItem}</li>
                 <li>{precioItem}</li>
                 <li>{idItem}</li>
             </ul>
        </div>
    )
}

export default Item
