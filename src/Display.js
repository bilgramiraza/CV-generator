import React, { Component } from 'react'

export default class Display extends Component {
    render() {
        const {personal:personalInfo, education:educationInfo, experience:experienceInfo}=this.props.data;
        const educationDivs=educationInfo.history.map((item,index)=>{
            return(            
            <div className='col' key={index}>
                <p>Institute Name: {`${item.instituteName}`}</p>
                <p>Qualification: {`${item.qual}`}</p>
                <p>Location: {`${item.location}`}</p>
                <p>From: {`${item.from}`}</p>
                <p>To: {`${item.to}`}</p>
            </div>
            );
        });
        const experienceDivs=experienceInfo.history.map((item, index)=>{
            return(            
            <div className='col' key={index}>
                <p>Company Name: {`${item.companyName}`}</p>
                <p>Role: {`${item.role}`}</p>
                <p>Location: {`${item.location}`}</p>
                <p>From: {`${item.from}`}</p>
                <p>To: {`${item.to}`}</p>
            </div>
            );
        });
        return (
            <div className='container'>
            <div >
            <h3>Personal Info</h3>
            <div>
                <p>Full Name:{`${personalInfo.firstName} ${personalInfo.lastName}`}</p>
                <p>Email: {`${personalInfo.email}`}</p>
                <p>Location: {`${personalInfo.location}`}</p>
                <p>Mobile No:{`${personalInfo.mobileNo}`}</p>
            </div>
            </div>

            <div>
                <h3>Education</h3>
                {educationDivs}
            </div>

            <div>
                <h3>Experience</h3>
                {experienceDivs}
            </div>
                
            </div>
        )
    }
}
