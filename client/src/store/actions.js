export default {
  addItem(context, payload) {
    context.commit("addItem", payload);
  },
  clearItem(context, payload) {
    context.commit("clearItem", payload);
  },
  updateItem(context, payload) {
    context.commit("updateItem", payload);
  },
  updateStatus(context, payload) {
    context.commit("updateStatus", payload);
  },
};
