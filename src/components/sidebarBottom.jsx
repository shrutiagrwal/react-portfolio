import React,{Component} from "react";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LinkIcon from '@material-ui/icons/Link';
export default class Bottom extends Component{
  render()
  {
    return(
      
      <div className='bottom'>
     <div className='icon'> 
        <a href='https://github.com/shrutiagrwal' target="_blank">
          <GitHubIcon fontSize="large" className='icon-color'/>
        </a>
      </div>
      <div className='icon'> 
        <a href='https://www.linkedin.com/in/shruti-agrwal/' target="_blank">
          <LinkedInIcon fontSize="large" className='icon-color'/>
        </a>
      </div>
        <div className='icon'> 
        <a href='https://drive.google.com/file/d/1Y7Jvc0mJ43-X19q7t1dOPXF4n8j0kMK-/view?usp=sharing' target="_blank">
          <LinkIcon fontSize="large" className='icon-color'/>
        </a>
      </div>
      </div>
    )
  }
}