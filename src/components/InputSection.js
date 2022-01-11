import React, { Component } from 'react'
import InputEducation from './InputEducation';
import InputExperience from './InputExperience';
import InputPersonal from './InputPersonal';

export default class InputSection extends Component {
    constructor(props){
        super(props);
        this.state={
            personalInfo:{},
            education:[],
            experience:[],
        };
    }
    getPersonalInfo=(data)=>{
        this.setState({
            personalInfo:data,
        });
    };
    getEducationInfo=(data)=>{
        this.setState({
            education:[...data],
        });
    };
    getExperienceInfo=(data)=>{
        this.setState({
            experience:[...data],
        });
    };
    assembleData(e){
        e.preventDefault();
        const finalData = {
            personalInfo:this.state.personalInfo,
            education:this.state.education,
            experience:this.state.experience,
        };
        this.props.getData(finalData);
    }
    render() {
        return (
            <div className='container'>
                <InputPersonal getInfo={this.getPersonalInfo}/>
                <InputEducation getInfo={this.getEducationInfo}/>
                <InputExperience getInfo={this.getExperienceInfo}/>
                <button type='submit' onClick={this.assembleData.bind(this)}>Generate CV</button>
            </div>
        )
    }
}
