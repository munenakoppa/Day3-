import React, { useState } from "react";
import './MobileList.css';

function MobileList(){

    let [mobiles,setMobiles]=useState([
        {
          id: 1001,
          name: "Samsung Mobile",
            description: "Samsung Mobile",
          price: 30000,
          rating: 4,
          inStock: 100,
          url: "https://images.samsung.com/is/image/samsung/assets/in/2307/pfs/02-04-ft12-B5-flexmode-mo-720x540.jpg?$FB_TYPE_J_F_MO_JPG$"
        },
        {
          id: 1002,
          name: "Apple Mobile",
          description: "Samsung Mobile",
          rating: 4,
          inStock: 100,
          price: 40000,
          url: "https://4.imimg.com/data4/LY/WP/GLADMIN-8934545/apple-mobiles-500x500.jpg"
        },
        {
          id: 1003,
          name: "Lg Mobile",
          rating: 4,
          inStock: 100,
          price: 20000,
          url: "https://akm-img-a-in.tosshub.com/businesstoday/images/photo_gallery/202104/lg-chocolate1_070421021217.jpg"
        },
        {
          id: 1004,
          name: "MI Mobile",
          price: 10000,
          rating: 4,
          inStock: 100,
          url: "https://www.91-img.com/pictures/xiaomi-mi-5s-mobile-phone-large-1.jpg"
        }
      ]);

    return(
        
        <div>
            <h1>Mobile Lists</h1>
            <table id="mobiles">
                <tr>
                    <th>Name</th>
                    <th>Rating</th>
                    <th>Price</th>
                    <th>In Stock</th>
                    <th>Image</th>
                </tr>
                {
                    mobiles.map(mobile=>(
                    <tr id={mobile.id}>
                        <td>{mobile.name}</td>
                        <td>{mobile.rating}</td>
                        <td>{mobile.price}</td>
                        <td>{mobile.inStock}</td>
                        <td><img src={mobile.url} alt="Plate" /></td>
                    </tr>
                    ))
                }
            </table>
        </div>
    )
}

export default MobileList;