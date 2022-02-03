import React, { Component } from 'react'

export default class InputGroup extends Component {
    render() {
        const {inputGroupLabel, inputGroupType, inputGroupName, 
               inputGroupValue, pattern, handleChange, required} =this.props;
        switch (inputGroupType) {
            case 'textarea':
                return (
                    <>
                        <span className="input-group-text">{inputGroupLabel}</span>
                        <textarea
                            className='form-control'
                            aria-label={inputGroupLabel}
                            name={inputGroupName}
                            value={inputGroupValue}
                            pattern={pattern?pattern:null}
                            onChange={handleChange}
                            required={required?'required':null}/>
                    </>
                );
        
            default:
                return (
                    <>
                        <span className="input-group-text">{inputGroupLabel}</span>
                        <input type={inputGroupType}
                            className='form-control'
                            aria-label={inputGroupLabel}
                            name={inputGroupName}
                            value={inputGroupValue}
                            pattern={pattern?pattern:null}
                            onChange={handleChange}
                            required={required?'required':null}/>
                    </>
                );
        }
    }
}
