import createReducer from './createReducers';

/**
 * Inject an asynchronously loaded reducer
 */
export function injectAsyncReducer(storeParam) {
  const store = storeParam;
  return (asyncReducers) => {
    store.asyncReducers = Object.assign(store.asyncReducers, asyncReducers);
    store.replaceReducer(createReducer(store.asyncReducers));
  };
}

/**
 * Remove Injected reducer
 */
export function removeAsyncReducer(storeParam) {
  const store = storeParam;
  return (reducers) => {
    Object.keys(reducers)
      .forEach(name => {
        delete store.asyncReducers[name];
      });
    store.replaceReducer(createReducer(store.asyncReducers));
  };
}

/**
 * Inject an asynchronously loaded saga
 */
export function injectAsyncSagas(store) {
  return (sagas) => {
    if (!sagas) return;
    if (Array.isArray(sagas)) {
      sagas.map(saga => store.runSaga(saga));
    } else {
      store.runSaga(sagas);
    }
  };
}

/**
 * Helper for creating injectors
 */
export function modifyReducer(store) {
  return {
    injectReducer: injectAsyncReducer(store),
    injectSagas: injectAsyncSagas(store),
    removeReducer: removeAsyncReducer(store),
  };
}
