
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"
import axios from "axios"
import {jwtDecode} from "jwt-decode"
const initialState= {
  token: localStorage.getItem("token"),
  username: "",
  email: "",
  phoneNumber: "",
  password: "",
  _id: "",
  image: "",
  desc: "",
  product: [],
  follower: "",
  registerStatus: "",
  registerError: "",
  loginStatus: "",
  loginError: "",
  userLoaded: false,
  editedProfile: false,
  emailReset: "",
  firstAuth: false,
  secondAuth: false,
  successReset: false,
  error: "",
  createProductSuccess: false,
  createLoading: "",
  createStatus: "",
  deleteProductSuccess: false,
  editProductSuccess: false
}

export const registerUser = createAsyncThunk("auth/signup", async (values, {rejectWithValue}) => {
   try{
      const token = await axios.post("https://ecommerce-server-y5yv.onrender.com/user/signup", {
       username: values.username,
       email: values.email,
       password: values.password,
       phoneNumber: values.phoneNumber,
       image: values.image,
       desc: values.desc,
     })
     localStorage.setItem("token", token.data)
     return token.data
   }catch(err){
     console.log(err.response.data)
     return  rejectWithValue(err.response.data)
   }
})

export const emailAuth = createAsyncThunk("auth/email", async (values, {rejectWithValue}) => {
   try{
      const data = await axios.post("https://ecommerce-server-y5yv.onrender.com/user/verify", {
       email: values.email,

     })
    return data.data
   }catch(err){
     console.log(err.response.data)
     return  rejectWithValue(err.response.data)
   }
})
export const createYourProduct = createAsyncThunk("product/create", async (values, {rejectWithValue}) => {
   try{
      const data = await axios.post("https://ecommerce-server-y5yv.onrender.com/product/create", {
       title: values.title,
       image: values.image,
       description: values.description,
       category: values.category,
       price: values.price,
       userId: values.userId, 
       username: values.username, 
       userImage: values.userImage

     })
    return data.data
   }catch(err){
     console.log(err.response.data)
     return  rejectWithValue(err.response.data)
   }
})
export const otpAuth = createAsyncThunk("auth/otp", async (values, {rejectWithValue}) => {
   try{
      const data = await axios.post("https://ecommerce-server-y5yv.onrender.com/user/verify/otp", {
       otp: values

     })
    return data.data
   }catch(err){
     console.log(err.response.data)
     return  rejectWithValue(err.response.data)
   }
})
export const deleteProduct = createAsyncThunk("product/delete", async (values, {rejectWithValue}) => {
   try{
      console.log("id", values)
      const data = await axios.delete(`https://ecommerce-server-y5yv.onrender.com/product/delete/${values}`, {
       _id: values

     })
    return data.data
   }catch(err){
     console.log(err.response.data)
     return  rejectWithValue(err.response.data)
   }
})
export const editProduct = createAsyncThunk("product/edit", async (values, {rejectWithValue}) => {
   try{
      const data = await axios.put(`https://ecommerce-server-y5yv.onrender.com/product/create/${values._id}`, {
       _id: values._id,
       image: values.image,
       title: values.title,
       description: values.description,
       category: values.category,
       price: values.price,

     })
    return data.data
   }catch(err){
     console.log(err.response.data)
     return  rejectWithValue(err.response.data)
   }
})
export const resetPassword = createAsyncThunk("auth/reset", async (values, {rejectWithValue}) => {
   try{
      const data = await axios.post("https://ecommerce-server-y5yv.onrender.com/user/verify/password", {
       password: values.password,
       email: values.email
     })
    return data.data
   }catch(err){
     console.log(err.response.data)
     return  rejectWithValue(err.response.data)
   }
})
export const loginUser = createAsyncThunk("auth/login", async (values, {rejectWithValue}) => {
   try{
      const token = await axios.post("https://ecommerce-server-y5yv.onrender.com/user/login", {
       email: values.email,
       password: values.password,
     })
     localStorage.setItem("token", token.data)
     return token.data
   }catch(err){
     console.log(err.response.data)
     return  rejectWithValue(err.response.data)
   }
})
export const editProfile = createAsyncThunk("auth/avatar", async (values, {rejectWithValue}) => {
   try{
      const token = await axios.put(`https://ecommerce-server-y5yv.onrender.com/user/signup/${values._id}`, {
       username: values.username,
       phoneNumber: values.phoneNumber,
       image: values.image,
       _id: values._id,
        email: values.email,
       password: values.password,
       desc: values.desc,
      })
     localStorage.setItem("token", token.data)
     console.log(token.data)
     return token.data
   }catch(err){
     console.log(err.respone.data)
     return  rejectWithValue(err.response.data)
   }
})
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loadUser(state, action) {
      const token = state.token

      if(token) {
        const user = jwtDecode(token)
        return {
          ...state,
          username: user.username,
          email: user.email,
          phoneNumber: user.phoneNumber,
          password: user.password,
          _id: user._id,
          image: user.image,
          desc: user.desc,
          userLoaded: true,
        }
      }
    },
    logoutUser(state, action) {
      localStorage.removeItem("token") 
      return {
        ...state,
        token: "",
        username: "",
        email: "",
        _id: "",
        phoneNumber: "",
        password: "",
        image: "",
        desc: "",
        registerStatus: "",
        registerError: "",
        loginStatus: "",
        loginError: "",
        userLoaded: false,
        
      }
    }
  },
  extraReducers: (builder) => {
    
    builder.addCase(registerUser.pending, (state, action) => {
      return {...state, registerStatus: "PENDING"}
    })
    builder.addCase(registerUser.fulfilled, (state,action) => {
      if(action.payload) {
        const user = jwtDecode(action.payload)
      
      return {
        ...state,
        token: action.payload,
        username: user.username,
        email: user.email,
        password: user.password,
        phoneNumber: user.phoneNumber,
        _id: user._id,
        image: user.image,
          desc: user.desc,
        registerStatus: "success"
      }
      }else {
        return state
      }
    })
    builder.addCase(registerUser.rejected, (state,action) => {
      return {...state, registerStatus: "reject", registerError: action.payload}
    })
    builder.addCase(loginUser.pending, (state, action) => {
      return {...state, registerStatus: "pending"}
    })
      builder.addCase(loginUser.fulfilled, (state,action) => {
      if(action.payload) {
        const user = jwtDecode(action.payload)
      
      return {
        ...state,
        token: action.payload,
        username: user.username,
        email: user.email,
        _id: user._id,
        phoneNumber: user.phoneNumber,
        password: user.password,
        image: user.image,
          desc: user.desc,
        loginStatus: "success",
        registerStatus: ""
      }
      }else {
        return state
      }
    })
    builder.addCase(loginUser.rejected, (state,action) => {
      return {...state, loginStatus: "reject", loginError: action.payload}
    })
    builder.addCase(editProfile.fulfilled, (state,action) => {
      if(action.payload) {
        const user = jwtDecode(action.payload)
      console.log(user)
        toast.success(`Edit profile successfully`, {
          position: "top-right"
        })
      return {
        ...state,
        token: action.payload,
        username: user.username,
        email: user.email,
        _id: user._id,
        phoneNumber: user.phoneNumber,
        password: user.password,
        image: user.image,
          desc: user.desc,
          editedProfile: true
      }
       
      }else {
        return state
      }
    })
    builder.addCase(emailAuth.fulfilled, (state,action) => {

      return {
        ...state,
        firstAuth: true,
        emailReset: action.payload,
        registerStatus: ""
      }
      
    })
    
    builder.addCase(emailAuth.pending, (state,action) => {

      return {
        ...state,
        registerStatus: "pending"
      }

    })
    builder.addCase(otpAuth.rejected, (state,action) => {
      return {...state,  error: action.payload}
    }) 
    builder.addCase(otpAuth.pending, (state,action) => {

      return {
        ...state,
       registerStatus: "pending"
      }
      
    })
    builder.addCase(otpAuth.fulfilled, (state,action) => {

      return {
        ...state,
        secondAuth: true,
        registerStatus: ""
        
      }
      
    })
    builder.addCase(emailAuth.rejected, (state,action) => {
      return {...state,  error: action.payload}
    })
    builder.addCase(resetPassword.fulfilled, (state,action) => {

      return {
        ...state,
        firstAuth: false,
        secondAuth: false,
        successReset: true,
        registerStatus: ""
      }
    })
    builder.addCase(resetPassword.rejected, (state,action) => {

      return {
        ...state,
        error: "invalid password",
        registerStatus: "reject"
      }
    })
    builder.addCase(createYourProduct.pending, (state,action) => {

      return {
        ...state,
        createLoading: "Creating...",
        createStatus: "PENDING"
      }

    })
builder.addCase(createYourProduct.fulfilled, (state,action) => {

      return {
        ...state,
        createProductSuccess: true,
        createStatus:""
      }

    })
    builder.addCase(deleteProduct.fulfilled, (state,action) => {

      return {
        ...state,
        deleteProductSuccess: true,
        createStatus:""
      }

    })
    builder.addCase(editProduct.fulfilled, (state,action) => {

      return {
        ...state,
        editProductSuccess: true,
        createStatus: ""
      }

    })
    builder.addCase(editProduct.pending, (state,action) => {

      return {
        ...state,
        editProductSuccess: true,
        createLoading: "Saving...",
        createStatus: "PENDING"
      }

    })
    builder.addCase(deleteProduct.pending, (state,action) => {

      return {
        ...state,
        createLoading: "Deleting...",
        createStatus: "PENDING"
      }

    })
  }
  
})

export const {loadUser, logoutUser} = authSlice.actions
export default authSlice.reducer
