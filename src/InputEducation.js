import React, { Component } from 'react';
import InputCarouselSelector from './components/InputCarouselSelector';
import InputGroup from './components/InputGroup';

export default class InputEducation extends Component {
    incrementTracker=()=>{
        const changeValue = this.props.currentItemIndex+1;
        if(changeValue<this.props.totalItems)
            this.props.handleTracker("education", changeValue);
    }
    decrementTracker=()=>{
        const changeValue = this.props.currentItemIndex-1;
        if(changeValue>=0)
            this.props.handleTracker("education", changeValue);
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.addEducation();
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <fieldset disabled={this.props.disable?'disabled':''}>
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
                        <button>Add Education</button>
                        <button type='button' onClick={this.props.removeEducation}>Remove Education</button>
                    </fieldset>
                </form>
                <button onClick={this.decrementTracker} disabled={this.props.disable?'disabled':''}>
                    Previous
                </button>
                <InputCarouselSelector index={this.props.currentItemIndex}
                                       length={this.props.totalItems}
                                       typeOf='education'
                />
                <button onClick={this.incrementTracker} disabled={this.props.disable?'disabled':''}>
                    Next
                </button>
            </div>
        );
    }
}
