import React, { Component } from 'react'

export default class Display extends Component {
    render() {
        const {personalInfo, education, experience}=this.props;
        console.log(personalInfo);
        console.log(education);
        console.log(experience[0]);

        return (
            <div className='container'>
                <h3>Personal Info</h3>
                <h4>Name: {personalInfo.fullName}</h4>
                <h4>Email: {personalInfo.email}</h4>
                <h4>Phone No: {personalInfo.phoneNo}</h4>
                <h4>Location: {personalInfo.location}</h4>
                <h3>Education</h3>
                <h4>Institute Name:{education[0].instituteName}</h4>
                <h4>Location:{education[0].location}</h4>
                <h4>Qualification:{education[0].qualification}</h4>
                <h4>Duration</h4>
                <h5>From:{education[0].duration.from}</h5>
                <h5>To:{education[0].duration.to}</h5>
                <h3>Experience</h3>
                <h4>Company Name:{experience[0].companyName}</h4>
                <h4>Job Title:{experience[0].title}</h4>
                <h4>Location:{experience[0].location}</h4>
                <h4>Duration</h4>
                <h5>From:{experience[0].duration.from}</h5>
                <h5>To:{experience[0].duration.to}</h5>
            </div>
        )
    }
}
