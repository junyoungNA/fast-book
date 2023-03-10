import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './modules/reducer';
import createSagaMiddleware from 'redux-saga';

const create = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(reducer, composeWithDevTools(applyMiddleware()));

  sagaMiddleware.run(rootSaga);
  return store;
};

export default create;
