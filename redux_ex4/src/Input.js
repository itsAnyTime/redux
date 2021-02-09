import { connect } from "react-redux";
// import { useState } from "react"

function NewInput(props) {
  // const [task, setTask] = useState("");

  function handleInput(event) {
    //   // inputValue = event.target.value 
    props.dispatch({ type: "UPDATE_INPUT", string: event.target.value })
    // setTask(event.target.value)
  }

  function handleAddTask() {
    // setTask([...task, inputValue])  // setTask("something")  // its a hook: ...task, inputValue: storing each time the input (adding)
    // console.log(task); // get task number to delete it
    // setInput("")
    if (props.inputValue !== "") {
      props.dispatch({ type: "ADD_TASKS" , tasking: props.inputValue})   
    }
    console.log(props.tasks);
    // setTask("")
  }

  return (
    <div>
      <input onChange={handleInput} value={props.inputValue} /><button onClick={handleAddTask}>Add Task</button>
    </div>
  )

}

function mapStateToProps(state) {

  return {
    tasks: state.tasks, 
    inputValue: state.inputValue
  }
}

export default connect(mapStateToProps)(NewInput)