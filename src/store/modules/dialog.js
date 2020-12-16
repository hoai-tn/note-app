import {
  SHOW_DIALOG
} from "../actions/dialog";
const state = {
  dialog: false
};
const getters = {
  getDialog: state => state.dialog
};
const actions = {
  [SHOW_DIALOG]: ({
    commit
  }) => {
    commit(SHOW_DIALOG, true);
  }
};
const mutations = {
  [SHOW_DIALOG]: (state, payload) => {
    state.dialog = payload;
  }
};
export default {
  state,
  getters,
  actions,
  mutations
};