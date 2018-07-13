import React, { Component } from "react";
import "./App.css";
import Nav from "./Components/Nav";
import NoteList from "./Components/NoteList";
import NoteForm from "./Components/NoteForm";
import {connect} from "react-redux";

class App extends Component {
  showNoteForm = () =>{
    if(this.props.isEdit){
      return <NoteForm getData={(item)=>this.addData(item)}/>
    }
  }
  render() {
    
    return (
      <div>
        <Nav />
        <div className="container">
          <div className="row">
            <NoteList />
            {this.showNoteForm()}
          </div>
        </div>
      </div>
    );
  }
}



const mapStateToProps = (state, ownProps) => {
  return {
    isEdit: state.isEdit
  }
}

export default connect(mapStateToProps)(App);

