import React,{Component} from "react";
import Hr from "./hr"
import {education} from '../data'
import Card from './EduCard'
export default class Education extends Component{
  render()
  {
    return(
     <div className='container ' id='Education'>
    <div className='edu'>
    <Hr/> Education <Hr/>
    </div>
    <Card/>
    
     </div>
    )
  }
}
