import React from 'react'
import ItemCount from './ItemCount/ItemCount'
import ItemList from './Items/ItemList'

const contador= (cantidad) =>{
    console.log(cantidad)
}

function ItemListContainer(props){
    return (
        <div>
            <h1 style={{position:'absolute',top:'350px',left:'35%',fontSize:'85px',color:'rgba(237,176,38,255)',zIndex:'+4100',fontFamily:'Raleway, sans-serif'}}>{props.greeting}</h1>
            <ItemCount stock={10} inicial={1} carrito={contador}/>
            <ItemList/>
        </div>

    )
}

export default ItemListContainer
