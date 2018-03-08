import * as types from './mutation-types';

export default {
  [types.INCREMENT]({ commit }, amount) {
    commit(types.INCREMENT, amount);
  },
  [types.DECREMENT]({ commit }, amount) {
    commit(types.DECREMENT, amount);
  },
  [types.RESET]({ commit }) {
    commit(types.RESET);
  },
};
