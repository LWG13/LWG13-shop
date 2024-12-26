
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
import SearchResult from "./components/searchResult.jsx"
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
    path: "/",
    element: <Navigation />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/category",
        element: <Category />,
        children: [
          {
            path: "/category/:category",
            element: <CategoryType />
          },
        ]
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/faq",
        element: <Faq />
      },
      {
	path: "/search",
	element: <SearchResult />
      }
    ]
  },
  {
     path: "/:productId",
     element: <Detail />
  },
  {
    path: "/cart",
    element: <Cart />
  },
  {
    path: "/favourite",
    element: <Favourite />
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/signup",
    element: <SignupPage />
  },
  {
    path: "/profile/:profileId",
    element: <Profile />,
    children: [
        {
          path: "/profile/:profileId",
          element: <HomeProfile />
        },
      {
        path: "/profile/:profileId/product",
        element: <ProfileProduct />
      }
    ]
  },
  {
    path: "/profile/edit/:profileId",
    element: <EditProfile />
  },
  {
    path: "/email",
    element: <EmailPassword />
  },
  {
    path: "/otp",
    element: <Otp />
  },
  {
    path: "/reset-password",
    element: <ResetPassword />
  },
  {
    path: "/admin",
    element: <Admin />,
    children: [
      {
        path: "/admin",
        element: <Overview />
      },
      {
        path: "/admin/product",
        element: <AdminProduct />
      }
    ]
  },
  {
    path: "/create-product",
    element: <CreateProduct />
  },
  {
    path: "/edit-product/:productId",
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
