import React, { Component } from 'react'

export default class InputGroup extends Component {
    render() {
        const {inputGroupLabel, inputGroupType, inputGroupName, inputGroupValue, handleChange, required} =this.props;
        return (
            <>
                <span className="input-group-text">{inputGroupLabel}</span>
                <input type={inputGroupType}
                    className='form-control'
                    aria-label={inputGroupLabel}
                    name={inputGroupName}
                    value={inputGroupValue}
                    onChange={handleChange}
                    required={required?'required':''}/>
            </>
        )
    }
}
