import {createSlice} from "@reduxjs/toolkit"
import { toast } from "react-toastify"
const initialState = {
  favItem: localStorage.getItem("favItem") ? JSON.parse(localStorage.getItem("favItem")) : []
}
const favSlide = createSlice({
  name: "fav",
  initialState,
  reducers: {
    addToFav(state, action) {
      
      
        const tempProduct = {...action.payload}
        state.favItem.push(tempProduct)
        toast.success(`added ${action.payload.title} to cart`, {
          position: "top-right"
        })
      
      localStorage.setItem("favItem", JSON.stringify(state.favItem))
    },
    removeFromFav(state, action) {
     const nextFavItems = state.favItem.filter((item) => item.id !== action.payload.id)
      state.favItem = nextFavItems
      localStorage.setItem("favItem", JSON.stringify(state.favItem))
      toast.error(`${action.payload.title} remove from favourite`, {
        position: "top-right"
      })
    },
    clearFav(state, action) {
     state.favItem = [];
     toast.error(`favourite page is empty`, {
       position: "top-right"
     })
     localStorage.setItem("favItems", JSON.stringify(state.favItem))
    },
  }
})
export const { addToFav, removeFromFav, clearFav} = favSlide.actions
export default favSlide.reducer                             