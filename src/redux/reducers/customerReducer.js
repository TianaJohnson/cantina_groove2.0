import { combineReducers } from 'redux';

const customerReducer = (state = [], action) => {
  console.log('Cust reducer');
    switch (action.type) {
      case 'SET_CUSTOMER':
      console.log('action.paylod:', action.payload)
        return action.payload;
    
      default:
      console.log('state:', state)
        return state;
    }
  };

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