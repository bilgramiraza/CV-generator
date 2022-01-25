import React, { Component } from 'react';
import InputGroup from './components/InputGroup';

export default class InputExperience extends Component {
    incrementTracker=()=>{
        const changeValue = this.props.currentItemIndex+1;
        if(changeValue<this.props.totalItems)
            this.props.handleTracker("experience", changeValue);
    }
    decrementTracker=()=>{
        const changeValue = this.props.currentItemIndex-1;
        if(changeValue>=0)
            this.props.handleTracker("experience", changeValue);
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
                <fieldset disabled={this.props.disable?'disabled':''}>
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
                </fieldset>
            </form>
                <button onClick={this.decrementTracker} disabled={this.props.disable?'disabled':''}>
                    Previous
                </button>
                <button onClick={this.incrementTracker} disabled={this.props.disable?'disabled':''}>
                    Next
                </button>
            </div>
        );
    }
}
