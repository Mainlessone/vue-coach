import { DATABASE_URL, handleHttpError } from "@/core/http.controller";

export default {
  async registerCoach(context, data) {
    const userId = context.rootGetters.userId;
    const coachData = { ...data };

    const url = `${DATABASE_URL}/coaches/${userId}.json`;

    const response = await fetch(url, { method: 'PUT', body: JSON.stringify(coachData) });

    handleHttpError(response);

    context.commit('registerCoach', { ...coachData, id: userId });
  },

  async loadCoaches(context) {
    const url = `${DATABASE_URL}/coaches.json`;

    const response = await fetch(url);
    handleHttpError(response);

    const responseData = await response.json();

    const coaches = [];

    for(const key in responseData) {
      const coach = {
        id: key,
        ...responseData[key]
      };

      coaches.push(coach)
    }

    context.commit('setCoaches', coaches);
  }
};