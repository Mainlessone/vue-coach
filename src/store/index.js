import { createStore } from "vuex";

import coachModules from './modules/coaches/index';

const store = createStore({
  modules: {
    coaches: coachModules
  }
});

export default store;