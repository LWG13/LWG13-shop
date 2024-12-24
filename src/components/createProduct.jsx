import "./createProduct.scss";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import shopping from "./shopping.png";
import goback from "./goback.png";
import Footer from "./footer.jsx";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import { useState, useEffect } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useForm, Form } from "react-hook-form";
import { createYourProduct } from "./ReduxToolkit/authSlice.js";
import { MuiFileInput } from 'mui-file-input'
export default function createProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    if (auth.createProductSuccess === true)
      navigate("/LWG13-shop/admin/product");
  });
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(
    "https://shopnguyenlieumypham.com/wp-content/uploads/no-image/product-456x456.jpg",
  );
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("men's clothing");
  const [price, setPrice] = useState("");
  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
      console.log(image);
    };
  };
  const product = {
    title: title,
    image: image,
    description: description,
    category: category,
    price: price,
    userId: auth._id,
    username: auth.username,
    userImage: auth.image,
  };
  const {
    register,
    control,
    formState: { errors, isSubmitting, isDirty },
  } = useForm();
  const handleSubmit = () => {
    dispatch(createYourProduct(product));
  };
  const handleChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
  };

  return (
   <div className="createProduct">
      <div className="grid">
        <div className="naviDetail">
          <Link to={`/LWG13-shop/admin`}>
            <img src={goback} alt="go back" width="90px" />
          </Link>
        </div>
      </div>

      <div className="gridO">
        <div className="gridDetail">
          <div className="productBox">
            <div className="productInfo">
              <h1>Create your Product</h1>
              <br/>
              <hr style={{backGroundColor: "black"}}/>
              <Grid container>
                <Grid item xs={12} sm={5} md={5} lg={5}>
                  <div className="productImg">
                    <img src={image} alt="avatar" />
          <div className="file-upload">
              <h3>Click box to upload</h3>
          
            <input type="file" onChange={(e) => handleChange(e)} accept="image/png, image/jpeg, image/jpg" />
            </div>
            
                  </div>
                </Grid>
                <Grid item xs={12} sm={7} md={7} lg={7}>
                
                  <Form
                    onSubmit={handleSubmit}
                    control={control}
                    method="POST"
                    action=""
                  >
                    <label>Title</label>
                    <input
                      type="text"
                      {...register("title", {
                        required: {
                          value: true,
                          message: "Title product is required",
                        },
                        minLength: {
                          value: 5,
                          message:
                            "product title should be at least 5 characters",
                        },
                      })}
                      onChange={(e) => setTitle(e.target.value)}
                      required
                    />
                  
                    <p className="error">{errors.title?.message}</p>
                    <label>Description</label>
                    <textarea
                      {...register("desc", {
                        required: {
                          value: true,
                          message: "Desc product is required",
                        },
                        minLength: {
                          value: 6,
                          message:
                            "product title should be at least 6 characters",
                        },
                      })}
                      onChange={(e) => setDescription(e.target.value)}
                      required
                    />
                    <p className="error">{errors.desc?.message}</p>
                    <label>Category</label>
                    <div className="createCategory">
                      <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        value={category}
                        label="Category"
                        color="black"
                        onChange={(e) => setCategory(e.target.value)}
                        required
                      >
                        <MenuItem value="" disabled>
                          <em>Select Category</em>
                        </MenuItem>
                        <MenuItem value="men's clothing">Men Clothing</MenuItem>
                        <MenuItem value="women's clothing">
                          Women Clothing
                        </MenuItem>
                        <MenuItem value="jewelery">Jewelery</MenuItem>
                        <MenuItem value="electronics">Electronics</MenuItem>
                        <MenuItem value="food">Food</MenuItem>
                        <MenuItem value="skin care">Skin Care</MenuItem>
                        <MenuItem value="sport">Sport</MenuItem>
                      </Select>
                    </div>
                    <br />
                    <label>Price(dollar $)</label>
                    <input
                      type="number"
                      {...register("price", {
                        required: {
                          value: true,
                          message: "Price product is required",
                        },
                      })}
                      onChange={(e) => setPrice(String(e.target.value))}
                      required
                    />
                    <p className="error">{errors.price?.message}</p>

                    <button className="btn-submit" disabled={auth.createStatus === "PENDING"}>{auth.createStatus === "PENDING" ? <span>Creating...</span> : <span>Create</span>} </button>
                  </Form>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
