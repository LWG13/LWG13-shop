import "./adminProduct.scss"
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { deleteProduct } from "./ReduxToolkit/authSlice"
import axios from "axios"
import { useQuery } from "react-query"
export default function
  AdminProduct() {
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
    const { data } = useQuery("yourProduct", () => axios.get(`https://ecommerce-server-y5yv.onrender.com/product/userProduct/${auth._id}`))
    const navigate = useNavigate()
    const createButton = () => {
      navigate("/lwg13-shop.git/create-product")
    }
    
  const handleDelete = (id) => {
    dispatch(deleteProduct(id))
  }
    const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: "image", headerName: 'image', width: 130, renderCell: (params) => {return(
    <img src={params.row.image} alt="product" width="50px"/>
  )}},
  { field: "title", headerName: 'title', width: 150 },
  {
    field: 'price',
    headerName: 'price',
    width: 110,
  },
  {
    field: "action",
    headerName: "action",
    width: 210,
    renderCell: (params) => {
      console.log(params.row.id)
      return(
        <div className="action-button" >
          <button className="edit" onClick ={() => navigate(`/lwg13-shop.git/edit-product/${params.row.id}`)}>Edit</button>
          <button className="delete" onClick={() => handleDelete(params.row.id)} disabled={auth.createStatus === "PENDING"}>{auth.createStatus === "PENDING" ? <span>Deleting...</span> : <span>Delete</span>}</button>
        </div>
      )
    }
  }
];
    const rows = data?.data && data?.data.map(item => {
      return {
        id: item._id,
        title: item.title,
        image: item.image,
        price: item.price,
      }
    })
    const paginationModel = { page: 0, pageSize: 15 };
  return(
    <div className="adminProduct" >
      <div className="box-product" >
       <h2>Your Product</h2>
       <button className="adminProductButton" onClick={() => createButton()}>Create</button>
      </div>
      <br/><br/>
     <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        sx={{ border: 0 }}
      />
    </div>
  )
}