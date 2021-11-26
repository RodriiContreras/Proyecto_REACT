import React from 'react'
import {useState,useEffect} from 'react'
import { Link,useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import {getFireDb} from '../Firebase/firebase'
import {collection, getDocs } from 'firebase/firestore/lite';
import ItemNavBar from './ItemNavBar'
import { Spinner } from 'react-bootstrap'
import wallpaper from '../imagen/wallpaper.jpg'

function ItemDetailContainer() {

    const [listaCervezas, setlistaCervezas] = useState([])
    const {Id} =useParams()
   

const itemsId =new Promise((resuelto)=>{
  setTimeout(()=>{
if(Id === 'cerveza1'){
  const db = getFireDb()//inicializo firebase en mi proyecto y llamo a  mi "base de datos"
  const coleccion = collection(db,'cervezas')
  const interpretarColeccion = getDocs(coleccion)
resuelto(interpretarColeccion)
}
 else{
  const db = getFireDb()
  const coleccion = collection(db,'cervezas')
    const interpretarColeccion = getDocs(coleccion)
   resuelto(interpretarColeccion)
 }
},6000)
})

useEffect(() => { 
  const ObtenerItems =()=>{
   return itemsId
    }
   ObtenerItems()
 .then(data=> data.docs.map(data => setlistaCervezas([{...data.data()}])))
},  [])
console.log(listaCervezas)
   return (
        <div  style={{backgroundColor:'rgb(237, 235, 235)',width:'100%'}}>
      <ItemDetail  listaCervezas={listaCervezas}/>
        </div> 
    )
}

export default ItemDetailContainer

