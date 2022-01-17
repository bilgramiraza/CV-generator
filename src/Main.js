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
            education:[],
            experience:[],
        };
    }
    getData(category,name,value){
        this.setState(prevState=>({
            ...prevState,
            [category]:{
                ...prevState[category],
                [name]:value,
            },
        }));
    }
    render() {
        return (
            <main>
                <InputForm getData={this.getData.bind(this)} data={this.state}/>
                <Display data={this.state}/>
            </main>
        )
    }
}
