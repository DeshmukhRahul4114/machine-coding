const createReducer()

function createStore(reducer) {
    let state;
    let listeners = [];
  
    const getState = () => state;
  
    const dispatch = (action) => {
      state = reducer(state, action);
      listeners.forEach(listener => listener());
    };
  
    const subscribe = (listener) => {
      listeners.push(listener);
      return () => {
        listeners = listeners.filter(l => l !== listener);
      };
    };
  
    // Initialize the state by dispatching a dummy action
    dispatch({});
  
    return { getState, dispatch, subscribe };
  }