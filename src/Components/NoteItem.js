import React, { Component } from 'react';
import {connect} from 'react-redux';

class NoteItem extends Component {
    actionEdit = () =>{
        this.props.changeEditStatus();
        this.props.getEditData(this.props.note);
    }
    actionRemove = () =>{
     this.props.getDeleteData(this.props.note.id);
     alert("DELETE SUCCESSFULLY");
    }
    render() {
        return (
            <div className="card">
                <div className="card-header" role="tab" id="note1">
                    <h5 className="mb-0">
                        <a
                            data-toggle="collapse" data-parent="#noteList"
                            href={"#number" + this.props.id}
                            aria-expanded="true" aria-controls="notecontent1">
                            {this.props.title}
                        </a>
                        <div className="btn-group float-right">
                            <button className="btn btn-outline-info" onClick={()=>this.actionEdit()}>Edit</button>
                            <button className="btn btn-outline-danger" onClick={()=>this.actionRemove()}>Remove</button>
                        </div>
                    </h5>
                </div>
                <div
                    id={"number" + this.props.id} className="collapse in"
                    role="tabpanel" aria-labelledby="note1">
                    <div className="card-body">
                        {this.props.content}
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
  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      changeEditStatus: () => {
        dispatch({type:"CHANGE_EDIT_STATUS"})
      },
      getEditData: (editObject) =>{
          dispatch({type:"GET_EDIT_DATA", editObject})
      },
      getDeleteData: (id) =>{
          dispatch({type:"GET_DELETE_DATA", id})
      }
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(NoteItem)
