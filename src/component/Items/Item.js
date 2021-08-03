import React from 'react'

function Item({imagen,nombreItem,precioItem,idItem}){
    return (
        <div style={{paddingTop:'5px',marginTop:'5px',textAlign:'center',height:'300px',width:'225px',boxShadow:' rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',borderRadius:'2%',backgroundColor:'#f0e9e9'}}>
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
