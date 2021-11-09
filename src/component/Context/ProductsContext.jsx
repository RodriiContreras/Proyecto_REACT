import { createContext,useState } from "react";
import CheeseBurger from '../imagen/cheeseBurger.jpg'
import TapaArterias from '../imagen/TapaArterias.jpg'
import VeganBurger from '../imagen/VeganBurger.jpg'
import Bacon from '../imagen/HamburguesaBacon.jpg'
import OldSchool from '../imagen/OldSchool.jpg'
import TripleCheeseBurger from '../imagen/TripleCheeseBurger.jpg'
import VeggieBurger from '../imagen/VeggieBurger.jpg'
import VeggieBurger2 from '../imagen/VeggieBurger2.png'
export const ProductContext = createContext()//estados, acciones GLOBALES
const ProductContextProvider = ({children}) =>{
     const [productos, setProductos] = useState([
{
    id:'1',
    titulo:'cheeseBurger',
    precio:650,
    categoria:'Carne',
    cantidad:1,
    imagen:CheeseBurger,
    descripcion:'awkflawjfwakfwa',
},
{ 
    id:'2',
    titulo:'CheeseBurger',
    precio:550,
    categoria:'Carne',
    imagen:TapaArterias,
    descripcion:'awkflawjfwakfwa',
},
{
    id:'3',
    titulo:'Veggie Burger',
    precio:550,
    categoria:'Vegano',
    cantidad:1,
    imagen:VeganBurger,
    descripcion:'awkflawjfwakfwa',
},
{ 
    id:'4',
    titulo:'Double Bacon',
    precio:550,
    categoria:'Carne',
    cantidad:1,
    imagen:Bacon,
    descripcion:'awkflawjfwakfwa',
},
{ 
    id:'5',
    titulo:'Tapa Arterias',
    precio:550,
    categoria:'Carne',
    cantidad:1,
    imagen:CheeseBurger,
    descripcion:'awkflawjfwakfwa',
}
,
{ 
    id:'6',
    titulo:'Old School Burger',
    precio:550,
    categoria:'Carne',
    cantidad:1,
    imagen:OldSchool,
    descripcion:'awkflawjfwakfwa',
},
{ 
    id:'7',
    titulo:'Triple CheeseBurger',
    precio:550,
    categoria:'Carne',
    cantidad:1,
    imagen:TripleCheeseBurger,
    descripcion:'awkflawjfwakfwa',
},
{ 
    id:'8',
    titulo:'Old School Burger',
    precio:550,
    categoria:'Carne',
    cantidad:1,
    imagen:CheeseBurger,
    descripcion:'awkflawjfwakfwa',
},
{ 
    id:'9',
    titulo:'Double Bacon',
    precio:550,
    categoria:'Carne',
    cantidad:1,
    imagen:CheeseBurger,
    descripcion:'awkflawjfwakfwa',
},
{ id:'10',
titulo:'Veggie Burger',
precio:550,
categoria:'Vegano',
cantidad:1,
imagen:VeggieBurger,
descripcion:'awkflawjfwakfwa',
},
{ 
    id:'11',
    titulo:'Veggie Burger',
    precio:550,
    categoria:'Vegano',
    cantidad:1,
    imagen:VeggieBurger,
    descripcion:'awkflawjfwakfwa',
},
{ 
    id:'12',
    titulo:'Veggie Burger',
    precio:550,
    categoria:'Vegano',
    cantidad:1,
    imagen:VeggieBurger2,
    descripcion:'awkflawjfwakfwa',
}
])

    return ( 
        <ProductContext.Provider value={{productos,setProductos}}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider