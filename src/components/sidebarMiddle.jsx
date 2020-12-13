import React,{Component} from "react";
import {Link} from 'react-scroll'
import Skills from './skills'
export default class Middle extends Component{
   handleScroll = e => {
    e.preventDefault();
    const main = this.main.current;
    window.scrollTo({
      top: main.offsetTop,
      left: 0,
      behavior: "instant"
    });
  };
  render()
  {
    console.log(Skills)
    return(
      <div className='middle'>
      <nav className="navbar navbar-light">
      <ul className="nav navbar-nav">
                 <li><Link activeClass="active" to="About" smooth={true}>About</Link></li>
          <li><Link  to="Skills" spy={true} smooth={true}>Skills</Link></li>
          <li><Link  to="Education" spy={true} smooth={true}>Education</Link></li>
          <li><Link  to="Project" spy={true} smooth={true}>Project</Link></li>
            </ul>
            </nav>
      </div>
    )
  }
}