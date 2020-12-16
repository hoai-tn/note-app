import _ from "lodash";
import { ADD_TASK, UPDATE_TASK, DELETE_TASK } from "../actions/tasks";
const uniqueID = () => Math.floor(Math.random() * Date.now());
const state = {
  tasks: [
    {
      id: uniqueID(),
      text: "i will learn english at 7h"
    },
    {
      id: uniqueID(),
      text: "i'm doing a site for my cr"
    },
    {
      id: uniqueID(),
      text: "i hope, in future, I'm data citeuon"
    }
  ]
};
const getters = {
  getTasks: (state) => state.tasks
};
const actions = {
  [ADD_TASK]: ({ commit }) => {
    commit(ADD_TASK, {
      id: uniqueID(),
      text: "I will make some u happy"
    });
  },
  [UPDATE_TASK]: ({ commit }) => {
    commit(UPDATE_TASK);
  },
  [DELETE_TASK]: ({ commit }) => {
    commit(DELETE_TASK);
  }
};
const mutations = {
  [ADD_TASK]: (state, payload) => {
    state.tasks = _.union([payload], state.tasks);
    // state.tasks = payload;
  },
  [UPDATE_TASK]: (state) => {
    console.log(state);
  },
  [DELETE_TASK]: (state) => {
    console.log(state);
  }
};
export default {
  state,
  actions,
  mutations,
  getters
};
