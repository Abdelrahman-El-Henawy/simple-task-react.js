import React, { Component } from 'react';
import Images from '../Imgs/Images';
import img1 from "../Imgs/imgsss/poert1.png";
import img2 from "../Imgs/imgsss/port2.png";
import img3 from "../Imgs/imgsss/port3.png";


export default class Portfolio extends Component {
  state= {
    allPics:[
      {id:"1",img:img1},
      {id:"2",img:img2},
      {id:"3",img:img3},
      {id:"4",img:img1},
      {id:"5",img:img2},
      {id:"6",img:img3},
    ]
  }
  showImg=(id)=>{
    const newCopy = [...this.state.allPics]
    const newAllPics = newCopy.filter((img)=>{
      return img.id === id
    })
    this.setState({allPics:newAllPics})
  }
  render() {
  
    return <>
        <div className='container-fluid portfolio position-relative'>
      <div className="row gy-3">
      <div className='textPort position-relative'>
                <p className='textHome1 text-center text-uppercase pt-4'>Portfolio Component</p>
                <span className='textHome2 text-dark text-center w-100 d-inline-block'>
                  <i className='text-dark fa-solid fa-star'></i> </span>
              </div>
              {this.state.allPics.map((img,index)=>{
                return <Images pic = {img} id={index} key={index} showImg={this.showImg}/>
              })}
      </div>
    </div>
    </>
  }
}
