import React, { Component } from 'react'
import Navbar from './../navbar/Navbar';
import { Outlet } from 'react-router-dom';

export default class Layout extends Component {
  render() {
    return <>
            <Navbar/>
            <div className="container-fluid">

                <div className="row">
                    <Outlet/>
                </div>
            </div>
            <footer>
              <div className="container py-5">
                <div className="row  text-center">
                  <div className="col-lg-4 col-md-6 py-3 my-3">
                    <div className='location '>
                      <h2 className='text-uppercase '>location</h2>
                      <p>2215 John Daniel Drive</p>
                      <p>Clark, MO 65243</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 py-3 my-3">
                      <h2 className='text-uppercase '>around the web</h2>
                    <div className='socials d-flex justify-content-center align-items-center'>
                      <span className='m-2'> <i className='fa-brands fa-facebook'></i> </span>
                      <span className='m-2'> <i className='fa-brands fa-twitter'></i> </span>
                      <span className='m-2'> <i className='fa-brands fa-linkedin'></i> </span>
                      <span className='m-2'> <i className='fa-solid fa-earth'></i> </span>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 py-3 my-3">
                    <div className='location'>
                      <h2 className='text-uppercase '>ABOUT FREELANCER</h2>
                      <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
            <p className='afterFooter m-0 text-white text-center p-4'>Copyright © Your Website 2021</p>
    </>
  }
}
