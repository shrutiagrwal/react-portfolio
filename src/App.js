import React, { Component } from "react";
import "./style.css";
import SideBar from './components/sidebar'
import Body from './components/body'
export default class App extends Component {
    render() {
        return ( 
          <div className = "row" >
            <div className = "col-3" > < SideBar />
            </div>  
            <div className = "col-9" > < Body /> 
            </div>  </div>
        );
    }
}