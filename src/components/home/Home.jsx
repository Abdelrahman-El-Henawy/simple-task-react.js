import React, { Component } from 'react'
import img from "../Imgs/avataaars.svg"
export default class Home extends Component {
  render() {
    return <>

          <div className='divColor'>
            <div className='d-flex justify-content-center align-items-center h-100 flex-column'>
              <div id="pic" className='picture'>
                <img src={img} alt="" />
              </div>
              <div className='text position-relative'>
                <p className='textHome1 text-center text-white text-uppercase pt-4'>start framework</p>
                <span className='textHome2 text-center w-100 d-inline-block'> <i className='text-white fa-solid fa-star'></i> </span>
              </div>
                <p className='text-center text-white'>Graphic Artist - Web Designer - Illustrator</p>
            </div>
          </div>
    </>
  }
}
