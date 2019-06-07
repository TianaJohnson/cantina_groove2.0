import { combineReducers } from 'redux';

// This needs to be updated 

 const emptyProject = {
    
    client_id: '',
    builder_id: '',
    fitter_id: '',
    status_id: '',
    brand: '',
    activation_date: '',
    date_due: '',
	user_id:'',
     };


const projectReducer = (state = emptyProject, action) => {
console.log('project reducer');
switch (action.type) {
case 'CLEAR_PROJECT':
  return emptyProject;
case 'SET_PROJECT':
if(action.payload && action.payload !== '' && action.payload.project_name) {
  console.log('action.paylod:', action.payload)
  return action.payload;
}else {
  return state;
}

case 'SET_PROJECT_PROPERTY':
  const propertyToChange = action.payload;
  return {
    ...state,
    // key is 'project_name'
    // value is "Ride the lightning"
    // e.g. state.project_name = "Ride the lightning"
    [propertyToChange.key]: propertyToChange.value
  }
default:
console.log('state:', state)
  return state;
}
};

export default combineReducers({
    projectReducer,

})