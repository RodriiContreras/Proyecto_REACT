import { createContext,useState } from "react";

export const ProductContext = createContext()//estados, acciones GLOBALES
const ProductContextProvider = ({children}) =>{
     const [productos, setProductos] = useState([
{
id:'1',
titulo:'Burger House',
precio:650,
categoria:'Carne',
quantity:1},
{ 
    id:'2',
    titulo:'CheeseBurger',
    precio:550,
    categoria:'Carne',quantity:1},
{
    id:'3',
    titulo:'Veggie Burger',
    precio:550,
    categoria:'Vegano',
    quantity:1},
{ 
    id:'4',
    titulo:'Double Bacon',
    precio:550,
    categoria:'Carne',
quantity:1},
{ 
    id:'5',
    titulo:'Tapa Arterias',
    precio:550,
    categoria:'Carne',
quantity:1}
,
{ 
    id:'6',
    titulo:'Old School Burger',
    precio:550,
    categoria:'Carne',
quantity:1},
{ 
    id:'7',
    titulo:'Triple CheeseBurger',
    precio:550,
    categoria:'Carne',
quantity:1},
{ 
    id:'8',
    titulo:'Old School Burger',
    precio:550,
    categoria:'Carne',
quantity:1},
{ 
    id:'9',
    titulo:'Double Bacon',
    precio:550,
    categoria:'Carne',
quantity:1},
{ 
    id:'10',
    titulo:'Veggie Burger',
    precio:550,
    categoria:'Vegano',
quantity:1},
{ 
    id:'11',
    titulo:'Veggie Burger',
    precio:550,
    categoria:'Vegano',
quantity:1},
{ 
    id:'12',
    titulo:'Veggie Burger',
    precio:550,
    categoria:'Vegano',
quantity:1}

])

    return ( 
        <ProductContext.Provider value={{productos,setProductos}}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider