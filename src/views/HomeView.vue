<template>
	<div class="container-sm py-3">
		<h2 v-if="getAllBooks.length >= 1">Lista de resenhas</h2>
		<h2 v-else id="h2-vazio" class="text-center text-secondary">Suas resenhas aparecerão aqui</h2>
		<livro v-for="item in getAllBooks" :key="item.id" :livro="item" @update="storeToUpdate" @remove="removeLivro"></livro>
	</div>
</template>

<script>
	import ItemLivro from '@/components/ItemLivro';
	import { mapActions, mapGetters } from 'vuex';

	export default {
		name: 'HomeView',
		components: {
			livro: ItemLivro,
		},
		methods: {
			...mapActions(['removeLivro', 'storeToUpdate']),
		},
		computed: {
			...mapGetters(['getAllBooks']),
		},
	};
</script>

<style scoped>
	#h2-vazio {
		margin-top: 4rem;
	}
</style>
