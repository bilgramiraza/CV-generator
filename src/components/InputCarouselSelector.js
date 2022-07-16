import React from 'react';

export default function InputCarouselSelector(props) {
  const handleChange = (e) => {
    props.handleTracker(props.category, parseInt(e.target.value))
  };
  const incrementTracker = (e) => {
    e.preventDefault();
    const changeValue = props.currentIndex + 1;
    if (changeValue < props.totalItems)
      props.handleTracker(props.category, changeValue);
  };
  const decrementTracker = (e) => {
    e.preventDefault();
    const changeValue = props.currentIndex - 1;
    if (changeValue >= 0)
      props.handleTracker(props.category, changeValue);
  };
  const inputIndicators = [...Array(props.totalItems)].map((div, i) => {
    return (
      <li className={`page-item ${i === props.currentIndex ? 'active' : ''}`}
        key={i}>
        <button className='page-link'
          onClick={handleChange}
          value={i}>
          {i + 1}
        </button>
      </li>);
  });
  return (
    <nav>
      <ul className="my-auto pagination justify-content-center">
        <li className="page-item">
          <button className="page-link" onClick={decrementTracker}>Previous</button>
        </li>
        {inputIndicators}
        <li className="page-item">
          <button className="page-link" onClick={incrementTracker}>Next</button>
        </li>
      </ul>
    </nav>
  );
}