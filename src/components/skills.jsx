import React,{Component} from "react";
import {skills} from '../data'
import Hr from "./hr"
  const listItems = skills.map((skill) =>
<li key={skill}>
      {skill}
    </li>
  );
export default class Skills extends Component{
  render()
  {
    return (
      <div className='skills' id='Skills'>
      <div className="Bold">
          <Hr/>skills<Hr/>
      </div>
      <br/>
      <ul>{listItems}</ul>
      </div>
    )
  }
}