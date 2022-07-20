import React from 'react'
import InputGroup from './components/InputGroup'

export default function InputPersonal(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = document.querySelector('.personal.needs-validation');
    form.classList.add('was-validated');
    if (form.checkValidity()) {
      props.updateStatus(true);
      event.target.classList.remove('btn-primary')
      event.target.classList.add('btn-success');
    }
  };
  return (
    <form className='personal needs-validation' noValidate='novalidate'>
      <fieldset disabled={props.disable ? 'disabled' : ''}>
        <div className="input-group">
          <InputGroup inputGroupLabel='First Name'
            inputGroupType='text'
            inputGroupName='firstName'
            inputGroupPlaceHolder='John'
            inputGroupValue={props.data.firstName}
            handleChange={props.handleChange}
            required={true}
          />
          <InputGroup inputGroupLabel='Last Name'
            inputGroupType='text'
            inputGroupName='lastName'
            inputGroupPlaceHolder='Smith'
            inputGroupValue={props.data.lastName}
            handleChange={props.handleChange}
            required={true}
          />
        </div>
        <div className="input-group">
          <InputGroup inputGroupLabel='Email'
            inputGroupType='email'
            inputGroupName='email'
            inputGroupPlaceHolder='name@example.com'
            inputGroupValue={props.data.email}
            handleChange={props.handleChange}
            required={true}
          />
        </div>
        <div className="input-group">
          <InputGroup inputGroupLabel='Address'
            inputGroupType='text'
            inputGroupName='location'
            inputGroupPlaceHolder='City, Country'
            inputGroupValue={props.data.location}
            handleChange={props.handleChange}
            required={true}
          />
        </div>
        <div className="input-group">
          <InputGroup inputGroupLabel='Mobile Number'
            inputGroupType='tel'
            inputGroupName='mobileNo'
            pattern='[0-9]+'
            inputGroupPlaceHolder='1234567890'
            inputGroupValue={props.data.mobileNo}
            handleChange={props.handleChange}
            required={true}
          />
        </div>
        <div className="input-group">
          <InputGroup inputGroupLabel='Website'
            inputGroupType='text'
            inputGroupName='site'
            inputGroupPlaceHolder='example.com'
            inputGroupValue={props.data.site}
            handleChange={props.handleChange}
            required={false}
          />
        </div>
      </fieldset>
      <div className="my-2 d-flex justify-content-center">
        <button className='btn btn-primary'
          onClick={handleSubmit}>
          Submit Personal
        </button>
      </div>
    </form>
  )
}