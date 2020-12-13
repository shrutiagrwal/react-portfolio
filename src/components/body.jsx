import React, { Component } from "react";
// import { name } from "../data";
import Type from './typing'
import About from "./about";
import Skills from "./skills";
import Education from './education'
import Projects from './projects'
export default class Body extends Component {
  render() {
    return (
      <div className="Body">
        <div className="Bold">
        I'm
        </div>
        <Type/>
        <About />
        <Skills />
        <Education/>
        <Projects/>
      </div>
    );
  }
}
