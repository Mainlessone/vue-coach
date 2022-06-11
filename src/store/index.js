import { createStore } from "vuex";

import coachModules from './modules/coaches/index';

const store = createStore({
  modules: {
    coaches: coachModules
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