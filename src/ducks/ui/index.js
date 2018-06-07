import PropTypes from 'prop-types';

// NAMESPACE definition
export const ns = 'ui';

const defaultState = {
  itemsToShow: 10,
  isDarkTheme: false
};

//ROOT for ui-duck substate, state is state which it is used
const root = state => (state ? state[ns] : defaultState);

export const shape = {
  itemsToShow: PropTypes.number.isRequired,
  isDarkTheme: PropTypes.bool.isRequired
};

export const selectors = {
  root,
  itemsToShow: state => root(state).itemsToShow,
  isDarkTheme: state => root(state).isDarkTheme
};

// action types
const types = {
  updateItemsToShow: 'UPDATE_ITEMS_TO_SHOW',
  toggleTheme: 'TOGGLE_THEME'
};

// ACTIONS
const updateItemsToShow = value => ({
  type: types.updateItemsToShow,
  payload: value
});

const toggleTheme = () => ({
  type: types.toggleTheme
});

export const actions = {
  updateItemsToShow,
  toggleTheme
};

// REDUCER
const rawReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.updateItemsToShow:
      return { ...state, itemsToShow: action.payload };
    case types.toggleTheme:
      return { ...state, isDarkTheme: !state.isDarkTheme };
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
  selectors,
  types,
  actions,
  reducer
};
