import React, { Component } from "react";
import {connect} from "react-redux";

class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      id:''
    }
  }
componentWillMount() {
  if(this.props.editData){ //edit case
    this.setState({
      title: this.props.editData.title,
      content: this.props.editData.content,
      id: this.props.editData.id
    })
  }
}
  isChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    })
  }
  addData = (title, content) => {
    //check

    if(this.state.id){ //editcase
      var editObject = {};
      editObject.id = this.state.id;
      editObject.title = this.state.title;
      editObject.content = this.state.content;
      this.props.EDIT_DATASTORE(editObject);
      this.props.CHANGE_EDIT_STATUS();
    }else{
      var item = {};
      item.title = title;
      item.content = content;
      this.props.ADD_DATASTORE(item);  
    }
  }
  showtitle = ()=>{
    if(this.props.AddStatus){
      return <h3>ADD NEW</h3>
    }else{
      return <h3>EDIT</h3>
    }
  }
  render() {
    
    return (
      <div className="col-4">
        {this.showtitle()}
        
        <form>
          <div className="form-group">
            <label>Note Title</label>
            <input
              type="text"
              className="form-control" name="title" id="title"
              aria-describedby="helpIdNoteTitle" placeholder="Note Title..." defaultValue={this.props.editData.title}
              onChange={(event) => this.isChange(event)}/>
            <small id="helpIdNoteTitle" className="form-text text-muted">
              Typing note title
            </small>
          </div>
          <div className="form-group">
            <label>Note Content</label>
            <textarea
              type="text"
              className="form-control" name="content" id="content"
               placeholder="Note Content..." defaultValue ={this.props.editData.content}
              onChange={(event) => this.isChange(event)} />
            <small id="helpIdNoteContent" className="form-text text-muted">
              Typing note content
            </small>
          </div>
          <button type="reset" onClick={() => this.addData(this.state.title, this.state.content)} className="btn btn-primary btn-block">
            Save
          </button>
          
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    editData: state.editItem,
    AddStatus: state.isAdd
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    ADD_DATASTORE: (receive) => {
      dispatch({type: "ADD_DATA", receive})
    },
    EDIT_DATASTORE: (getitem) =>{
      dispatch({type: "EDIT_DATA", getitem})
    },
    CHANGE_EDIT_STATUS: () =>{
      dispatch({type: "CHANGE_EDIT_STATUS"})
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(NoteForm)
