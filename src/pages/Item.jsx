import { useParams } from "react-router"
import { ItemDetailContainer } from "../components"
import { getProductById } from "../services/productServices";
import { useGetProductById } from "../hooks/useGetProductById";
import { Loader } from "../components";

export const Item = () => {

    const {id} = useParams();

    const {product, loading} = useGetProductById(id);

    return loading ? <Loader /> : <ItemDetailContainer product={product}/>;
    
}