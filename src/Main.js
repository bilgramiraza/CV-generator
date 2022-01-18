import React, { Component } from 'react'
import Display from './Display';
import InputForm from './InputForm';

export default class Main extends Component {
    constructor(){
        super();
        this.state = {
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
            experience:[],
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
           (this.state[category].tracker+step) < 0)
            return;

        this.setState((prevState)=>({
            ...prevState,
            [category]:{
                ...prevState[category],
                tracker:prevState[category].tracker+step,
            }
        }));
    }
    render() {
        return (
            <main>
                <InputForm getData={this.getData.bind(this)} 
                handleTracker={this.handleTracker.bind(this)} 
                data={this.state}/>
                <Display data={this.state}/>
            </main>
        )
    }
}


// this.setState((prevState)=>({
//     ...prevState,
//     [category]:{
//         tracker:prevState[category].tracker+step,
//         history:[...prevState[category].history, {
//             instituteName:'',
//             qual:'',
//             location:'',
//             from:'',
//             to:'',
//         }],
//     }
// }));