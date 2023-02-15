import './App.css';
import { useEffect, useState } from 'react';

const Header = (props) =>{
  let greeting = props.greeting;
  

  return(
    <header><h1 className= 'title'>{greeting}</h1></header>
  );
}

const CurrentTime = () =>{

 const [time, setTime] = useState(new Date);
 const [ampm, setAmpm] = useState("");
 const [date, theDate] = useState(new Date);
 

 
 
 useEffect(() =>{

  const now = setInterval(()=>{
    setTime(new Date);
    if(time.getHours() >= 12){
      setAmpm("PM");
    }
    else{
      setAmpm("AM");
    }
  }, 1000);
  return () => clearInterval(now);

 }, []
 );

useEffect (() => {
  const date = setInterval(() =>{
    theDate(new Date);
  }, 1000);
});

 return(
<div>
  <h1>{time.getHours()>12?time.getHours()-12:time.getHours()} : {time.getMinutes()} {ampm} </h1>
  <h1> {date.toLocaleDateString()} </h1>
  </div>
 )

}

function App() {
  return (
    <div className="App">

      <Header greeting= "Current Time: "/>
    
      <CurrentTime />

    </div>
  );
}

export default App;
