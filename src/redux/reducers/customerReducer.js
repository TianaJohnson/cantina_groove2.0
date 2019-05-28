import { combineReducers } from 'redux';


const emptyCustomer = {
            full_name: '',
            pro_nouns: '',
            email: '',
            phone_number: '',
            cust_notes: '',
            date_created: new Date(),           
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








  const customerFocusReducer = (state = [], action) => {
    console.log('CF reducer');
      switch (action.type) {
        case 'SET_FOCUS':
        console.log('action.paylod:', action.payload)
          return action.payload;
      
        default:
        console.log('state:', state)
          return state;
      }
    };

  // user will be on the redux state at:
  // state.user
  export default combineReducers({
    customerReducer,
    customerFocusReducer,
  });
  export {customerReducer};