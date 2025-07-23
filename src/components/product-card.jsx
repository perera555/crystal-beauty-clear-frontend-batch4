import { Link } from "react-router-dom";

 
 export default function ProductCard(props){
 const product = props.product;

return(
    
        <Link className="w-[250px] m-4 h-[350px] bg-amber-200  ">
            <img className="w-full h-[220px]"  src={product.images[0]} />
        </Link>
        
    
)

 }
