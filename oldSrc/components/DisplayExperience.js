import React, { Component } from 'react'

export default class DisplayExperience extends Component {
    render() {
        const experience = this.props.data;
        const experienceDiv=experience.map((exp)=>{
            return (
                <div>
                    <h4>Company Name:{exp.companyName}</h4>
                    <h4>Job Title:{exp.title}</h4>
                    <h4>Location:{exp.location}</h4>
                    <h4>Duration</h4>
                    <h5>From:{exp.duration.from}</h5>
                    <h5>To:{exp.duration.to}</h5>
                </div>
            );
        });
        return experienceDiv;
    }
}