import React from 'react'
import CartItem from './CartItem'
import { useSelector,useDispatch} from 'react-redux'
import { clearCart } from '../features/cart/cartSlice'
import { open,close } from '../features/modal/modalSlice'

const CartContainer = () => {
  const {cartItems,total,amount}=useSelector((state)=>state.cart)
  // const {show}=useSelector((state)=>state.modal)
  const dispatch = useDispatch();
  if(amount<1){
    return (
      <section className='cart'>
        <header>
          <h2>Your Bag</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
        
      </section>
    )
  }

  return(
    <section className='cart'>
      <header>
        <div>
          {cartItems.map((item)=>{
            return <CartItem key={item.id} {...item}/>
          })}
        </div>
        <footer>
          <hr/>
          <div className='cart-total'>
            <h4>
            total<span>${total.toFixed(2)}</span>  
            </h4>
          </div>
          <button className='btn clear-btn'onClick={()=>dispatch(open())}>Clear Cart</button>
        </footer>
      </header>
    </section>
  )

}

export default CartContainer
