import React from 'react';
import UserCard from "./components/UserCard"; 
import prashant from "./assets/Prashant.jpg";
import travis from "./assets/Travis.jpeg";
import drake from "./assets/Drake.jpeg";
import './App.css'; 


function App() {
  return (
    <div className="container">
      <UserCard name="Prashant" desc="Prashant is a student" image={prashant} style={{"border-radius":"10px"}} />
      <UserCard name="Anubhav" desc="Travis is a popular artist" image={travis}/>
      <UserCard name="Gaurav" desc="Drake is also a popular artist" image={drake}/>
    </div>
  );
}

export default App;
