import React from 'react';
import InputCarouselSelector from './components/InputCarouselSelector';
import InputGroup from './components/InputGroup';

export default function InputExperience(props) {
  const handleSubmit = (event) => {
    const form = document.querySelector('.experience.needs-validation');
    form.classList.add('was-validated');
    if (form.checkValidity()) {
      props.updateStatus(true);
      event.target.classList.remove('btn-primary')
      event.target.classList.add('btn-success');
    }
  };
  const handleAdd = (e) => {
    e.preventDefault();
    const form = document.querySelector('.experience.needs-validation');
    if (form.checkValidity())
      props.addExperience();
    else
      form.classList.add('was-validated');
  };
  return (
    <div>
      <form className='experience needs-validation' noValidate='novalidate'>
        <fieldset disabled={props.disable ? 'disabled' : ''}>
          <div className="input-group">
            <InputGroup inputGroupLabel='Company Name'
              inputGroupType='text'
              inputGroupName='companyName'
              inputGroupPlaceHolder='Example Industries'
              inputGroupValue={props.data.companyName}
              handleChange={props.handleChange}
              required={true}
            />
          </div>
          <div className="input-group">
            <InputGroup inputGroupLabel='Title'
              inputGroupType='text'
              inputGroupName='role'
              inputGroupPlaceHolder='Assistant to the General Manager'
              inputGroupValue={props.data.role}
              handleChange={props.handleChange}
              required={true}
            />
          </div>
          <div className="input-group">
            <InputGroup inputGroupLabel='Details'
              inputGroupType='textarea'
              inputGroupName='details'
              inputGroupPlaceHolder='Enter Details here...'
              inputGroupValue={props.data.details}
              handleChange={props.handleChange}
              required={true}
            />
          </div>
          <div className="input-group">
            <InputGroup inputGroupLabel='From'
              inputGroupType='date'
              inputGroupName='from'
              pattern='\d{1,2}/\d{1,2}/\d{4}'
              inputGroupValue={props.data.from}
              handleChange={props.handleChange}
              required={true}
            />
            <InputGroup inputGroupLabel='To'
              inputGroupType='date'
              inputGroupName='to'
              pattern='\d{1,2}/\d{1,2}/\d{4}'
              inputGroupValue={props.data.to}
              handleChange={props.handleChange}
              required={true}
            />
          </div>
          <div className="my-2 d-flex justify-content-between">
            <button className='my-auto btn btn-success'
              onClick={handleAdd}>
              Add Experience
            </button>
            <InputCarouselSelector currentIndex={props.currentItemIndex}
              totalItems={props.totalItems}
              category='experience'
              handleTracker={props.handleTracker}
            />
            <button type='button'
              className='my-auto btn btn-danger'
              onClick={props.removeExperience}>
              Remove Experience
            </button>
          </div>
        </fieldset>
      </form>
      <div className="my-2 d-flex justify-content-center">
        <button type='button'
          className='btn btn-primary'
          onClick={handleSubmit}>
          Submit Experience
        </button>
      </div>
    </div>
  );
}
