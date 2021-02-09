import { connect } from "react-redux";

// needs a new function for splitting stuff from app.js to task.js

// component:
function Task(props) {

    function deleteTask(index) {
        console.log(index);
        // setTask(task.filter((element, i) => i !== index))  // returns a new array, display all other which are not like i -> to "delete" if user click delete button
        props.dispatch({ type: "DELETE_TASK", taskNumber: index })
    }

    return (
        <div>
            {
                props.tasks.map((element, indexTo) => (
                    <div key={indexTo}>
                        <p>{element}</p><button onClick={() => deleteTask(indexTo)}>Delete</button>
                    </div>
                ))
            }
        </div>
    )
}

function mapStateToProps(state) {

    return {
        tasks: state.tasks,
        inputValue: state.inputValue
    }
}

export default connect(mapStateToProps)(Task)