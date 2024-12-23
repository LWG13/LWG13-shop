
import React from 'react'
import ReactDOM from 'react-dom/client'

import Home from './components/Home/home.jsx'
import SignupPage from "./components/signupPage.jsx"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import LoginPage from "./components/loginPage.jsx"
import Category from "./components/Category/category.jsx"
import Navigation from "./components/navigation.jsx"
import { QueryClientProvider, QueryClient } from "react-query"
import Detail from "./components/detail"
import Cart from "./components/cart"
import cartReducer, { getTotals } from "./components/ReduxToolkit/cartSlice"
import favReducer from "./components/ReduxToolkit/favSlice"
import ProfileProduct from "./components/ProfileProduct"
import authReducer from "./components/ReduxToolkit/authSlice"
import CategoryType from "./components/Category/categoryType"
import Profile from "./components/profile"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit"
import Favourite from "./components/fav.jsx"
import { Provider} from "react-redux"
import { loadUser } from "./components/ReduxToolkit/authSlice.js"
import HomeProfile from "./components/homeProfile.jsx"
import EditProfile from './components/editProfile.jsx'
import Contact from './components/contact.jsx'
import Faq from './components/faq.jsx'
import EmailPassword from "./components/emailPassword.jsx"
import Otp from './components/otp.jsx'
import ResetPassword from "./components/resetPassword.jsx"
import Admin from './components/admin.jsx'
import Overview from "./components/adminOverview.jsx"
import AdminProduct from "./components/adminProduct.jsx"
import CreateProduct from "./components/createProduct.jsx"
import EditProduct from "./components/editProduct.jsx"
const queryClient = new QueryClient()
const store = configureStore({
  reducer: {
    cart: cartReducer,
    fav: favReducer,
    auth: authReducer
  }
})
store.dispatch(getTotals())
store.dispatch(loadUser(null))
const router = createBrowserRouter([
  {
    path: "/lwg13-shop/",
    element: <Navigation />,
    children: [
      {
        path: "/lwg13-shop/",
        element: <Home />
      },
      {
        path: "/lwg13-shop/category",
        element: <Category />,
        children: [
          {
            path: "/lwg13-shop/category/:category",
            element: <CategoryType />
          },
        ]
      },
      {
        path: "/lwg13-shop/contact",
        element: <Contact />
      },
      {
        path: "/lwg13-shop/faq",
        element: <Faq />
      }
    ]
  },
  {
     path: "/lwg13-shop/:productId",
     element: <Detail />
  },
  {
    path: "/lwg13-shop/cart",
    element: <Cart />
  },
  {
    path: "/lwg13-shop/favourite",
    element: <Favourite />
  },
  {
    path: "/lwg13-shop/login",
    element: <LoginPage />
  },
  {
    path: "/lwg13-shop/signup",
    element: <SignupPage />
  },
  {
    path: "/lwg13-shop/profile/:profileId",
    element: <Profile />,
    children: [
        {
          path: "/lwg13-shop/profile/:profileId",
          element: <HomeProfile />
        },
      {
        path: "/lwg13-shop/profile/:profileId/product",
        element: <ProfileProduct />
      }
    ]
  },
  {
    path: "/lwg13-shop/profile/edit/:profileId",
    element: <EditProfile />
  },
  {
    path: "/lwg13-shop/email",
    element: <EmailPassword />
  },
  {
    path: "/lwg13-shop/otp",
    element: <Otp />
  },
  {
    path: "/lwg13-shop/reset-password",
    element: <ResetPassword />
  },
  {
    path: "/lwg13-shop/admin",
    element: <Admin />,
    children: [
      {
        path: "/lwg13-shop/admin",
        element: <Overview />
      },
      {
        path: "/lwg13-shop/admin/product",
        element: <AdminProduct />
      }
    ]
  },
  {
    path: "/lwg13-shop/create-product",
    element: <CreateProduct />
  },
  {
    path: "/lwg13-shop/edit-product/:productId",
    element: <EditProduct />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
 
	<React.StrictMode>
   <QueryClientProvider client={queryClient}>
    <ToastContainer />
     <Provider store={store}>
		  <RouterProvider router={router} />
     </Provider>
  </QueryClientProvider>
	</React.StrictMode>
)