import React, { Component } from 'react'
import InputGroup from './components/InputGroup'

export default class InputPersonal extends Component {
    handleSubmit=(e)=>{
        e.preventDefault();
        const form = document.querySelector('.personal.needs-validation');
        form.classList.add('was-validated');
        if(form.checkValidity())   
            this.props.updateStatus(true);
    }
    render() {
        return (
            <form className='personal needs-validation' noValidate='novalidate'>
                <fieldset disabled={this.props.disable?'disabled':''}>
                    <div className="input-group">
                        <InputGroup inputGroupLabel='First Name'
                                    inputGroupType='text'
                                    inputGroupName='firstName'
                                    inputGroupPlaceHolder='John'
                                    inputGroupValue={this.props.data.firstName}
                                    handleChange={this.props.handleChange}
                                    required={true}
                        />
                        <InputGroup inputGroupLabel='Last Name'
                                    inputGroupType='text'
                                    inputGroupName='lastName'
                                    inputGroupPlaceHolder='Smith'
                                    inputGroupValue={this.props.data.lastName}
                                    handleChange={this.props.handleChange}
                                    required={true}
                        />
                    </div>    
                    <div className="input-group">
                        <InputGroup inputGroupLabel='Email'
                                    inputGroupType='email'
                                    inputGroupName='email'
                                    inputGroupPlaceHolder='name@example.com'
                                    inputGroupValue={this.props.data.email}
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
                        <InputGroup inputGroupLabel='Mobile Number'
                                    inputGroupType='tel'
                                    inputGroupName='mobileNo'
                                    pattern='[0-9]+'
                                    inputGroupPlaceHolder='1234567890'
                                    inputGroupValue={this.props.data.mobileNo}
                                    handleChange={this.props.handleChange}
                                    required={true}
                        />
                    </div>
                    <div className="input-group">
                        <InputGroup inputGroupLabel='Website'
                                    inputGroupType='text'
                                    inputGroupName='site'
                                    inputGroupPlaceHolder='example.com'
                                    inputGroupValue={this.props.data.site}
                                    handleChange={this.props.handleChange}
                                    required={false}
                        />
                    </div>
                </fieldset>
                <button onClick={this.handleSubmit}>Submit Personal</button>
            </form>
        )
    }
}