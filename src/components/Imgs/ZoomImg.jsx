import React, { Component } from 'react';
import img1 from "../Imgs/imgsss/poert1.png";
// import img2 from "../Imgs/imgsss/port2.png";
// import img3 from "../Imgs/imgsss/port3.png";
import "./ZoomImg.css"
// const allImages=[img1,img2,img3];
// const copyAllImages = [...allImages,...allImages]

export default class ZoomImg extends Component {
    render() {
        const showZoom = this.props.showImgFunc
    return <>
        <div className='position-fixed top-0 start-0 zoom d-flex justify-content-center align-items-center h-100 w-100'>
            <div>
                <img src={showZoom} alt="" />
            </div>
        </div>
    </>
  }
}

// <div className='position-fixed top-0 start-0 bg-info d-flex justify-content-center align-items-center h-100 w-100'>
//             <img src={img[index]} alt="" />
//         </div>: ""