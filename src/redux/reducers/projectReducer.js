import { combineReducers } from 'redux';

// This needs to be updated 

// const emptyProject = {
//     customer_name: '',
//     project_name: '',
//     brand: '',
//     deep_custom: false,
//     project_desc: '',
//     cust_height: '',
//     cust_inseam: '',
//     cust_torso: '',
//     cust_flex: '',
//     cust_reach: '',
//     head_tube: '',
//     steerer_tube: '',
//     down_tube: '',
//     seat_tube: '',
//     bottom_bracket: '',
//     seat_stays: '',
//     chain_stays: '',
//     drop_outs: '',
//     brake_type: '',
//     wheel_size: '',
//     tire_clearance: '',
//     progress_status: '',
//     date_created: new Date(),
//     projected_due_date: '',
//     client_id: 0,
// };

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