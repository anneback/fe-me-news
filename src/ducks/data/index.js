import { combineReducers } from 'redux';
import { mapObj, augmentSelectorWith } from '../../utils';

import { default as itemsIds } from './itemsIds';
import { default as items } from './items';

export const ns = 'data';

const root = state => state[ns];
export const selectors = {
  root
};

export const rawReducer = combineReducers({
  ...itemsIds.reducer,
  ...items.reducer
});

export const reducer = {
  [ns]: rawReducer
};

export default {
  ns,
  selectors,
  rawReducer,
  reducer,
  itemsIds: {
    ...itemsIds,
    selectors: mapObj(itemsIds.selectors, augmentSelectorWith(root))
  },
  items: {
    ...items,
    selectors: mapObj(items.selectors, augmentSelectorWith(root))
  }
};
