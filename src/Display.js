import React from 'react'
import formatData from './components/formatData';


export default function Display(props){
  const { personalInfo, educationInfo, experienceInfo } = formatData(props.data);
  const educationDivs = educationInfo.history.map((item, index) => (
    <div key={index}>
      <div className='my-auto row'>
        <div className='col text-start'>
          <h4>{`${item.location}`}</h4>
        </div>
        <div className='col-6 text-center'>
          <h2><b>{`${item.instituteName}`}</b></h2>
        </div>
        <div className='col text-end'>
          <h4>{`${item.from}`} - {`${item.to}`}</h4>
        </div>
      </div>
      <div className='row'>
        <p>{`${item.qual}`}</p>
      </div>
    </div>
  ));
  const experienceDivs = experienceInfo.history.map((item, index) => (
    <div key={index}>
      <div className='row'>
        <div className='col text-start'>
          <h2><b>{`${item.companyName}`}</b></h2>
        </div>
        <div className='col-6 text-end'>
          <h3>{`${item.from}`} - {`${item.to}`}</h3>
        </div>
      </div>
      <div className='row'>
        <h3>{`${item.role}`}</h3>
      </div>
      <div className='row'>
        <h5 style={{ whiteSpace: 'pre-wrap' }}>
          <ul>
            <li>{`${item.details}`}</li>
          </ul>
        </h5>
      </div>
    </div>
  ));
  return (
    <div className='container border border-3 m-2'>
      <div className='my-auto row'>
        <div className='col text-start'>
          <h4>{`${personalInfo.location}`}</h4>
          <h4>{`${personalInfo.mobileNo}`}</h4>
        </div>
        <div className='col-6 text-center'>
          <h2><b>{`${personalInfo.firstName}`}</b></h2>
          <h2><b>{`${personalInfo.lastName}`}</b></h2>
        </div>
        <div className='col text-end'>
          <h4>{`${personalInfo.email}`}</h4>
          <h4>{`${personalInfo.site}`}</h4>
        </div>
      </div>
      <h2>Education</h2>
      <hr />
      <div className='container'>
        {educationDivs}
      </div>
      <h2>Experience</h2>
      <hr />
      <div className='container'>
        {experienceDivs}
      </div>
    </div>
  );
}
