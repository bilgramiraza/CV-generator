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
    handleTracker(category, step){
        const categoryLength=this.state[category].history.length;

        if((this.state[category].tracker+step) >= categoryLength || 
           (this.state[category].tracker+step) < 0) return;

        this.setState((prevState)=>({
            ...prevState,
            [category]:{
                ...prevState[category],
                tracker:prevState[category].tracker+step,
            }
        }));
    }
    addHistory(category){
        this.setState((prevState)=>{
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
            return {
                ...prevState,
                [category]:{
                    tracker:prevState[category].tracker+1,
                    history:[...prevState[category].history,
                            historyData],
                }
            };
        });
    }
    removeHistory(category){
        const target = this.state[category].history;

        if(target.length <= 1)  return;

        let newTracker=this.state[category].tracker;

        if(newTracker<0)    newTracker=0;
        console.log(target[newTracker]);
        target.splice(newTracker,1);
        
        this.setState(prevState=>({
            ...prevState,
            [category]:{
                tracker:newTracker-1,
                history:[...target],
            }
        }));
    }
    toggleDisplay = () =>{
        this.setState(prevState=>({
            display:!prevState.display,
        }));
    }
    render() {
        return (
            <main>
                <InputForm getData={this.getData.bind(this)} 
                           handleTracker={this.handleTracker.bind(this)}
                           addHistory={this.addHistory.bind(this)}
                           removeHistory={this.removeHistory.bind(this)}
                           data={this.state}/>
                <button onClick={this.toggleDisplay}>Generate CV</button>
                {
                    this.state.display &&
                    <Display data={this.state}/>
                }
            </main>
        )
    }
}


