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
      coaches: [
        {
          id: 'c1',
          firstName: 'Maximilian',
          lastName: 'Schwarzmüller',
          areas: ['frontEnd', 'backEnd', 'career'],
          description:
            "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
          rate: 30
        },
        {
          id: 'c2',
          firstName: 'Julie',
          lastName: 'Jones',
          areas: ['frontEnd', 'career'],
          description:
            'I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
          rate: 30
        }
      ]
    }
  }
}