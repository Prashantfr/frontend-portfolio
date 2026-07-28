import { useState, useCallback } from 'react'
import './App.css'
import ChildComponent from './components/ChildComponent';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count+1);
  }, [count]);

  return (
    <div>
      <div>
        Count: {count}
      </div>
      <br/>
      <div>
        <button onClick={handleClick}>
          Increment
        </button>
      </div>
      <br/><br/>

      <div>
        <ChildComponent
        buttonName="Click me"
        handelClick={handleClick}
        /> 
      </div>
    </div>
  )
}

export default App
