import { createStore } from 'vuex';

export default createStore({
  state: {
    user: null,
    token: null,
    loading: false,
    error: null,
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    SET_TOKEN(state, token) {
      state.token = token;
    },
    SET_LOADING(state, loading) {
      state.loading = loading;
    },
    SET_ERROR(state, error) {
      state.error = error;
    },
  },
  actions: {
    login({ commit }, credentials) {
      commit('SET_LOADING', true);
      // Simulación de llamada a la API
      setTimeout(() => {
        commit('SET_USER', { name: 'Usuario Demo', email: 'demo@example.com' });
        commit('SET_TOKEN', 'token-demo-123');
        commit('SET_LOADING', false);
      }, 1000);
    },
    logout({ commit }) {
      commit('SET_USER', null);
      commit('SET_TOKEN', null);
    },
  },
  getters: {
    isAuthenticated: (state) => !!state.token,
    getUser: (state) => state.user,
    isLoading: (state) => state.loading,
    getError: (state) => state.error,
  },
});
