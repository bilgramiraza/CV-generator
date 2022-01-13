import React, { Component } from 'react'

export default class DisplayEducation extends Component {
    render() {
        const education = this.props.data;
        const eduDiv=education.map((edu)=>{
            return (
                    <div>
                        <h4>Institute Name:{edu.instituteName}</h4>
                        <h4>Location:{edu.location}</h4>
                        <h4>Qualification:{edu.qualification}</h4>
                        <h4>Duration</h4>
                        <h5>From:{edu.duration.from}</h5>
                        <h5>To:{edu.duration.to}</h5>
                    </div>
            );
        });
        return eduDiv;
}
}