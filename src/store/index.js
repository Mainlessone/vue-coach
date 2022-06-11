import { createStore } from "vuex";

import coachModules from './modules/coaches/index';
import requestsModules from './modules/requests/index';

const store = createStore({
  modules: {
    coaches: coachModules,
    requests: requestsModules
  },
  state() {
    return {
      userId: 'c3'
    }
  },
  getters: {
    userId(state) {
      return state.userId;
    }
  }
});

export default store;