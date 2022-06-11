import { DATABASE_URL, handleHttpError } from "@/core/http.controller";

export default {
  async contactCoach(context, payload) {
    let newRequest = {
      coachId: payload.coachId,
      email: payload.email,
      message: payload.message,
    };

    const response = await fetch(`${DATABASE_URL}/requests/${payload.coachId}.json`, { method: 'POST', body: JSON.stringify(newRequest) });
    handleHttpError(response);

    const responseData = await response.json();

    newRequest = { ...newRequest, id: responseData.name, coachId: payload.coachId };

    context.commit('addRequest', newRequest);
  },

  async getRequests(context) {
    const coachId = context.rootGetters.userId;
    const response = await fetch(`${DATABASE_URL}/requests/${coachId}.json`);
    handleHttpError(response);

    const responseData = await response.json();
    const requests = [];

    for(const key in responseData) {
      const req = {
        id: key,
        coachId,
        ...responseData[key]
      };

      requests.push(req);
    }

    context.commit('setRequests', requests);
  }
}