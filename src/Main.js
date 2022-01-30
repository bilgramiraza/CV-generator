import React, { Component } from 'react'
import Display from './Display';
import InputForm from './InputForm';

export default class Main extends Component {
    constructor(){
        super();
        this.state = {
            display:false,
            personal:{
                firstName:'',
                lastName:'',
                email:'',
                location:'',
                mobileNo:'',
            },
            education:{
                tracker:0,
                history:[{
                    instituteName:'',
                    qual:'',
                    location:'',
                    from:'',
                    to:'',
                }],
            },
            experience:{
                tracker:0,
                history:[{
                    companyName:'',
                    role:'',
                    location:'',
                    from:'',
                    to:'',
                }],
            },
        };
    }
    getData(category,name,value){
        switch (category) {
            case "personal":
                this.setState(prevState=>({
                    ...prevState,
                    [category]:{
                        ...prevState[category],
                        [name]:value,
                    },
                }));
                break;
        
            default:
                const target = this.state[category].history;
                target[this.state[category].tracker]={
                    ...target[this.state[category].tracker],
                    [name]:value,
                };
                this.setState(prevState=>({
                    ...prevState,
                    [category]:{
                        ...prevState[category],
                        history:[...target],
                    }
                }));
                break;
        }
    }
    handleTracker(category, value){
        this.setState((prevState)=>({
            ...prevState,
            [category]:{
                ...prevState[category],
                tracker:value,
            }
        }));
    }
    addHistory(category){
        const target = this.state[category].history;
        if(target.length>20)  return;
        let historyData;
        switch (category) {
            case 'education':
                historyData={
                    instituteName:'',
                    qual:'',
                    location:'',
                    from:'',
                    to:'',
                };
                break;
        
            default:
                historyData={
                    companyName:'',
                    role:'',
                    location:'',
                    from:'',
                    to:'',
                };
                break;
        }
        target.splice(this.state[category].tracker+1,0,historyData);

        this.setState((prevState)=>({
            ...prevState,
            [category]:{
                tracker:prevState[category].tracker+1,
                history:[...target],
            }
        }));
    }
    removeHistory(category){
        const target = this.state[category].history;

        let newTracker=this.state[category].tracker;

        target.splice(newTracker,1);
        
        if(newTracker>=target.length)    newTracker=target.length-1;
        
        if(!target.length){
            let historyData;
            switch (category) {
                case 'education':
                    historyData={
                        instituteName:'',
                        qual:'',
                        location:'',
                        from:'',
                        to:'',
                    };
                    break;
            
                default:
                    historyData={
                        companyName:'',
                        role:'',
                        location:'',
                        from:'',
                        to:'',
                    };
                    break;
            }
            this.setState(prevState=>({
                ...prevState,
                [category]:{
                    tracker:0,
                    history:[historyData],
                }
            }));
        }
        else{
            this.setState(prevState=>({
                ...prevState,
                [category]:{
                    tracker:newTracker,
                    history:[...target],
                }
            }));
        }
    }
    toggleDisplay = () =>{
        if(!this.dataPresent()){
            return;
        }
        this.setState(prevState=>({
            display:!prevState.display,
        }));
    }
    dataPresent=()=>{
        if(this.state.personal.firstName!=='' && 
           this.state.education.history[0].instituteName!=='')
           return true;
        else
            return false;
    }
    render() {
        return (
            <main className='container'>
                {
                    this.state.display ?
                    <Display data={this.state}/>
                    :<InputForm getData={this.getData.bind(this)} 
                                handleTracker={this.handleTracker.bind(this)}
                                addHistory={this.addHistory.bind(this)}
                                removeHistory={this.removeHistory.bind(this)}
                                data={this.state}/>
                }
                <div className='text-center'>
                    <button onClick={this.toggleDisplay}>
                        {this.state.display?'Edit Details':'Generate CV'}
                    </button>
                </div>
            </main>
        )
    }
}


