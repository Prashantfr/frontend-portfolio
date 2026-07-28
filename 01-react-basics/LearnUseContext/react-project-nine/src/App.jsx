import { createContext, useState } from 'react'
import './App.css'
import ChildA from './components/ChildA';

//step1: create Context
//const UserContext = createContext();
//step2: wrap all the child inside a provider
//step3: pass value
//step4: consumer k andar jaake consume karlo

const ThemeContext =  createContext();

function App() {
  //const [user, setUser ] = useState({name:"Love"});
  const [user, setTheme] = useState('light');

  return (

    <ThemeContext.Provider value={{theme,setTheme}}>
      <div id='container' 
      style={{backgroundColor:theme==='light'?"beige":"black"}}> 
      <ChildA /> 
      </div>
    </ThemeContext.Provider>

    //<>
    //<div>
    // <UserContext.Provider value={user}>
    //  <ChildA />
    //</UserContext.Provider>  
    //</div>
    //</>
  )
}

export default App
//export {UserContext}
export {ThemeContext}
