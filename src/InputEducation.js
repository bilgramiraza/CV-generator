import React, { Component } from 'react';
import InputCarouselSelector from './components/InputCarouselSelector';
import InputGroup from './components/InputGroup';

export default class InputEducation extends Component {
    handleSubmit=()=>{
        const form = document.querySelector('.education.needs-validation');
        form.classList.add('was-validated');
        if(form.checkValidity())   
            this.props.updateStatus(true);
    }
    handleAdd=(e)=>{
        e.preventDefault();
        const form = document.querySelector('.education.needs-validation');
        if(form.checkValidity())   
            this.props.addEducation();
        else
            form.classList.add('was-validated');
    }
    render() {
        return (
            <div>
                <form className='education needs-validation' noValidate='novalidate'>
                    <fieldset disabled={this.props.disable?'disabled':''}>
                        <div className="input-group">
                            <InputGroup inputGroupLabel='Institute Name'
                                        inputGroupType='text'
                                        inputGroupName='instituteName'
                                        inputGroupPlaceHolder='Example University'
                                        inputGroupValue={this.props.data.instituteName}
                                        handleChange={this.props.handleChange}
                                        required={true}
                                        />
                        </div>
                        <div className="input-group">
                            <InputGroup inputGroupLabel='Qualification'
                                        inputGroupType='text'
                                        inputGroupName='qual'
                                        inputGroupPlaceHolder='Diploma in Examples'
                                        inputGroupValue={this.props.data.qual}
                                        handleChange={this.props.handleChange}
                                        required={true}
                                        />
                        </div>
                        <div className="input-group">
                            <InputGroup inputGroupLabel='Address'
                                        inputGroupType='text'
                                        inputGroupName='location'
                                        inputGroupPlaceHolder='City, Country'
                                        inputGroupValue={this.props.data.location}
                                        handleChange={this.props.handleChange}
                                        required={true}
                                        />
                        </div>
                        <div className="input-group">
                            <InputGroup inputGroupLabel='From'
                                        inputGroupType='date'
                                        inputGroupName='from'
                                        pattern='\d{1,2}/\d{1,2}/\d{4}'
                                        inputGroupValue={this.props.data.from}
                                        handleChange={this.props.handleChange}
                                        required={true}
                                        />
                            <InputGroup inputGroupLabel='To'
                                        inputGroupType='date'
                                        inputGroupName='to'
                                        pattern='\d{1,2}/\d{1,2}/\d{4}'
                                        inputGroupValue={this.props.data.to}
                                        handleChange={this.props.handleChange}
                                        required={true}
                                        />
                        </div>
                        <button onClick={this.handleAdd}>Add Education</button>
                        <button type='button' onClick={this.props.removeEducation}>Remove Education</button>
                    </fieldset>
                </form>
                <InputCarouselSelector currentIndex={this.props.currentItemIndex}
                                       totalItems={this.props.totalItems}
                                       category='education'
                                       handleTracker={this.props.handleTracker}
                />
                <button type='button' onClick={this.handleSubmit}>Submit Education</button>
            </div>
        );
    }
}
