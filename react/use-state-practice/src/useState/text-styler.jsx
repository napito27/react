import React from 'react';

// import '../useState/useStateStyles.css';

function TextStyler() {
  //set the inital font size to 20px
  const [fontSize, setFontSize] = React.useState(20);

  // function to increase font size
  const increaseFontSize = () => {
    setFontSize(fontSize + 3);
  }

  //function to decrease font size
  const decreaseFontSize = () => {
    setFontSize(fontSize - 3);
  }

  return (
    <div className='container sizing-container'>
      <div className='sizing-btn'>
        <button className='text-display-btn' onClick={increaseFontSize}>Bigger</button>
        <button className='text-display-btn' onClick={decreaseFontSize}>Smaller</button>
      </div>
      <p style={{fontSize: `${fontSize}px`}}> Change The Text Size </p>
    </div>
  );
}

export default TextStyler;