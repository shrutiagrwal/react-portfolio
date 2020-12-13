import React,{Component} from "react";
import Hr from "./hr"
import Project from './ProjectCard'
export default class Projects extends Component{
  render()
  {
    return(
     <div >
    <div className='project' id='Project'>
    <Hr/> Projects <Hr/><br/>
    </div>
    <Project/>
     </div>
    )
  }
}
