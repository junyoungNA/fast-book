import { createActions, handleAction, handleActions } from 'redux-actions';

interface AuthState {
  token: string | null;
  loading: boolean;
  error: Error | null;
}

const initalState: AuthState = {
  token: null,
  loading: false,
  error: null,
};

const prefix = 'my-books/auth';

export const { pending, success, fail } = createActions(
  'PENDING',
  'SUCCESS',
  'FAIL',
  {
    prefix: prefix,
  }
);

const reducer = handleActions<AuthState, string>(
  {
    PENDING: state => ({
      ...state,
      loading: true,
      error: null,
    }),
    SUCCESS: (state, action) => ({
      token: action.payload,
      loading: true,
      error: null,
    }),
    FAIL: (state, action: any) => ({
      ...state,
      loading: false,
      error: action.payload,
    }),
  },
  initalState,
  { prefix }
);

export default reducer;

//saga

export function* authSaga() {}
