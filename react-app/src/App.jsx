import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

 let [counter,setCounter]=useState(15)  // hoocks : always give two value [variable,function-name]=userState(initialvalue)
 //let counter=15
 const addvalue=()=>{
    if(counter!=20){
   //counter=counter+1;
   setCounter(counter+1);
   //console.log('clicked',Date())
    }
    else{
      alert('You reach the max!');
    }
 }
 const removeValue=()=>{
  if(counter!=0){
    setCounter(counter-1);
  }
  else{
    alert('You reach the min!');
  }
  
  
 }

  return (
    <>
      
      <h1>Chai aur react </h1>
       <h2> Counter value:{counter}</h2>
       <button
        onClick={addvalue}>Add value</button> <br />
       <button
        onClick={removeValue}>Remove value </button>
    </>
  )
}

export default App
