import React from 'react'
import Cerveza from '../imagen/lager.jpg'

function ItemDetail({listaCervezas}) {
    return (
        <div style={{display:'flex', flexWrap:'wrap',width:'400px',position:'relative',left:'300px',top:'80px'}}>
            {listaCervezas.map(cervezas => (
            <div style={{paddingLeft:'20px',textAlign:'center',width:'450px',border:'2px solid black',borderRadius:'5%'}}>
                       
                <div><img style={{width:'50px'}} src={cervezas.image_url}></img></div>
                <h1 style={{fontSize:'30px'}}>{cervezas.name}</h1>
                <div><p> al precio de ${cervezas.boil_volume.value}</p></div>
                <p style={{fontWeight:'bolder'}}>{cervezas.description}</p>
            </div>))}
       </div>
    )
}

export default ItemDetail
