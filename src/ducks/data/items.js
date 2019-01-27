export const ns = 'items';

export const shape = {};

export const defaultState = {};

const root = state => (state ? state[ns] : defaultState);

export const selectors = {
  item: (state, id) => (root(state)[id] || {}).item,
  isLoading: (state, id) => (root(state)[id] || {}).isLoading,
  error: (state, id) => (root(state)[id] || {}).error
};

const types = {
  fetchItem: 'REQUEST_ITEM'
};

const fetchItem = id => ({
  type: types.fetchItem,
  fetch: { url: `/v0/item/${id}.json` },
  params: { id }
});

const actions = {
  fetchItem
};

const rawReducer = (state = {}, action) => {
  switch (action.type) {
    case `${types.fetchItem} / start`:
      return {
        ...state,
        [action.params.id]: { item: {}, isLoading: true, error: null }
      };
    case `${types.fetchItem} / success`:
      return {
        ...state,
        [action.params.id]: {
          item: action.payload,
          isLoading: false,
          error: null
        }
      };
    case `${types.fetchItem} / fail`:
      return {
        ...state,
        [action.params.id]: {
          item: {},
          isLoading: false,
          error: action.payload
        }
      };
    default:
      return state;
  }
};

export const reducer = {
  [ns]: rawReducer
};

export default {
  ns,
  shape,
  defaultState,
  selectors,
  types,
  actions,
  rawReducer,
  reducer
};
