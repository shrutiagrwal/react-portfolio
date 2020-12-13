import React,{Component} from "react";
import {imgUrl,name} from '../data'
export default class Top extends Component{
render()
{
  return(
  <div className="sidebarTop">
  <img src={imgUrl}/>
  <h3 className="center">{name}</h3>
  </div>
  )
}
}