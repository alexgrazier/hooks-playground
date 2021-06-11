import { useState } from 'react';
import './App.css';

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>Add to count</button>
//       <p>The current count is {count}</p>
//     </div>
//   );
// }

// export default App;

// set state of active button to true
// create state of text that is shown (or prop?)
// create toggle of button click to change activation

function App() {
  const [activeButton, setActiveButton] = useState(true);
  const buttonText = activeButton ? 'I am an active button. Click me to inactivate me' : 'I am an inactive button. Click me to activate me'
  // use a function for this b/c it uses closure => internal function retains acccess to variables in external scope
  const toggleButtonActivation = () => {
    setActiveButton(!activeButton);
  };
  console.log('activeButton :', activeButton);

  return (
    <div>
      <button onClick={toggleButtonActivation}>{buttonText}</button>
      <p>The current active state of the button is {activeButton.toString()}</p>
    </div>
  );
}

export default App;
