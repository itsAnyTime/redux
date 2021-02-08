import React from "react";
import "./App.css";
import {connect} from "react-redux"
import Xmari from "./Componentx"
import Ymari from "./Componenty"
class App extends React.Component {
  incrementX = () => {
     this.props.dispatch({ type: "INCREMENTX"})
  }
  incrementY = () => {
    this.props.dispatch({ type: "INCREMENTY"})
  }
    render() {
        return (
            <div>
               <Xmari count={this.props.count2} increment={this.incrementY}/>
                <Ymari count={this.props.count1} increment={this.incrementX}/>
            </div>
        );
    }
}
function mapStateToProps(state) {
  return {
    count1: state.count1,
    count2: state.count2
  }
}
export default connect(mapStateToProps)(App);