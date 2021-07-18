import React from 'react'

function ItemListContainer(props){
    return (
        <div>
            <h1 style={{position:'absolute',top:'350px',left:'35%',fontSize:'85px',color:'rgba(237,176,38,255)',zIndex:'+4100',fontFamily:'Raleway, sans-serif'}}>{props.greeting}</h1>
        </div>
    )
}

export default ItemListContainer
