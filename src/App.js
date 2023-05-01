import './App.css'
import React from "react";
import  ReactDOM  from 'react-dom';
import { useState } from 'react';
import Modal from './modal';

import ErrorBoundary from './ErrorBoundary';

const data=[{id:1,name:'Rnajan',age:30},
            {id:2,name:'Sample',age:40},
          {id:3,name:'XTY',age:35},
        {id:4,name:'Navi',age:37}]

const EmpList=()=> data.map((nn)=><li>{nn.name}</li>)
const EmpDetails=()=>data.map((nn)=><li>{nn.id},{nn.name},{nn.age}</li>)

const flt_data=data.filter(nn=>nn.age>=35);

const FltCompo=()=> flt_data.map((nn)=><li>{nn.name}</li>)

function MyFunc(props){
  return(
    <div>
      <h1>This is a test {props.name}</h1>
      <ul>
        {props.data.map((nn)=><li>{nn.name}</li>)}
      </ul>
    </div>
  );
}

//create a modal
function MyModal() {
  //to create a portal, use the createPortal function:
  return ReactDOM.createPortal(
    <div className='modal'>
      <button>Close Modal</button>
      <div className="modal-content">
        
        <p>This is part of the modal</p></div>
      
    </div>,
    document.getElementById("portal")
  );
}

function EventCompo(){
  return(
    <button onClick={()=>{alert("This is example");
     console.log("This is ecample");}}>Click Me</button>
  );
}

/* function ToggleSwitch() {
  const [checked, setChecked] = useState(true);

  const handleChange = val => {
    setChecked(val)
  }

  return (
    <div className="app" style={{textAlign: "center"}}>
      <h4>Toggle switch in React</h4>
      <Switch
        checked={checked}
        onChange={handleChange}
      />
    </div>
  );
} */

function ToggleVal(){
  const [checked, setChecked] = useState(true);
  var para=null;
  
  function adjustelem(){
    if(checked){
      para = document.createElement("p");
      para.innerText = "This is a paragraph";
      para.id="new_elem"
      document.body.appendChild(para);
    }else{
      const el=document.getElementById("new_elem")
      if(el==null){
        console.log("Element is not there");
      }else{
        el.remove()
      }
    }
  }
  return (
   <button onClick={()=>{setChecked(!checked);adjustelem();}}>Toggle Val</button>
  );

}

function CountCompo(){
  const [count,setCount]=useState(0)

  return(
    <>
    <button onClick={()=>setCount(count+1)}>Count{count}</button>
    <h2>Count is {count}</h2>
    </>
    
  )
}
/* 
 const [show,setShow]=useState(false)
{/* <div className="App">
      <h2>Click to open the modal</h2>
      <button onClick={()=>setShow((s)=>!s)}>Open Modal</button>
      <Modal show={show} closeModal={()=>setShow(false)} content={<}></Modal>
    </div> */

const CrashableComponent = (props) => {
  return <span>{props.iDontExist.prop}</span>;
};
function App() {
 
    return(
      <div>
        <ErrorBoundary>
        <CrashableComponent/>
        </ErrorBoundary>
        
      </div>
    );
}

export default App;
