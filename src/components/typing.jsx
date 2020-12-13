import React, { Component } from "react";
import { name } from "../data";
export default class Type extends Component{
  state={
          text:name,
          textArrayIndex:0,
          typingDelay:200,
          type :function()
          {
            if(this.textArrayIndex)
            {
              
            }
          }
  }
  render()
  {
    return(
      <div className="typedText">
      {name}
        <span className='cursor typing' >
          {'\u00A0'}{'\u00A0'}
        </span>
      </div>
    )
  }
}