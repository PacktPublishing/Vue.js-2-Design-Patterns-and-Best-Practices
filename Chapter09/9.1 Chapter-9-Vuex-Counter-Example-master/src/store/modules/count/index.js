import actions from './actions';
import getters from './getters';
import mutations from './mutations';

export const countStore = {
  state: {
    count: 0,
  },
  actions,
  getters,
  mutations,
};

export * from './mutation-types';
