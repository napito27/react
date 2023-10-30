import React from 'react';

// import '../useState/useStateStyles.css';

function TextReverser() {
  // input text initial state set to an empty string
  const [iptText, setIptText] = React.useState('');

  //reversed text initial state set to an empty string
  const [reversedText, setReversedText] = React.useState('');

  // funtion to get change events on input
  const handleIptChange = (e) => {
    const text = e.target.value;
    setIptText(text);

    //this command line  will split() the text enter by the user, reverse() the order of the elememts in the array, join() back the characters into a silgle string
  setReversedText(text.split('').reverse().join(''));
  }

  // function to clear the input and the text being shown 
  const handleClick = (e) => {
    e.preventDefault()

    setIptText('');
    setReversedText('');
  }

  return (
    <div className='container reversed-text-container'>
      <div className='inner-container'>
        <div>
          <input className='ipt-clear' type='text' placeholder='Enter text' value={iptText} onChange={handleIptChange}/>
        </div>
        <button onClick={handleClick} className='text-display-btn'>Clear</button>
      </div>
      <div>
        <h3> ReversedText : [ <em> {reversedText} </em>]</h3>
      </div>
    </div>
  );
}

export default TextReverser;