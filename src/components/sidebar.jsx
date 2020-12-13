import React,{Component} from "react";
import Top from './sidebarTop'
import Middle from './sidebarMiddle'
import Bottom from './sidebarBottom'
export default class SideBar extends Component{
render()
{
  return(
 <div className="wrapper">
 <div className="sidebar">
 <Top/>
 <Middle/> 
 <Bottom/>  
 </div>
 </div>
 )
}
}