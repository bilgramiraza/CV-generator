import React, {useState} from 'react'
import Display from './Display';
import InputForm from './InputForm';

export default function Main() {
  const [display, setDisplay] = useState(false);
  const [cvData, setCvData] = useState({
    personal: {
      firstName: '',
      lastName: '',
      email: '',
      location: '',
      mobileNo: '',
      site: '',
    },
    education: {
      tracker: 0,
      history: [{
        instituteName: '',
        qual: '',
        location: '',
        from: '',
        to: '',
      }],
    },
    experience: {
      tracker: 0,
      history: [{
        companyName: '',
        role: '',
        details: '',
        from: '',
        to: '',
      }],
    },
    formStatus: {
      personal: false,
      education: false,
      experience: false,
    },
  });
  const getData = (category, name, value) => {console.log(cvData);
    switch (category) {
      case "personal":
        setCvData(prevState => ({
          ...prevState,
          [category]: {
            ...prevState[category],
            [name]: value,
          },
        }));
        break;

      default:
        const target = cvData[category].history;
        target[cvData[category].tracker] = {
          ...target[cvData[category].tracker],
          [name]: value,
        };
        setCvData(prevState => ({
          ...prevState,
          [category]: {
            ...prevState[category],
            history: [...target],
          }
        }));
        break;
    }
  };
  const handleTracker = (category, value) => {
    setCvData((prevState) => ({
      ...prevState,
      [category]: {
        ...prevState[category],
        tracker: value,
      }
    }));
  }
  const addHistory = (category) => {
    const target = cvData[category].history;
    if (target.length > 20) return;
    let historyData;
    switch (category) {
      case 'education':
        historyData = {
          instituteName: '',
          qual: '',
          location: '',
          from: '',
          to: '',
        };
        break;

      default:
        historyData = {
          companyName: '',
          role: '',
          details: '',
          from: '',
          to: '',
        };
        break;
    }
    target.splice(cvData[category].tracker + 1, 0, historyData);

    setCvData((prevState) => ({
      ...prevState,
      [category]: {
        tracker: prevState[category].tracker + 1,
        history: [...target],
      }
    }));
  };
  const removeHistory = (category) => {
    const target = cvData[category].history;

    let newTracker = cvData[category].tracker;

    target.splice(newTracker, 1);

    if (newTracker >= target.length) newTracker = target.length - 1;

    if (!target.length) {
      let historyData;
      switch (category) {
        case 'education':
          historyData = {
            instituteName: '',
            qual: '',
            location: '',
            from: '',
            to: '',
          };
          break;

        default:
          historyData = {
            companyName: '',
            role: '',
            details: '',
            from: '',
            to: '',
          };
          break;
      }
      setCvData(prevState => ({
        ...prevState,
        [category]: {
          tracker: 0,
          history: [historyData],
        }
      }));
    }
    else {
      setCvData(prevState => ({
        ...prevState,
        [category]: {
          tracker: newTracker,
          history: [...target],
        }
      }));
    }
  };
  const toggleDisplay = () => {
    if (!dataPresent()) {
      return;
    }
    setDisplay(!display);
  }
  const dataPresent = () => {
    if (cvData.formStatus.personal && cvData.formStatus.education)
      return true;
    else
      return false;
  };
  const updateStatus = (category, status) => {
    setCvData(prevState => (
      {
        ...prevState,
        formStatus: {
          ...prevState.formStatus,
          [category]: status
        }
      }
    ));
  };
  return (
    <main className='container'>
      {
        display ?
          <Display data={cvData} /> :
          <InputForm getData={getData.bind(this)}
            handleTracker={handleTracker.bind(this)}
            addHistory={addHistory.bind(this)}
            removeHistory={removeHistory.bind(this)}
            data={cvData}
            updateStatus={updateStatus.bind(this)} />
      }
      <div className='text-center'>
        <button className='btn btn-primary'
          onClick={toggleDisplay}
          disabled={dataPresent() ? '' : 'disable'}>
          {display ? 'Edit Details' : 'Generate CV'}
        </button>
      </div>
    </main>
  );
}
