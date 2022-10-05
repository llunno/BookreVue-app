import { createStore } from 'vuex';
import router from '@/router/index.js';

export default createStore({
	state: {
		livros: [],
		toBeUpdated: {},
		isUpdating: false,
	},
	getters: {
		getAllBooks(state) {
			return state.livros;
		},
		getToUpdate(state) {
			return state.toBeUpdated;
		},
		getisUpdating(state) {
			return state.isUpdating;
		},
	},
	mutations: {
		addLivro(state, payload) {
			state.livros.push(payload);
		},
		removeLivro(state, payload) {
			state.livros = state.livros.filter((item) => item.id != payload.id);
		},
		storeToUpdate(state, payload) {
			state.toBeUpdated = payload;
			state.isUpdating = true;
			router.push('/adicionar');
		},
		setIsUpdating(state) {
			state.isUpdating = false;
			state.toBeUpdated = {};
		},
	},
	actions: {
		addLivro({ commit }, livro) {
			commit('addLivro', livro);
		},
		removeLivro({ commit }, livro) {
			commit('removeLivro', livro);
		},
		storeToUpdate({ commit }, livro) {
			commit('storeToUpdate', livro);
		},
		setIsUpdating({ commit }) {
			commit('setIsUpdating');
		},
	},
	modules: {},
});
