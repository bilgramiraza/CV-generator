import React, { Component } from 'react'
import InputGroup from './components/InputGroup'

export default class InputPersonal extends Component {
    handleSubmit(e){
        e.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <fieldset disabled={this.props.disable?'disabled':''}>
                    <div className="input-group">
                        <InputGroup inputGroupLabel='First Name'
                                    inputGroupType='text'
                                    inputGroupName='firstName'
                                    inputGroupValue={this.props.data.firstName}
                                    handleChange={this.props.handleChange}
                        />
                        <InputGroup inputGroupLabel='Last Name'
                                    inputGroupType='text'
                                    inputGroupName='lastName'
                                    inputGroupValue={this.props.data.lastName}
                                    handleChange={this.props.handleChange}
                        />
                    </div>    
                    <div className="input-group">
                        <InputGroup inputGroupLabel='Email'
                                    inputGroupType='email'
                                    inputGroupName='email'
                                    inputGroupValue={this.props.data.email}
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
                        <InputGroup inputGroupLabel='Mobile Number'
                                    inputGroupType='tel'
                                    inputGroupName='mobileNo'
                                    inputGroupValue={this.props.data.mobileNo}
                                    handleChange={this.props.handleChange}
                        />
                    </div>
                </fieldset>
            </form>
        )
    }
}