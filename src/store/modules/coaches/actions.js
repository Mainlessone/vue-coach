export default {
  registerCoach(context, data) {
    const coachData = { 
      id: context.rootGetters.userId,
      ...data
    };

    console.log('coachData', coachData)

    context.commit('registerCoach', coachData);
  }
};