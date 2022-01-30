import React, { Component } from 'react';
import InputCarouselSelector from './components/InputCarouselSelector';
import InputGroup from './components/InputGroup';

export default class InputEducation extends Component {
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.addEducation();
        this.props.updateStatus(true);
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
                                        required={true}
                                        />
                        </div>
                        <div className="input-group">
                            <InputGroup inputGroupLabel='Qualification'
                                        inputGroupType='text'
                                        inputGroupName='qual'
                                        inputGroupValue={this.props.data.qual}
                                        handleChange={this.props.handleChange}
                                        required={true}
                                        />
                        </div>
                        <div className="input-group">
                            <InputGroup inputGroupLabel='Address'
                                        inputGroupType='text'
                                        inputGroupName='location'
                                        inputGroupValue={this.props.data.location}
                                        handleChange={this.props.handleChange}
                                        required={true}
                                        />
                        </div>
                        <div className="input-group">
                            <InputGroup inputGroupLabel='From'
                                        inputGroupType='date'
                                        inputGroupName='from'
                                        inputGroupValue={this.props.data.from}
                                        handleChange={this.props.handleChange}
                                        required={true}
                                        />
                            <InputGroup inputGroupLabel='To'
                                        inputGroupType='date'
                                        inputGroupName='to'
                                        inputGroupValue={this.props.data.to}
                                        handleChange={this.props.handleChange}
                                        required={true}
                                        />
                        </div>
                        <button>Add Education</button>
                        <button type='button' onClick={this.props.removeEducation}>Remove Education</button>
                    </fieldset>
                </form>
                <InputCarouselSelector currentIndex={this.props.currentItemIndex}
                                       totalItems={this.props.totalItems}
                                       category='education'
                                       handleTracker={this.props.handleTracker}
                                       disable={this.props.disable}
                />
            </div>
        );
    }
}
