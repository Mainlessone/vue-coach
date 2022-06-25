import mutations from './mutations';
import getters from './getters';
import actions from './actions';

export default {
  namespaced: true,
  mutations,
  getters,
  actions,
  state() {
    return {
      userIsCoach: false,
      lastFetch: null,
      coaches: []
    }
  }
}