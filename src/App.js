import { Component } from "react";
import { RouterProvider, createBrowserRouter, createHashRouter } from "react-router-dom";
import "./App.css"

import Layout from "./components/layout/Layout";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Portfolio from './components/portfolio/Portfolio';
import ZoomImg from "./components/Imgs/ZoomImg";

const router = createHashRouter( [
  {path:"" , element:<Layout/> , children: [
    {path:"", element:<Home/>},] },
  {path: "" , element: <Layout/>, children: [
    {path:"home", element:<Home/>},
    {path:"about", element:<About/>},
    {path:"contact", element:<Contact/>},
    {path:"/portfolio", element:<Portfolio/> }
  ]},
  {path:"*" , element: <h1>error</h1>}
] )

export default class App extends Component{
render(){

  return <>
<RouterProvider router={router}/>
  </>
}
}
