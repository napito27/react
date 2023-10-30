import React from 'react';

// import '../useState/useStateStyles.css';

function ClearField() {
  const [iptText, setIptText] = React.useState('');

  const handleIptChange = (e) => {
    setIptText(e.target.value)
  }

  const handleClick = (e) => {
    e.preventDefault()

    setIptText("");
  }
  
  return (
    <form className='container input-clear-container'> 
      <div>
        <input 
          placeholder='Enter text'
          value={iptText}
          onChange={handleIptChange} 
          className='ipt-clear'
        />
      </div>
      <div>
        <button onClick={handleClick} className='text-display-btn'>
          Clear
        </button>
      </div>
    </form>
  );
}

export default ClearField;