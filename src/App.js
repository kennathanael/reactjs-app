// import logo from './logo.svg';
// import './App.css';
import Navbar from './components/navbar';
import { useEffect, useState } from 'react';


function App() {
  const [count, setCount] = useState(0);

  useEffect(()=>{
    if(count > 0){
      console.log("Nice")
    } else{
      console.log("Jelek")
    }
  },[])

  return (   
    <><Navbar/>
    <p>Count = {count}</p>

    <button onClick={()=>{setCount(count+1)}}>
      tambah
    </button>
    </>
  );
}

export default App;
