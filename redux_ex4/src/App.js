
// hard task, 
// code time 9h 31m
// active code time: 7h 44m



// // auskommentiertes funktioniert als erster Schritt, zusammen mit index.js auskommentiertes

// // import {useState} from 'react' // for the hooks
// // import './App.css';

// // function App() {
// //   // writing the hook
// //   const [task, setTask]  = useState("")

// //   function handleInput(event) {
// //     setTask(event.target.value) 
// //   }

// // function handleAddTask(event) {

// // }

// //   return (
// //     <div className="App">
// //       <h1>Tasks</h1>
// //       <h2>{task}</h2>
// //      <input onChange={handleInput}/>

// //      <button onClick={handleAddTask}>Add Task</button>
// //     </div>
// //   );
// // }
// // // value={inputValue}
// // export default App;


// ///////////2. without redux //////////////////////////////////////////////////7

// // import {useState} from 'react' // for the hooks
// // import './App.css';

// // function App() {
// //   // writing the hooks
// //   const [task, setTask]  = useState([])  // useState() initial string
// //   //const [inputValue, setInput] = useState(task);
// //   let inputValue = ""

// //   function handleInput(event) {
// //     inputValue = event.target.value 
// //   }

// // function handleAddTask(event) {
// //   setTask([...task, inputValue])  // setTask("something")  // its a hook: ...task, inputValue: storing each time the input (adding)
// //   console.log(task); // get task number to delete it
// //   // setInput("")
// // }

// // function deleteTask(index) {
// //   console.log(index);
// //   setTask(task.filter((element, i) => i !== index))  // returns a new array, display all other which are not like i -> to "delete" if user click delete button
// // }

// //   return (
// //     // value of the hook in h2
// //     <div className="App">
// //       <h1>Tasks</h1>
// //       {task.map((element, indexTo) => (
// //         <div key={indexTo}>
// //           <p>{element}</p><button onClick={() => deleteTask(indexTo)}>Delete</button>  
// //         </div>
// //       ))}
// //       <h2>Number of Tasks: {task.length}</h2> 
// //      <input onChange={handleInput} />
// //      <button onClick={handleAddTask}>Add Task</button>
// //     </div>
// //   );
// // }
// // // in line 65: () => klammern with arrow function invokes it immediately, we need that here, so it is not waiting for a click
// // // line 64:  uniqe number key
// // //value={inputValue} // later, cuz it is not working yet
// // // in the div, in the {}, we can put js code 
// // export default App;



// //////////////////////with redux and separated to component files//////////////////


// import { useState } from 'react' // for the hooks
import './App.css';
import { connect } from 'react-redux'
// import React from 'react';
import NewInput from './Input'
import Task from './Task'

function App(props) {
  // writing the hooks
  // const [task, setTask] = useState("")  // useState() initial string
  //const [inputValue, setInput] = useState(task);
  // let inputValue = ""

  // function handleInput(event) {
  //   // inputValue = event.target.value 
  //   props.dispatch({ type: "ADD_TASK", string: event.target.value })
  // }

  // // goes to input.js
  // function handleAddTask() {
  //   // setTask([...task, inputValue])  // setTask("something")  // its a hook: ...task, inputValue: storing each time the input (adding)
  //   // console.log(task); // get task number to delete it
  //   // setInput("")
  //   props.dispatch({ type: "ADD_TASKS" })
  // }

  // // goes to task
  // function deleteTask(index) {
  //   console.log(index);
  //   // setTask(task.filter((element, i) => i !== index))  // returns a new array, display all other which are not like i -> to "delete" if user click delete button
  //   props.dispatch({ type: "DELETE_TASK", taskNumber: index })
  // }

  return (
    // value of the hook in h2   // props usw line 122   ->  goes to task.js
    <div className="App">
      <h1>Tasks</h1>

      {/* {props.tasks.map((element, indexTo) => (
        <div key={indexTo}>
          <p>{element}</p><button onClick={() => deleteTask(indexTo)}>Delete</button>
        </div>
      ))} */}
      <Task />
      {props.tasks.length === 0 ? <p>Do something</p> : <p>Number of Tasks : {props.tasks.length}</p>}
      <NewInput />

      {/* <h2>Number of Tasks: {props.tasks.length}</h2> */}
      {/* <input />
      <button onClick={handleAddTask}>Add Task</button> */}
    </div>
  );
}
// in line 65: () => klammern with arrow function invokes it immediately, we need that here, so it is not waiting for a click
// line 64:  uniqe number key
//value={inputValue} // later, cuz it is not working yet
// in the div, in the {}, we can put js code 

// // also in input.js
function mapStateToProps(state) {
  return {
    tasks: state.tasks,
    inputValue: state.inputValue
  }
}

export default connect(mapStateToProps)(App);

















////sandeeps//////////

// import {useState} from "react"
// import './App.css';
// import {connect} from  "react-redux";
// function App(props) {
// const [task, setTask] = useState("");
// // const [inputValue, setInput] = useState(task);
// // let inputValue = "";
// function handleInput(event){
// // inputValue = event.target.value
// setTask(event.target.value)
// }
// function handleAddTask(){
//   //setTask([...task, inputValue])
//   //console.log(task);
//  props.dispatch({type: "ADD_TASKS", tasking: task})
// }
// function deleteTask(index){
// console.log(index);
// // setTask(task.filter((element, i) => i !== index))
// props.dispatch({type: "DELETE_TASKS", tasking12: index})
// }
//   return (
//     <div className="App">
//         <h1>Tasks</h1>
//         {props.tasks.map((element, index) => (
//           <div key={index}>
//           <h3>{element}</h3><button onClick={() => deleteTask(index)}>Delete</button>
//           </div>
//         ))}
//         <h2>Number of Tasks: {props.tasks.length}</h2>
//            <input onChange={handleInput}/> <button onClick={handleAddTask}>Add Task</button>
//     </div>
//   );
// }
// function mapStateToProps (state) {
// return {
//   tasks: state.tasks
// }
// }
// export default connect (mapStateToProps)(App);