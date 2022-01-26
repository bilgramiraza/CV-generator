import React, { Component } from 'react';

export default class InputCarouselSelector extends Component {
    handleChange=(e)=>{
        this.props.handleTracker(this.props.category,parseInt(e.target.value))
    }
    incrementTracker=(e)=>{
        e.preventDefault();
        const changeValue = this.props.currentIndex+1;
        if(changeValue<this.props.totalItems)
            this.props.handleTracker(this.props.category, changeValue);
    }
    decrementTracker=(e)=>{
        e.preventDefault();
        const changeValue = this.props.currentIndex-1;
        if(changeValue>=0)
            this.props.handleTracker(this.props.category, changeValue);
    }
  render() {
      const inputIndicators = [...Array(this.props.totalItems)].map((div,i)=>{
                                
                                return (<input type={'radio'} 
                                    name={this.props.category}
                                    value={i}
                                    checked={this.props.currentIndex===i}
                                    onChange={this.handleChange}
                                    key={i}
                                />);});
    return (
        <form className='text-center'>
            <fieldset disabled={this.props.disable?'disabled':''}>
                <button onClick={this.decrementTracker}>
                    Previous
                </button>
                {inputIndicators}
                <button onClick={this.incrementTracker}>
                    Next
                </button>
            </fieldset>
        </form>
    );
  }
}
