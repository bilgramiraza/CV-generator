import React from 'react'

export default function InputGroup(props) {
  const { inputGroupLabel, inputGroupType, inputGroupName, inputGroupPlaceHolder,
    inputGroupValue, pattern, handleChange, required } = props;
  switch (inputGroupType) {
    case 'textarea':
      return (
        <>
          <span className="input-group-text">{inputGroupLabel}</span>
          <textarea
            className='form-control'
            aria-label={inputGroupLabel}
            name={inputGroupName}
            placeholder={inputGroupPlaceHolder ? inputGroupPlaceHolder : null}
            value={inputGroupValue}
            pattern={pattern ? pattern : null}
            onChange={handleChange}
            required={required ? 'required' : null} />
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
            placeholder={inputGroupPlaceHolder ? inputGroupPlaceHolder : null}
            value={inputGroupValue}
            pattern={pattern ? pattern : null}
            onChange={handleChange}
            required={required ? 'required' : null} />
        </>
      );
  }
}
