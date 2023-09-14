import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return <>
          <div className='divColor'>
            <div className='d-flex justify-content-center align-items-center h-100 flex-column'>
              <div className='text position-relative'>
                <p className='textHome1 text-center text-white text-uppercase pt-4'>About Component</p>
                <span className='textHome2 text-center w-100 d-inline-block'> <i className='text-white fa-solid fa-star'></i> </span>
              </div>
              <div className="container">

              <div className='row gx-2'>
                <div className='col-md-6'>
                <p className=' text-white'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
                <div className='col-md-6'>
                <p className=' text-white'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
              </div>
              </div>
            </div>
          </div>
          </>
  }
}
