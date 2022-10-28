/*
reducer is defined here and is exproted.
This reducer should handle all the actions.
Example of how to use reducer is as follows:

const reducer = (state = [],action = {}) => {

  switch(action.type){

    case 'actionType1': 
      return changedState1;
    
    case 'actionType2':
      return changedState2;

    default: 
      return state;
    }
  
export default reducer;
*/

/*
reducer is defined here and is exproted.
This reducer should handle all the actions.
Example of how to use reducer is as follows:*/

import { combineReducers } from "redux";
import { v4 as uuid } from "uuid";
// intial useState
const initialState = {
  //array of object
  items: [],
  item: { owner: "", model: "", description: "", resolved: false },
  editMode: false,
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case "repairAdded":
      action.payload.id = uuid();
      action.payload.resolved = false;
      return {
        ...state,
        items: state.items.concat([action.payload]),
        item: { owner: "", model: "", description: " " },
        editmode: false,
      };
    case "repairRemoved":
      return {
        ...state,
        items: state.items.filter((item) => item.id != action.payload.id),
      };

    case "editTask":
      return {
        ...state,
        item: action.payload,
        editMode: true,
      };

    case "repairResolved":
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload.id) {
            item.resolved = !item.resolved;
          }
          return item;
        }),
      };
    case "repairUpdated":
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload.id) {
            item.owner = action.payload.owner;
            item.model = action.payload.model;
            item.description = action.payload.description;
          }
          return item;
        }),
      };
    default:
      return state;
  }
};
const reducer = combineReducers({
  bicycle: listReducer,
});
export default reducer;
