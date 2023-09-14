import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Navbar extends Component {
  render() {
    return <>
            <nav className="navbar position-sticky top-0 end-0 navbar-expand-lg">
                <div className="container">
                    <Link className="textLogo text-white" to="/home">start framework</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link fs-6 me-3 fw-bold text-uppercase text-white" aria-current="page" to="/about">about</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fs-6 me-3 fw-bold text-uppercase text-white" to="/portfolio">portfolio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fs-6 me-3 fw-bold text-uppercase text-white" to="contact">contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    </>
  }
}
