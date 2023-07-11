import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { calculateTotal } from "./features/cart/cartSlice";
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import Modal from "./components/Modal";
function App() {
  const dispatch=useDispatch()
  const {cartItems}=useSelector((state)=>state.cart)
  const {show}=useSelector((state)=>state.modal)

  useEffect(()=>{
    dispatch(calculateTotal())
  },[cartItems])
  return(
    <>
    {show && <Modal/>}
    <Navbar/>
     <CartContainer/>
    </>
     
  )
 
}
export default App;
