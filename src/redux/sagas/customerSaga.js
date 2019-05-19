import axios from 'axios';
import { takeLatest, put } from 'redux-saga/effects';

//post saga = send info to server
//Create
function* addCustomer(action) {
    try { 
      yield axios.post('/customer', action.payload);
      yield alert('Customer added.')
      yield put({ type: 'FETCH_CUSTOMER' });
    } catch (error) {
      console.log('Error with add customer:', error);
    }
  }

  //fetch saga = works with customerReducer
  //read
  function* fetchCustomer(action) {
    try{
    const responseFromServer = yield axios.get('/customer');
    yield put({ type: 'SET_CUSTOMER', payload: responseFromServer.data});
    console.log('response from server is:',responseFromServer.data)
  } catch (error) {
    console.log('Unabale to fetch customers from server', error);
    alert('Unabale to fetch customers from server', error);
  }
}
//Read
function* fetchFocusCustomer(action) {
  try{
  const responseFromServer = yield axios.get(`/customer/${action.payload}`);
  yield put({type: 'SET_FOCUS', payload: responseFromServer.data});
  console.log('response from server is:',responseFromServer.data)
} catch (error) {
  console.log('Unabale to fetch customers from server', error);
  alert('Unabale to fetch customers from server', error);
}
}
//Update Customer
function* updateCustomer(action) {
  console.log('In saga Put', action.payload)
  try {
    yield axios.put(`/customer/update/${action.payload.id}`, action.payload);
    yield alert('Customer Info Updated.')
    yield put({ type: 'FETCH_CUSTOMER' });
  }catch(error){
    console.log('Unable to update customer info', error);
    alert('Unable to update customer information', error);
  }
}
// archive customer no delete
// acts as a Delete
function* archiveCustomer(action) {
  console.log('In saga archive Put', action.payload.id)
  try {
    yield axios.put(`/customer/archive/${action.payload.id}`, action.payload);
    yield alert('Customer Deleted.')
    yield put({ type: 'FETCH_CUSTOMER' });
  }catch(error){
    console.log('Unable to delete customer info', error);
    alert('Unable to delete customer information', error);
  }
}
  

  function* customerSaga() {
    yield takeLatest('ADD_CUSTOMER', addCustomer);
    yield takeLatest('FETCH_CUSTOMER', fetchCustomer);
    yield takeLatest('FETCH_FOCUS_CUSTOMER', fetchFocusCustomer);
    yield takeLatest('UPDATE_CUSTOMER', updateCustomer);
    yield takeLatest('ARCHIVE_CUSTOMER', archiveCustomer);
   
  }
  
  export default customerSaga;