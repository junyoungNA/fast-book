import {
  createActions,
  handleAction,
  handleActions,
  Action,
} from 'redux-actions';
import { takeEvery, put, call } from 'redux-saga/effects';
import { LoginReqType } from '../../types';
import UserService from '../../services/UserService';
import TokenService from '../../services/TokenService';

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

export const { login, logout } = createActions('LOGIN', 'LOGOUT', { prefix });

function* loginSaga(action: Action<LoginReqType>) {
  try {
    yield put(pending());
    const token: string = yield call(UserService.login, action.payload);
    //localstorage
    TokenService.set(token);

    yield put(success(token));
    //push
  } catch (error: any) {
    yield put(fail(new Error(error?.response?.data?.error || 'UKNOWN_ERROR')));
  }
}

function* logoutSaga() {}

export function* authSaga() {
  yield takeEvery(`${prefix}/LOGIN`, loginSaga);
  yield takeEvery(`${prefix}/LOGOUT`, loginSaga);
}
