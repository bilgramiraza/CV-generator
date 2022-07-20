import React from 'react';
import InputCarouselSelector from './components/InputCarouselSelector';
import InputGroup from './components/InputGroup';

export default function InputEducation(props) {
  const handleSubmit = (event) => {
    const form = document.querySelector('.education.needs-validation');
    form.classList.add('was-validated');
    if (form.checkValidity()) {
      props.updateStatus(true);
      event.target.classList.remove('btn-primary')
      event.target.classList.add('btn-success');
    }
  };
  const handleAdd = (e) => {
    e.preventDefault();
    const form = document.querySelector('.education.needs-validation');
    if (form.checkValidity())
      props.addEducation();
    else
      form.classList.add('was-validated');
  };
  return (
    <div>
      <form className='education needs-validation' noValidate='novalidate'>
        <fieldset disabled={props.disable ? 'disabled' : ''}>
          <div className="input-group">
            <InputGroup inputGroupLabel='Institute Name'
              inputGroupType='text'
              inputGroupName='instituteName'
              inputGroupPlaceHolder='Example University'
              inputGroupValue={props.data.instituteName}
              handleChange={props.handleChange}
              required={true}
            />
          </div>
          <div className="input-group">
            <InputGroup inputGroupLabel='Qualification'
              inputGroupType='text'
              inputGroupName='qual'
              inputGroupPlaceHolder='Diploma in Examples'
              inputGroupValue={props.data.qual}
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
              Add Education
            </button>
            <InputCarouselSelector currentIndex={props.currentItemIndex}
              totalItems={props.totalItems}
              category='education'
              handleTracker={props.handleTracker}
            />
            <button type='button'
              className='my-auto btn btn-danger'
              onClick={props.removeEducation}>
              Remove Education
            </button>
          </div>
        </fieldset>
      </form>
      <div className="my-2 d-flex justify-content-center">
        <button type='button'
          className='btn btn-primary'
          onClick={handleSubmit}>
          Submit Education
        </button>
      </div>
    </div>
  );
}
