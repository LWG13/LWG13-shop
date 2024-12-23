
import {createSlice} from "@reduxjs/toolkit"
import { toast } from "react-toastify"
const initialState = {
  cartItem: localStorage.getItem("cartItem") ? JSON.parse(localStorage.getItem("cartItem")) : [],
  cartTotalQuantity: 0,
  cartTotalPrice: 0,
}
const cartSlide = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItem.findIndex(
        (item) => item.id === action.payload.id
      )
      if (itemIndex >= 0) {
        state.cartItem[itemIndex].cartQuantity += 1
        toast.info(`increased ${state.cartItem[itemIndex].title} quantity`, {
          position: "top-right"
        })
      } else {
        const tempProduct = {...action.payload, cartQuantity: 1}
        state.cartItem.push(tempProduct)
        toast.success(`added ${action.payload.title} to cart`, {
          position: "top-right"
        })
      }
      localStorage.setItem("cartItem", JSON.stringify(state.cartItem))
    },
    removeFromCart(state, action) {
     const nextCartItems = state.cartItem.filter((item) => item.id !== action.payload.id)
      state.cartItem = nextCartItems
      localStorage.setItem("cartItem", JSON.stringify(state.cartItem))
      toast.error(`${action.payload.title} remove from cart`, {
        position: "top-right"
      })
    },
    decreaseCart(state, action) {
      const itemIndex = state.cartItem.findIndex(cart => cart.id === action.payload.id)
      if (state.cartItem[itemIndex].cartQuantity > 1) {
        state.cartItem[itemIndex].cartQuantity -= 1
        toast.info(`Decreased ${state.cartItem[itemIndex].title} quantity`, {
          position: "top-right"
        })
      } else if (state.cartItem[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItem.filter(cart => cart.id !== action.payload.id)
        state.cartItem = nextCartItems
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItem))
    },
    clearCart(state, action) {
     state.cartItem = [];
     toast.error(`Cart is empty`, {
       position: "top-right"
     })
     localStorage.setItem("cartItems", JSON.stringify(state.cartItem))
    },
    getTotals(state, action) {
      let {total, quantity} = state.cartItem.reduce((cartTotal, cartItem) => {
        const { price, cartQuantity} = cartItem
        const itemTotal = price * cartQuantity
        cartTotal.total += itemTotal
        cartTotal.quantity += cartQuantity
        return cartTotal
      }, { total: 0, quantity: 0})
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total
    }
    
  
  }
})

export const { addToCart, removeFromCart, decreaseCart, clearCart, getTotals } = cartSlide.actions
export default cartSlide.reducer