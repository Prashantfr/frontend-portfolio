import React, { useState } from 'react';
import './App.css';
import Button from './components/Button';

//import Card from './components/Card';

function App() {
  const [count, setCount] = useState(0);

  function handleClick(){
    setCount(count+1);
  }

  return (
      <div>
        <Button onClick={handleClick}
        text="Click me">
        <h1>{count}</h1>
        </Button>
      {/* <Card name="Prashant Tiwari"> 
        <h1>ENGINEERING STUDENT</h1>
        <h1>Trying to be a heavy coder</h1>
        <h1>Will complete the mern stack development soon</h1>  
       </Card>
       <Card>
        Hello ji kaise ho saare
       </Card>*/}
    </div>
  );
}

export default App
