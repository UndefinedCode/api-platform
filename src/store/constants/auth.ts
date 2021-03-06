import keyMirror from 'fbjs/lib/keyMirror';

const ActionTypes = keyMirror({
  AUTHENTICATE: 'AUTHENTICATE',
  AUTHENTICATE_SUCCESS: 'AUTHENTICATE_SUCCESS',
  AUTHENTICATE_ERROR: 'AUTHENTICATE_ERROR',
  LOGOUT: 'LOGOUT',
  AUTHENTICATE_FAILURE: 'AUTHENTICATE_FAILURE',
  AUTHENTICATE_CHECK: 'AUTHENTICATE_CHECK',
});

export default ActionTypes;
