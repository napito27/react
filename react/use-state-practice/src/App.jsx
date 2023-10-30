import './App.css';
import ShowHideText from "./useState/show-hide-text";
import ClearField from "./useState/clear-field";
import TextReverser from "./useState/text-reverser";
import TextStyler from "./useState/text-styler";

function App() {
  return (
    <div className='app'>
      <ShowHideText />
      <ClearField />
      <TextReverser />
      <TextStyler />
    </div>
  );
}

export default App;
