import { combineReducers } from 'redux';


// const emptyCustomer = {
//             editing: false,
//             first_name: '',
//             last_name: '',
//             pro_nouns: '',
//             email: '',
//             phone_number: '',
//             cust_notes: '',
//             is_active: true,
//             date_activated: new Date(),           
// };

// how to create an empty customer?

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

// const customerReducer = (state = emptyCustomer, action) => {
//     console.log('project reducer');
//       switch (action.type) {
//         case 'CLEAR_CUSTOMER':
//           return emptyCustomer;
//         case 'SET_CUSTOMER':
//         if(action.payload && action.payload !== '' && action.payload.full_name) {
//           console.log('action.paylod:', action.payload)
//           return action.payload;
//         }else {
//           return state;
//         }
        
//         case 'SET_CUSTOMER_PROPERTY':
//           const customerToChange = action.payload;
//           return {
//             ...state,
//             // key is 'full_name'
//             // value is "Ridge Johnson"
//             // e.g. state.full_name = "Ridge Johnson"
//             [customerToChange.key]: customerToChange.value
//           }
//         default:
//         console.log('state:', state)
//           return state;
//       }
//     };

export default combineReducers({
    customerReducer,

})
export {customerReducer};








  // const customerFocusReducer = (state = [], action) => {
  //   console.log('CF reducer');
  //     switch (action.type) {
  //       case 'SET_FOCUS':
  //       console.log('action.paylod:', action.payload)
  //         return action.payload;
      
  //       default:
  //       console.log('state:', state)
  //         return state;
  //     }
  //   };

  // // user will be on the redux state at:
  // // state.user
  // export default combineReducers({
  //   customerReducer,
  //   customerFocusReducer,
  // });
  // export {customerReducer};