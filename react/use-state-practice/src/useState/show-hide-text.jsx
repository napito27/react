import React from 'react';

// import '../useState/useStateStyles.css';

function ShowHideText() {
  const [toggle, setToggle] = React.useState(false);

  const textDisplay = toggle ? 'show-text' : 'hide-text';
    
  return (
    <div className='container text-display-container'>
      <button 
      className='text-display-btn'
      onClick={() => setToggle(!toggle)}> 
        Show / Hide 
      </button>
      <br/>
      <p className={`${textDisplay}`}>
          "Simplicity is the ultimate sophistication."
      </p>
    </div>
  );
}

export default ShowHideText;