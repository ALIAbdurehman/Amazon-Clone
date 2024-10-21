import React from 'react'
import './products.css'
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarRateIcon from '@mui/icons-material/StarRate';
import productDetail from './products.json'
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/actions/actions';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Products = () => {

    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    const handleAddToCart=(item)=>{

        toast.success("Added To Cart", {
            position:"bottom-right",
          })
          
        dispatch(addToCart(item));
    }
    return (
        

        <div className="productPage">
            <div className="productTopBanner">
                <div className="productTopBannerItems">
                    Electronics
                </div>
                <div className="productTopBannerItemsSubMenu">Mobiles</div>
                <div className="productTopBannerItemsSubMenu">Laptops</div>
                <div className="productTopBannerItemsSubMenu">Accessories</div>
                <div className="productTopBannerItemsSubMenu">Home Entertainment</div>
                <div className="productTopBannerItemsSubMenu">Audio</div>
                <div className="productTopBannerItemsSubMenu">Cameras</div>
                <div className="productTopBannerItemsSubMenu">Computers</div>
                <div className="productTopBannerItemsSubMenu">Smart Technology</div>
                <div className="productTopBannerItemsSubMenu">Instruments</div>
                <div className="productTopBannerItemsSubMenu">Stationary</div>
            </div>

            <div className="productsPageMain">
                <div className="productsPageMainLeftCategory">
                    <div className="productsPageMainLeftCategoryTitle">Category</div>
                    <div className="productsPageMainLeftCategoryContent">
                        <div className="productsPageMainLeftCategoryContentSub">Computers & Accessories</div>
                        <div className="productsPageMainLeftCategoryContentSub">Macbooks</div>
                        <div className="productsPageMainLeftCategoryContentSub">Amazon Prime</div>
                        <div className="productsPageMainLeftCategoryContentSub">Average Customer Review</div>
                    </div>
                    <div className="ratingLeftBox">
                        <StarRateIcon sx={{ fontSize: "1.5vw", color: "#febd69" }} />
                        <StarRateIcon sx={{ fontSize: "1.5vw", color: "#febd69" }} />

                        <StarRateIcon sx={{ fontSize: "1.5vw", color: "#febd69" }} />
                        <StarRateIcon sx={{ fontSize: "1.5vw", color: "#febd69" }} />
                        <StarOutlineIcon sx={{ fontSize: "1.5vw", color: "#febd69" }} />
                        <div className="andUp"> & Up</div>
                    </div>

                    <div className="ratingLeftBox">
                        <StarRateIcon sx={{ fontSize: "1.5vw", color: "#febd69" }} />
                        <StarRateIcon sx={{ fontSize: "1.5vw", color: "#febd69" }} />

                        <StarRateIcon sx={{ fontSize: "1.5vw", color: "#febd69" }} />
                        <StarOutlineIcon sx={{ fontSize: "1.5vw", color: "#febd69" }} />
                        <StarOutlineIcon sx={{ fontSize: "1.5vw", color: "#febd69" }} />
                        <div className="andUp"> & Up</div>
                    </div>

                    <div className="ratingLeftBox">
                        <StarRateIcon sx={{ fontSize: "1.5vw", color: "#febd69" }} />
                        <StarRateIcon sx={{ fontSize: "1.5vw", color: "#febd69" }} />

                        <StarOutlineIcon sx={{ fontSize: "1.5vw", color: "#febd69" }} />
                        <StarOutlineIcon sx={{ fontSize: "1.5vw", color: "#febd69" }} />
                        <StarOutlineIcon sx={{ fontSize: "1.5vw", color: "#febd69" }} />
                        <div className="andUp"> & Up</div>
                    </div>

                    <div className="ratingLeftBox">
                        <StarRateIcon sx={{ fontSize: "1.5vw", color: "#febd69" }} />
                        <StarOutlineIcon sx={{ fontSize: "1.5vw", color: "#febd69" }} />

                        <StarOutlineIcon sx={{ fontSize: "1.5vw", color: "#febd69" }} />
                        <StarOutlineIcon sx={{ fontSize: "1.5vw", color: "#febd69" }} />
                        <StarOutlineIcon sx={{ fontSize: "1.5vw", color: "#febd69" }} />
                        <div className="andUp"> & Up</div>
                    </div>

                    <div className="productsPageMainLeftCategoryContentSub">Amazon Prime</div>
                    <div className="productsPageMainLeftCategoryContentSub">Average Customer Review</div>

                    <div className="productsPageMainLeftCategoryContentSub">Amazon Prime</div>
                    <div className="productsPageMainLeftCategoryContentSub">Average Customer Review</div>

                    <div className="productsPageMainLeftCategoryContentSub">Amazon Prime</div>
                    <div className="productsPageMainLeftCategoryContentSub">Average Customer Review</div>

                    <div className="productsPageMainLeftCategoryContentSub">Amazon Prime</div>
                    <div className="productsPageMainLeftCategoryContentSub">Average Customer Review</div>


                </div>

                <div className="productsPageMainRight">
                    <div className="productsPageMainRightTopBanner">
                        1-5 of 5 results for <span className='productsPageMainRightTopBannerSpan'>Macbooks</span>
                    </div>

                    <div className="itemsImageProductPage">


                        {
                            productDetail.product.map((item, index)=>{
                                return(
                                    <div className="itemsImageProductPageOne">
                            <div className="imageBlock">
                                <img src={item.imageUrl} className='productImage' />
                            </div>
                            <div className="productName">
                                <div>{item.name}</div>
                                <div className="rating">
                                    <StarRateIcon sx={{ fontSize: "1.5vw", color: "#febd69" }} />
                                    <StarRateIcon sx={{ fontSize: "1.5vw", color: "#febd69" }} />

                                    <StarRateIcon sx={{ fontSize: "1.5vw", color: "#febd69" }} />
                                    <StarRateIcon sx={{ fontSize: "1.5vw", color: "#febd69" }} />
                                    <StarOutlineIcon sx={{ fontSize: "1.5vw", color: "#febd69" }} />
                                    <div className="andUp">{item.reviews}</div>
                                </div>
                                <div className="buyProduct">
                                    <div className="price"> ${item.price} </div>
                                    <div className='addtocart' onClick={()=>{handleAddToCart(item)}}>Add to Cart</div>

                                </div>
                            </div>

                        </div>
                                )
                            })
                        }
                   

                    </div>


                </div>


            </div>
            <ToastContainer/>

        </div>


    )
}

export default Products