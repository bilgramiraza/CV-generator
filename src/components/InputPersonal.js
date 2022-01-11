import React, { Component } from 'react'

export default class InputPersonal extends Component {
    constructor(props){
        super(props);
        this.state={
            firstName:'',
            lastName:'',
            email:'',
            location:'',
            phoneNo:'',
        };
    }
    getData=(element,value)=>{
        this.setState({
            [element]:value,
        });
    };
    submitInfo(e){
        e.preventDefault();
        const personalInfo={
            fullName:`${this.state.firstName} ${this.state.lastName}`,
            email:this.state.email,
            location:this.state.location,
            phoneNo:this.state.phoneNo,
        };
        this.props.getInfo(personalInfo);
        this.setState({
            firstName:'',
            lastName:'',
            email:'',
            location:'',
            phoneNo:'',
        });
    }
    render() {
        return (
            <div className='container'>
                <h3>Personal Info</h3>
                <form onSubmit={this.submitInfo.bind(this)}>
                    <div className="input-group">
                        <span className="input-group-text">First Name</span>
                        <input type="text"
                               className="form-control"
                               aria-label="First name"
                               value={this.state.firstName}
                               onChange={e=>this.getData('firstName',e.target.value)}/>
                        <span className="input-group-text">Last Name</span>
                        <input type="text"
                               className="form-control"
                               aria-label="Last name"
                               value={this.state.lastName}
                               onChange={e=>this.getData('lastName',e.target.value)}/>
                    </div>
                    <div className="input-group">
                        <span className="input-group-text">Email</span>
                        <input type="email"
                               className="form-control"
                               aria-label="Email"
                               value={this.state.email}
                               onChange={e=>this.getData('email',e.target.value)}/>
                    </div>
                    <div className="input-group">
                        <span className="input-group-text">Address</span>
                        <input type="text"
                               className="form-control"
                               aria-label="Address"
                               value={this.state.location}
                               onChange={e=>this.getData('location',e.target.value)}/>
                    </div>
                    <div className="input-group">
                        <span className="input-group-text">Mobile Number</span>
                        <input type="tel"
                               className="form-control"
                               aria-label="PhoneNumber"
                               value={this.state.phoneNo}
                               onChange={e=>this.getData('phoneNo',e.target.value)}/>
                    </div>
                    <button>Submit Personal Info</button>
                </form>
            </div>
        );
    }
}
