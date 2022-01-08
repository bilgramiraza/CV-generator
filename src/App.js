import React, { Component } from 'react'
import Display from './components/Display'
import InputSection from './components/InputSection';
export default class App extends Component {
  constructor(){
    super();

    this.state={
      personalInfo:{
        fullName:'',
        email:'',
        location:'',
        phoneNo:'',
      },
      education:[{
        instituteName:'',
        location:'',
        qualification:'',
        duration:{
          from:'',
          to:'',
        },
      }],
      experience:[{
        companyName:'',
        title:'',
        location:'',
        duration:{
          from:'',
          to:'',
        },
      }],
    };
  }
  getData=(data)=>{

  };
  render() {
    const {personalInfo, education, experience}=this.state;
    return (
      <div>
        <InputSection getData={this.getData}/>
        <Display personalInfo={personalInfo} education={education} experience={experience} />
      </div>
    )
  }
};
