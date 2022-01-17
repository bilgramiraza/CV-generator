import React, { Component } from 'react'

export default class InputExperience extends Component {
    constructor(props){
        super(props);
        this.state={
            current:{
                companyName:'',
                title:'',
                location:'',
                from:'',
                to:'',
            },
            allExperience:[],
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
    addExperience(e){
        e.preventDefault();
        const experience={
            companyName:this.state.current.companyName,
            title:this.state.current.title,
            location:this.state.current.location,
            duration:{
                from:this.state.current.from,
                to:this.state.current.to,
            },
        };
        this.setState({
            current:{
                companyName:'',
                title:'',
                location:'',
                from:'',
                to:'',
            },
            allExperience:[...this.state.allExperience, experience],
        });
    }
    submitInfo(e){
        e.preventDefault();
        this.props.getInfo(this.state.allExperience);
        this.setState({
            current:{
                companyName:'',
                title:'',
                location:'',
                from:'',
                to:'',
            },
            allExperience:[],
        });
    }
    render() {
        return (
            <div className='container'>
                <h3>Experience Info</h3>
                <form onSubmit={this.addExperience.bind(this)}>
                    <div className="input-group">
                        <span className="input-group-text">Company Name: </span>
                        <input type="text"
                               className="form-control"
                               aria-label="Company Name"
                               value={this.state.current.companyName}
                               onChange={e=>this.getData('companyName',e.target.value)}/>
                    </div>
                    <div className="input-group">
                        <span className="input-group-text">Job Title: </span>
                        <input type="text"
                               className="form-control"
                               aria-label="Job Title"
                               value={this.state.current.title}
                               onChange={e=>this.getData('title',e.target.value)}/>
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
                    <button>Add Experience</button>
                </form>
                <button onClick={this.submitInfo.bind(this)}>Submit Experience Info</button>
            </div>
        )
    }
}