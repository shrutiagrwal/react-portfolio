import React,{Component} from "react";
import Hr from "./hr"
import {projects} from '../data'
export default class Project extends Component{
  render()
  {
    return(
     <div >
    <div className='project'>
    {
      projects.map(project=>{
        return (
          <div className='card card text-center'>
          <div className='card-header'>
          {project.name}
          </div>
           <div className='card-body projects'>
          <ul> {project.about.map(abt=>{
             return(
               <li key='abt'>{abt}</li>
             )
           })}
           </ul>
           </div>
          </div>
        )
      })
    }
    </div>
     </div>
    )
  }
}
