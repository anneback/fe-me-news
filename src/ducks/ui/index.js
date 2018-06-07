import PropTypes from 'prop-types';

// NAMESPACE definition
export const ns = 'ui-duck';

//ROOT for ui-duck substate, state is state which it is used
const root = state => state[ns];

export const shape = {
  itemsToShow: PropTypes.number.isRequired,
  isDarkTheme: PropTypes.bool.isRequired
};

const defaultState = {
  itemsToShow: 10,
  isDarkTheme: false
};

export const selectors = {
  root,
  itemsToShow: state => root(state).itemsToShow,
  isDarkTheme: state => root(state).isDarkTheme
};

// action types
export const types = {
  updateItemsToShow: `${ns} / UPDATE_ITEMS_TO_SHOW`,
  toggleTheme: `${ns} / TOGGLE_THEME`
};

// ACTIONS
export const updateItemsToShow = value => ({
  type: types.updateItemsToShow,
  payload: value
});

export const toggleTheme = () => ({
  type: types.toggleTheme
});

export const actions = {
  updateItemsToShow,
  toggleTheme
};

// REDUCER
export const rawReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.updateItemsToShow:
      return { ...state, itemsToShow: action.payload };
    case types.toggleTheme:
      return { ...state, isDarkTheme: !state.isDarkTheme };
    default:
      state;
  }
};

export const reducer = {
  [ns]: rawReducer
};
