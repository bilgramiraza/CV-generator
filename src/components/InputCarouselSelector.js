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
                                return (
                                    <li className={`page-item ${i===this.props.currentIndex?'active':''}`}
                                        key={i}>
                                        <button className='page-link'
                                                onClick={this.handleChange}
                                                value={i}>
                                            {i}
                                        </button>
                                    </li>);
                                });
    return (
        <nav>
        <ul className="pagination pagination-sm justify-content-center">
            <li className="page-item">
                <button className="page-link" onClick={this.decrementTracker}>Previous</button>
            </li>
            {inputIndicators}
            <li className="page-item">
                <button className="page-link" onClick={this.incrementTracker}>Next</button>
            </li>
        </ul>
    </nav>
    );
  }
}