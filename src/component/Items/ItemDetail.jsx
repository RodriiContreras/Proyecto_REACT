import React from 'react'

function ItemDetail({listaCervezas}) {
    return (
        <div style={{display:'flex', flexWrap:'wrap'}}>
            {listaCervezas.map(cervezas => (<div style={{paddingLeft:'20px'}}><p>{cervezas.name}</p></div>))}
       </div>
    )
}

export default ItemDetail
