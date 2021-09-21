import React from "react";
// import Img1 from '../components/Images/12.jpg';
import  './Header.css';

 function Header()
{
  return (
    <div>
  <div className="outer-part">
 <div className="head"> 

 <img  className="img-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRltPMGDF7UGsme8WBuFxEwG8H-Ys4nW7TbOBFXG4H36Q11Ccbmc0tvVK_RU4N9-EI2GQ&usqp=CAU" alt="" />
 

<div className="btn-login">
<button className="btn1 lg"> Login</button>
<button className="btn1 su">SignUp</button>
</div>
<h1 className="heading-hsec2"><span className="animation-heading"></span></h1>
 <h2 className="h2-text">Order food from favourite restaurants near you.</h2>
 <div className="search-bar">
 <input className="input-loc bg-in" max-length="30"placeholder="Enter Your delievery location" />
 <a className="search-btn" href="#"> 
 <span>FIND FOOD</span>
 </a>
 </div>
  <h3 className="h3">POPULAR CITIES IN INDIA
</h3>
<ul>
  <li className="cities"><a className="a-city" href="#">Ahmedabad</a></li>
  <li className="cities"><a className="a-city"href="#" >Banglore</a></li>
  <li className="cities"><a className="a-city"href="#" >Chennai</a></li>
  <li className="cities"><a className="a-city"href="#" >Delhi</a></li>
  <li className="cities"> <a className="a-city"href="#" >Gurgoan</a></li>
  <li className="cities"><a className="a-city"href="#" >Hyderabad</a></li>
  <li className="cities"><a className="a-city"href="#" >kolakata</a></li>
  <li className="cities"><a className="a-city"href="#" >Mumbai</a></li>
  <li className="cities"><a className="a-city"href="#" >Pune</a></li>
  <li className="cities"><a className="a-city"href="#" >&more</a></li>

</ul>
  </div>
  
  <div>
 <img  className="img-c" src="https://web.archive.org/web/20210903175246im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1340/Lunch1_vlksgq" alt="" />
            
        </div>
        
  </div><div className="bg-dark">
    <div className="div-comp">
<img   width="105" height="199" className="content" src="https://web.archive.org/web/20210903175337im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_210,h_398/4x_-_No_min_order_x0bxuf"/>
<h2>No Minimum Order</h2>
<p>Order in for yourself or for the group,<br></br> with no restrictions on order value</p>
</div><div className="div-comp"> <img   width="105" height="199" className="content" src="https://web.archive.org/web/20210903175339im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_248,h_376/4x_-_Super_fast_delivery_awv7sn"/>
<h2>Live Order Tracking</h2>
<p>Know where your order is at all times, <br></br>from the restaurant to your doorstep</p></div>
<div className="div-comp"><img   width="105" height="199" className="content" src="https://web.archive.org/web/20210903175339im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_248,h_376/4x_-_Super_fast_delivery_awv7sn"/><h2>Lightning-Fast Delivery</h2>
<p>Experience Swiggy's superfast delivery for<br></br> food delivered fresh & on time</p></div>
        </div>
</div>
  );
  
  
}
export default Header;