// import {uniqBy} from 'lodash';

import {
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_ERROR,
} from './constants';
// import {updateLoginAfterCharacterSelect} from './actions';
// import {CallToActionSharp} from '@material-ui/icons';

const initialState = {
  authToken: '',
  isRequesting: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
        return {...state, isRequesting: true}
    case LOGIN_SUCCESS:
      return {...state, authToken: action.authToken, isRequesting: false};
    case LOGIN_ERROR:
        return {...state, isRequesting: false}

    default:
      return state;
  }
};
