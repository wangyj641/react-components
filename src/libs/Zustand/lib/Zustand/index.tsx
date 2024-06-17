import { useSyncExternalStore } from "react";

const createStore = (createState: any) => {
  let state: any;
  const listeners = new Set();

  const setState = (partial: any, replace: boolean) => {
    const nextState = typeof partial === 'function' ? partial(state) : partial

    if (!Object.is(nextState, state)) {
      const previousState = state;

      if (!replace) {
        state = (typeof nextState !== 'object' || nextState === null)
          ? nextState
          : Object.assign({}, state, nextState);
      } else {
        state = nextState;
      }
      listeners.forEach((listener: any) => listener(state, previousState));
    }
  }

  const getState = () => state;

  const subscribe = (listener: any) => {
    listeners.add(listener)
    return () => listeners.delete(listener)
  }

  const destroy = () => {
    listeners.clear()
  }

  const api = { setState, getState, subscribe, destroy }

  state = createState(setState, getState, api)

  return api
}

function useStore(api: any, selector: any) {
  function getState() {
    return selector(api.getState());
  }

  return useSyncExternalStore(api.subscribe, getState)
}

export const create = (createState: any) => {
  const api = createStore(createState)

  const useBoundStore = (selector: any) => useStore(api, selector)

  Object.assign(useBoundStore, api);

  return useBoundStore
}