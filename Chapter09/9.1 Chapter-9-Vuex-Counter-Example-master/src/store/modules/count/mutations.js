import * as types from './mutation-types';

export default {
  [types.INCREMENT](state, amount) {
    state.count += amount;
  },
  [types.DECREMENT](state, amount) {
    state.count -= amount;
  },
  [types.RESET](state) {
    state.count = 0;
  },
};
