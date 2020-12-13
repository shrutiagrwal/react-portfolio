import React, { Component } from "react";
import {education} from '../data'
export default class Card extends Component{
render()
{
  return (
    <div>
    {education.map(edu=>{
return(<div className='card card text-center'>
      <div className='card-header'>
       {`${edu.degree}`}
      </div>
     <div className='card-body'>
     {`${edu.institute}  
     (${edu.time})`}
     <footer className="blockquote-footer"> {`Percentage (${edu.percentage})`}</footer>
     </div>
      </div>
)    })}
    </div>
      )
}
} 