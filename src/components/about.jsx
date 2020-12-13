import React,{Component} from "react";
import {about} from "../data"
import Hr from "./hr"
export default class About extends Component
{
  render()
  {
    return (
      <div className="about" id='About'>
<Hr/>
      {about}
      <Hr/>
      </div>
    )
  }
}