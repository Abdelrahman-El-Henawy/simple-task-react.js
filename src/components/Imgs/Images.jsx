import React, { Component } from "react";
import { Link } from "react-router-dom";


export default class Images extends Component {

  render() {
    const obj = this.props.pic;
    const {id,img} = obj
    const showFunc = this.props.showImg
    return (
      <>
                <div className="col-lg-4 col-md-6 py-5">
                    <Link onClick={()=>{
                        // <ZoomImg showImgFunc = {showFunc(id)}/>
                        {showFunc(id)}
                    }}>
                        <div  className="position-relative picture w-100">
                            <div className="overlay rounded-3 d-flex justify-content-center align-items-center">
                            <i className=" fa-solid fa-plus fa-3x "></i>
                            </div><img id={id} className="rounded-3 w-100" src={img} alt="" />
                        </div>
                    </Link>
                </div>
                
              
      </>
    );
  }
}
