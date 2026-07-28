import { useState } from 'react'
import './App.css'
import LogoutBtn from './Components/LogoutBtn';
import LoginBtn from './Components/LoginBtn';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

//early return
  /*if(!isLoggedIn) {
    return (
      <LoginBtn />
    )
  }*/

//logical operator
  /*return(
    <div>
      <h1>Welcome to my world</h1>
      <div>
        {isLoggedIn && <LogoutBtn />}
      </div>
    </div>
  )*/




//ternary operator
  /*return (
    <div>
      {isLoggedIn ? <LogoutBtn /> : <LoginBtn/>};
    </div>
  )*/


//using if-else
  if(isLoggedIn){
    return (
      <LogoutBtn />
    )
  }

  else {
    return (
      <LoginBtn />
    )
  }

}

export default App
