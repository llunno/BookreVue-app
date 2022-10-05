<template>
	<div class="card mb-3">
		<h5 class="card-header text-bg-secondary">{{ livro.nome }}</h5>
		<div class="card-body">
			<h6 class="card-subtitle mb-3 text-muted">{{ livro.editora }} - Gênero: {{ livro.genero }}</h6>
			<p class="card-text">Resenha: {{ livro.description }}</p>
			<button class="btn btn-outline-primary mx-2" @click="$emit('update', livro)">Editar</button>
			<button @click="$emit('remove', livro)" class="btn btn-outline-danger">Excluir</button>
		</div>
		<div class="card-footer">Data da resenha: {{ livro.insertDate }}</div>
	</div>
</template>

<script>
	export default {
		props: {
			livro: { type: Object, required: true },
		},
	};
</script>
