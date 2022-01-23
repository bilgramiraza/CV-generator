import React, { Component } from 'react';
import InputGroup from './components/InputGroup';

export default class InputExperience extends Component {
    incrementTracker=()=>{
        this.props.handleTracker("experience", 1);
    }
    decrementTracker=()=>{
        this.props.handleTracker("experience", -1);
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.props);
        this.props.addExperience();
    }
    render() {
        return (
            <div>   
                <form onSubmit={this.handleSubmit}>
                <div className="input-group">
                    <InputGroup inputGroupLabel='Company Name'
                                inputGroupType='text'
                                inputGroupName='companyName'
                                inputGroupValue={this.props.data.companyName}
                                handleChange={this.props.handleChange}
                    />
                </div>
                <div className="input-group">
                    <InputGroup inputGroupLabel='Title'
                                inputGroupType='text'
                                inputGroupName='role'
                                inputGroupValue={this.props.data.role}
                                handleChange={this.props.handleChange}
                    />
                </div>
                <div className="input-group">
                    <InputGroup inputGroupLabel='Address'
                                inputGroupType='text'
                                inputGroupName='location'
                                inputGroupValue={this.props.data.location}
                                handleChange={this.props.handleChange}
                    />
                </div>
                <div className="input-group">
                    <InputGroup inputGroupLabel='From'
                                inputGroupType='date'
                                inputGroupName='from'
                                inputGroupValue={this.props.data.from}
                                handleChange={this.props.handleChange}
                    />
                    <InputGroup inputGroupLabel='To'
                                inputGroupType='date'
                                inputGroupName='to'
                                inputGroupValue={this.props.data.to}
                                handleChange={this.props.handleChange}
                    />
                </div>
                <button>Add Experience</button>
                <button type='button' onClick={this.props.removeExperience}>Remove Experience</button>
            </form>
                <button onClick={this.decrementTracker}>Previous</button>
                <button onClick={this.incrementTracker}>Next</button>
            </div>
        );
    }
}
