import { useEffect, useState } from "react";
import { getAllProducts } from "../services/productServices";

export const useGetAllProducts = () => {

    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState ([]);
  
   
  
    useEffect(() => {
  
      
        getAllProducts()
        .then((res) => {
          console.log(res.data)
          setProducts(res.data.products);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => setLoading(false));
    }, []);


return {loading, products};
};
