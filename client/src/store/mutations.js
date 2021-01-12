export default {
  addItem(state, payload) {
    state.items.push(payload);

    return state;
  },
  clearItem(state, payload) {
    state.items.splice(payload.index, 1);

    return state;
  },
  updateItem(state, payload) {
    state.items[payload].done = !state.items[payload].done;

    return state;
  },
  updateStatus(state, payload) {
    state.status = payload;

    return state;
  },
};
