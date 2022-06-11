export default {
  coaches(state) {
    return state.coaches;
  },
  isCoach(state, getters, rootState, rootGetters) {
    const coaches = getters.coaches;
    const userId = rootGetters.userId;
    return coaches.some(c => c.id === userId);
  }
};