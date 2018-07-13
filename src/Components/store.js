import {noteData} from './../firebaseconnect';

var redux = require('redux');

const noteInitialState = {
    isEdit: false,
    editItem: {},
    isAdd: false
}
const allreducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case "ADD_DATA":
            console.log("connected, data nhan vao la " + action.receive)
            noteData.push(action.receive);
            return state
        case "CHANGE_EDIT_STATUS":
            return {...state,isEdit : !state.isEdit}
        case "CHANGE_ADD_STATUS":
            return {...state,isAdd : !state.isAdd}
        case "GET_EDIT_DATA":
            return {...state,editItem:action.editObject}
        case "EDIT_DATA":
            // console.log("data edit" + JSON.stringify(action.getitem))
            noteData.child(action.getitem.id).update({
                title: action.getitem.title,
                content: action.getitem.content
            })
            return {...state,editItem:{}}
        case "GET_DELETE_DATA":
            noteData.child(action.id).remove();
            return state
        default:
            return state
    }
}
var store = redux.createStore(allreducer);
store.subscribe(function(){
    console.log(JSON.stringify(store.getState()))
})
export default store;