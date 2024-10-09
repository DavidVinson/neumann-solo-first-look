import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_PET" actions
function* fetchPet() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
    const response = yield axios.get('/api/pets', config);
    yield put({ type: 'SET_PETS', payload: response.data });
  } catch (error) {
    console.log('Pet get request failed', error);
  }
}

function* petSaga() {
  yield takeLatest('FETCH_PET', fetchPet);
}

export default petSaga;
