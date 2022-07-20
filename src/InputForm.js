import React from 'react';
import InputPersonal from './InputPersonal';
import InputEducation from './InputEducation';
import InputExperience from './InputExperience';

export default function InputForm(props) {
  const handleChange = (category, e) => {
    props.getData(category, e.target.name, e.target.value);
  };
  const { personal, education, experience } = props.data;
  return (
    <div className='container'>
      <h3>Personal Info</h3>
      <InputPersonal handleChange={(e) => handleChange('personal', e)}
        data={personal}
        updateStatus={(status) => props.updateStatus('personal', status)}
        disable={props.data.display}
      />
      <hr />
      <h3>Education Info</h3>
      <InputEducation handleChange={(e) => handleChange('education', e)}
        data={education.history[education.tracker]}
        handleTracker={props.handleTracker}
        currentItemIndex={education.tracker}
        totalItems={education.history.length}
        addEducation={() => props.addHistory('education')}
        removeEducation={() => props.removeHistory('education')}
        updateStatus={(status) => props.updateStatus('education', status)}
        disable={props.data.display}
      />
      <hr />
      <h3>Experience Info</h3>
      <InputExperience handleChange={(e) => handleChange('experience', e)}
        data={experience.history[experience.tracker]}
        handleTracker={props.handleTracker}
        currentItemIndex={experience.tracker}
        totalItems={experience.history.length}
        addExperience={() => props.addHistory('experience')}
        removeExperience={() => props.removeHistory('experience')}
        updateStatus={(status) => props.updateStatus('experience', status)}
        disable={props.data.display}
      />
    </div>
  )
}
