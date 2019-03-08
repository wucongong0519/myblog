import React, { Component } from 'react'
import LazyLoad from 'react-lazyload';
import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";
export default class Home extends Component {
 
  render() {
    return (
      <div id="Home">
         <div style={{height:"100vh"}}></div>
         <div style={{margin:"50px"}}>
         <LazyLoad height={200}>
            <img alt="图1" src={img1}></img>
            <span>Loream</span>
         </LazyLoad>
         </div>
         <div>
         <LazyLoad height={200}>
            <img src={img2}></img>
            <span>Loream</span>
         </LazyLoad>
         </div>
      </div>
    )
  }
}




