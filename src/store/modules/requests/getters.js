export default {
  requests(state) {
    return state.requests;
  },
  requestsOfLoggedCoach(state, getters, rootState, rootGetters) {
    const coachId = rootGetters.userId;
    return state.requests.filter(r => r.coachId === coachId);
  }
}