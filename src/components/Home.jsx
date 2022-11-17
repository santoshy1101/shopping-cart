import { CartState } from "../context/Context";
import SingleProduct from "./SingleProduct";
import Filters from "./Filters";
import "./styles.css"
export default function Home() {


  const {state : {products}, } = CartState()

  console.log(products)

  return <div className="home">

  <Filters/>

  <div className="productContainer">
  {
    products.map((prod)=>{
    return  <SingleProduct prod={prod} key ={prod.id}/>
    })
  }
  
  </div>
  </div>;
}
