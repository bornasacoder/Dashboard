import React from 'react'
import './product.css'
import {Link} from 'react-router-dom';
import { Chart } from '../../components/chart/Chart';
import {Publish} from "@material-ui/icons"
import { productData } from '../../dummData';
export const Product = () => {
  return (
    <div className='product'>
        <div className="productTitleContainer">
            <h1 className="productTitle">Product</h1>
        </div>
        <div className="productTop">
            <div className="productTopLeft">
                <Chart data={productData} dataKey="Sales" title="Sales Performance" />
            </div>
            <div className="productTopRight">
                <div className="productInfoTop">
                    <img src="https://images.pexels.com/photos/10421387/pexels-photo-10421387.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="productInfoImg" />
                    <span className="productName">Apple Airpods</span>
                </div>
                <div className="productInfoBottom">
                    <div className="productInfoItem">
                        <span className="productInfoKey">id:</span>
                        <span className="productInfoValue">123</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">Sales:</span>
                        <span className="productInfoValue">4123</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">active:</span>
                        <span className="productInfoValue">yes</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">in stock:</span>
                        <span className="productInfoValue">no</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">id:</span>
                        <span className="productInfoValue">123</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="productBottom">
            <form action="" className="productForm">
                <div className="productFormLeft">
                <label htmlFor="">Product Name</label>
                <input type="" name="" id="" placeholder='Apple Airpod' />
                <label htmlFor="">In Stock</label>
                <select name="inStock" id="idStock">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
                <label htmlFor="">Active</label>
                <select name="active" id="active">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
                </div>
                <div className="productFormRight">
                    <div className="productUpload">
                        <img src="https://images.pexels.com/photos/10421387/pexels-photo-10421387.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="productUploadImg" />
                        <label htmlFor="file">
                            <Publish/>
                        </label>
                        <input type="file" name="" id="file" style={{display:"none"}} />
                    </div>
                    <button className='productButton'>Update</button>
                </div>
            </form>
        </div>
    </div>
  )
}
