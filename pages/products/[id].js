import { useRouter } from "next/router";

const Product = () => {
    const router  = useRouter();
    const {id}= router.query;
    return ( 
        <h1>The Product ID: {id}</h1>
     );
}
 
export default Product;