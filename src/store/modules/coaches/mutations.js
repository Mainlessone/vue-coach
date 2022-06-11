export default {
  registerCoach(state, payload) {
    state.coaches.push(payload);
    console.log('state.coaches', state.coaches)
  }
};