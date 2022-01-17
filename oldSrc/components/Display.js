import React, { Component } from 'react'

import EducationDisplay from './DisplayEducation';
import ExperienceDisplay from './DisplayExperience'
import DisplayPersonal from './DisplayPersonal';

export default class Display extends Component {
    render() {
        const {personalInfo, education, experience}=this.props;
        return (
            <div className='container'>
                <h3>Personal Info</h3>
                <DisplayPersonal data={personalInfo} />
                <h3>Education</h3>
                <EducationDisplay data={education}/>
                <h3>Experience</h3>
                <ExperienceDisplay data={experience}/>
            </div>
        )
    }
}
