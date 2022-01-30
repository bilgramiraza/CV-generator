import React, { Component } from 'react';
import InputPersonal from './InputPersonal';
import InputEducation from './InputEducation';
import InputExperience from './InputExperience';

export default class InputForm extends Component {
    handleChange(category,e){
        this.props.getData(category,e.target.name,e.target.value);
    }
    render() {
        const {personal, education, experience} = this.props.data;
        return (
            <div className='container'>
                <h3>Personal Info</h3>
                <InputPersonal handleChange={(e)=>this.handleChange('personal',e)}
                               data={personal}
                               updateStatus={(status)=>this.props.updateStatus('personal',status)}
                               disable={this.props.data.display}
                />
                <hr />
                <h3>Education Info</h3>
                <InputEducation handleChange={(e)=>this.handleChange('education',e)} 
                                data={education.history[education.tracker]}
                                handleTracker={this.props.handleTracker}
                                currentItemIndex={education.tracker}
                                totalItems={education.history.length}
                                addEducation={()=>this.props.addHistory('education')}
                                removeEducation={()=>this.props.removeHistory('education')}
                                updateStatus={(status)=>this.props.updateStatus('education',status)}
                                disable={this.props.data.display}
                />                
                <hr />
                <h3>Experience Info</h3>
                <InputExperience handleChange={(e)=>this.handleChange('experience',e)} 
                                 data={experience.history[experience.tracker]}
                                 handleTracker={this.props.handleTracker}
                                 currentItemIndex={experience.tracker}
                                 totalItems={experience.history.length}
                                 addExperience={()=>this.props.addHistory('experience')}
                                 removeExperience={()=>this.props.removeHistory('experience')}
                                 updateStatus={(status)=>this.props.updateStatus('experience',status)}
                                 disable={this.props.data.display}
                />
            </div>
        )
    }
}
