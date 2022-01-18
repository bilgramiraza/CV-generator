import React, { Component } from 'react';
import InputGroup from './components/InputGroup';


// CARASOL INPUT FORM USING A TRACKER FLAG TO SELECT THE CORRECT ITEM

export default class InputEducation extends Component {
    incrementTracker=()=>{
        this.props.handleTracker("education", 1);
    }
    decrementTracker=()=>{
        this.props.handleTracker("education", -1);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <div className="input-group">
                    <InputGroup inputGroupLabel='Institute Name'
                                inputGroupType='text'
                                inputGroupName='instituteName'
                                inputGroupValue={this.props.data.instituteName}
                                handleChange={this.props.handleChange}
                    />
                </div>
                <div className="input-group">
                    <InputGroup inputGroupLabel='Qualification'
                                inputGroupType='text'
                                inputGroupName='qual'
                                inputGroupValue={this.props.data.qual}
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
            </form>
                <button onClick={this.decrementTracker}>Previous</button>
                <button onClick={this.incrementTracker}>Next</button>
                <button>Add Education</button>
                <button>Remove Education</button>
                <button>Confirm Education Details</button>
            </div>
        );
    }
}
