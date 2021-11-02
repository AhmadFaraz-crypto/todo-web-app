import {all, call, put, takeLatest} from 'redux-saga/effects';

import {
  login,
} from '../../services/http_client';
import {
  LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from './constants';

function* handleLoginRequest(action) {
  try {
    const {body} = action;
    const data = yield call(login, body);

    if (data.data.token) {
      yield put({
        type: LOGIN_SUCCESS,
        authToken: data.data.token,
      });
    } else if (data.data.message === 'LOGIN.USER_NOT_FOUND') {
      yield put({
        type: LOGIN_ERROR,
        msg: "The email doesn't exist"
      });
    } else {
      yield put({
        type: LOGIN_ERROR,
        msg: 'Unknown Error'
      });
    }
  } catch (e) {
      console.log(e)
  }
}

export default all([
  takeLatest(LOGIN_REQUEST, handleLoginRequest),
]);
