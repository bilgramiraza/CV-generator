import React, { Component } from 'react'

export default class DisplayPersonal extends Component {
    render() {
        const personalInfo=this.props.data;
        return (
            <div>
                <h4>Name: {personalInfo.fullName}</h4>
                <h4>Email: {personalInfo.email}</h4>
                <h4>Phone No: {personalInfo.phoneNo}</h4>
                <h4>Location: {personalInfo.location}</h4>
            </div>
        )
    }
}
