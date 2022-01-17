import React, { Component } from 'react'

export default class InputEducation extends Component {
    constructor(props){
        super(props);
        this.state={
            current:{
                instituteName:'',
                qual:'',
                location:'',
                from:'',
                to:'',
            },
            allEducation:[],
        };
    }
    getData(element,value){
        this.setState((prevState)=>({
            current:{
                ...prevState.current,
                [element]:value,
            }
        }));
    }
    addEducation(e){
        e.preventDefault();
        const education={
            instituteName:this.state.current.instituteName,
            qualification:this.state.current.qual,
            location:this.state.current.location,
            duration:{
                from:this.state.current.from,
                to:this.state.current.to,
            },
        };
        this.setState({
            current:{
                instituteName:'',
                qual:'',
                location:'',
                from:'',
                to:'',
            },
            allEducation:[...this.state.allEducation, education],
        });
    }
    submitInfo(e){
        e.preventDefault();
        this.props.getInfo(this.state.allEducation);
        this.setState({
            current:{
            instituteName:'',
            location:'',
            qual:'',
            from:'',
            to:'',
        },
        allEducation:[],
        });
    }
    render() {
        return (
            <div className='container'>
                <h3>Education Info</h3>
                <form onSubmit={this.addEducation.bind(this)}>
                    <div className="input-group">
                        <span className="input-group-text">Institute Name: </span>
                        <input type="text"
                               className="form-control"
                               aria-label="institute Name"
                               value={this.state.current.instituteName}
                               onChange={e=>this.getData('instituteName',e.target.value)}/>
                    </div>
                    <div className="input-group">
                        <span className="input-group-text">Qualification: </span>
                        <input type="text"
                               className="form-control"
                               aria-label="Qualification"
                               value={this.state.current.qual}
                               onChange={e=>this.getData('qual',e.target.value)}/>
                    </div>
                    <div className="input-group">
                        <span className="input-group-text">Address</span>
                        <input type="text"
                               className="form-control"
                               aria-label="Address"
                               value={this.state.current.location}
                               onChange={e=>this.getData('location',e.target.value)}/>
                    </div>
                    <div className="input-group">
                        <h4>Duration</h4>
                        <span className="input-group-text">From</span>
                        <input type="date"
                               className="form-control"
                               aria-label="Duration From"
                               value={this.state.current.from}
                               onChange={e=>this.getData('from',e.target.value)}/>
                        <span className="input-group-text">To</span>
                        <input type="date"
                               className="form-control"
                               aria-label="Duration to"
                               value={this.state.current.to}
                               onChange={e=>this.getData('to',e.target.value)}/>
                    </div>
                    <button>Add Education</button>
                </form>
                <button onClick={this.submitInfo.bind(this)}>Submit Education Info</button>
            </div>
        )
    }
}
