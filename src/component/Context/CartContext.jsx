import { createContext,useState } from "react";

export const CartContext = createContext()//estados, acciones GLOBALES

export default function UseCartContext ({children}){
    const [itemcart, setItemCart] = useState()  
    
    return (
        <>
        <CartContext.Provider value={{itemcart,setItemCart}}>
            {children}
        </CartContext.Provider>
        </>
    )
}
