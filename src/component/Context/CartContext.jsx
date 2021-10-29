import { createContext,useState } from "react";

export const CartContext = createContext()//estados, acciones GLOBALES
const CartContextProvider = ({children}) =>{
     const [itemCart, setItemCart] = useState([])

    return ( 
        <CartContext.Provider value={{itemCart,setItemCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider