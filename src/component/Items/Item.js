import React from 'react'

function Item({imagen,nombreItem,precioItem,idItem}){
    return (
        <div style={{paddingTop:'5px',marginTop:'5px',textAlign:'center',height:'300px',width:'225px',border:'1px solid black',borderStyle:'inset',borderRadius:'2%',backgroundColor:'white'}}>
        <div>
            <img style={{width:'220px',height:'150px'}} src={imagen}></img>
        </div>
        <h1 style={{fontSize:'20px',color:'black'}}>{nombreItem}</h1>
        <div>
         <p style={{color:'black',fontWeight:'bolder'}}>Precio: ${precioItem}</p>
        </div>
        <div>
         <p style={{color:'black'}}>Id: {idItem}</p>
        </div>
        <div>

        </div>
        </div>
    )
}

export default Item
