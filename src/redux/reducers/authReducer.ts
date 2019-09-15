import * as types from '../types';

const INITIAL_STATE = {
  loading: false,
  submiting: false,
  user: {},
  request_status: {
    message_result: null,
    result: false
  } as any
};

export default function(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case types.AUTH_ERROR: {
      return { ...state };
    }
    case types.AUTH_LOADING: {
      return { ...state };
    }
    case types.AUTH_SIGNIN: {
      return { ...state };
    }
    case types.AUTH_LOGOUT: {
      return { ...INITIAL_STATE };
    }
    default:
      return state;
  }
}
