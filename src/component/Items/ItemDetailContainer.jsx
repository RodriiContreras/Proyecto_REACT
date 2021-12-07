import React from 'react'
import {useState,useEffect} from 'react'
import { Link,useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import {getFireDb} from '../Firebase/firebase'
import {collection, getDocs,query,where,get} from 'firebase/firestore/lite';
import Footer from '../Footer/Footer'
import ItemNavBar from './ItemNavBar'
import { Spinner } from 'react-bootstrap'
import wallpaper from '../imagen/wallpaper.jpg'

function ItemDetailContainer() {

    const [listaCervezas, setlistaCervezas] = useState([])
    const [detailBoolean, setDetailBoolean] = useState(false)
    const {parametros} =useParams()
   
    console.log(parametros)
const itemsId =new Promise((resuelto)=>{
  setTimeout(()=>{

 if (parametros === '1' ){
   console.log('estoy en el parametro 1')
  const db = getFireDb()
  const coleccion = collection(db,'cervezas')
  const coca = query(coleccion,where("id","==",parseInt(parametros))) 
  const interpretarcoleccion = getDocs(coca)
   resuelto(interpretarcoleccion)
 } 
 
 if (parametros === '2' ){
  console.log('estoy en el parametro 2')
 const db = getFireDb()
 const coleccion = collection(db,'cervezas')
 const coca = query(coleccion,where("id","==",parseInt(parametros))) 
 const interpretarcoleccion = getDocs(coca)
  resuelto(interpretarcoleccion)
} 

if (parametros === '3' ){
  console.log('estoy en el parametro 3')
 const db = getFireDb()
 const coleccion = collection(db,'cervezas')
 const coca = query(coleccion,where("id","==",parseInt(parametros))) 
 const interpretarcoleccion = getDocs(coca)
  resuelto(interpretarcoleccion)
} 
 else{
     const db = getFireDb()
  const coleccion = collection(db,'cervezas')
    const interpretarColeccion = getDocs(coleccion)
   resuelto(interpretarColeccion,setDetailBoolean(true))

 }
},2000)
})



useEffect(() => { 
  if (parametros === undefined){
  const ObtenerItems =()=>{

   return itemsId
    }
   ObtenerItems()
.then(data =>
setlistaCervezas(
data.docs.map
   (data =>
   
    

      ({...data.data()})
  
      
 )
)
)
}
else if ( parametros === '1'){
  const ObtenerItems =()=>{

    return itemsId
     }
    ObtenerItems()
 .then(data =>setlistaCervezas(data.docs.map(data =>({...data.data()}))))
}
else if ( parametros === '2'){
  const ObtenerItems =()=>{

    return itemsId
     }
    ObtenerItems()
 .then(data =>setlistaCervezas(data.docs.map(data =>({...data.data()}))))
}
else if ( parametros === '3'){
  const ObtenerItems =()=>{

    return itemsId
     }
    ObtenerItems()
 .then(data =>setlistaCervezas(data.docs.map(data =>({...data.data()}))))
}
},[parametros])
console.log(listaCervezas)
   return (
     <div>

        <div  style={{backgroundColor:'rgb(237, 235, 235)',width:'100%'}}>
      <ItemDetail detailBoolean={detailBoolean} listaCervezas={listaCervezas}/>
        </div> 
  { detailBoolean ?
      <Footer/>
      : 
      <div></div>
     }
     </div>
    )
}

export default ItemDetailContainer

