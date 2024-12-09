import { createContext,useContext,useState } from "react";
import { ProductData } from "../Components/ProductData";

const ProductListContext = createContext()

export const AllContext=({children})=>{

  const [Products, setProducts] = useState(ProductData);
 
  
  const getProductCountById = (id) => {
    const product = Products.find(product => product.id === id);
    return product ? product.productCount : 0;
  };
    return(
        <ProductListContext.Provider value= {{
            Products, setProducts, getProductCountById
        }}>
            {children}
        </ProductListContext.Provider>
    )
}
export const useAllContext =()=>useContext(ProductListContext)