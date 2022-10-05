<template>
	<div class="adicionar container-sm py-3">
		<h2 v-if="!getisUpdating">Insira os dados do livro que deseja cadastrar:</h2>
		<h2 v-else>Altere os campos necessários</h2>
		<form @submit.prevent="add(livro)">
			<div class="row mb-3">
				<label class="col-sm-2 col-form-label">Nome do Livro:</label>
				<div class="col-sm-10">
					<input type="text" class="form-control" v-model="livro.nome" id="nome" required />
				</div>
			</div>
			<div class="row mb-3">
				<label class="col-sm-2 col-form-label">Editora:</label>
				<div class="col-sm-10">
					<input type="text" class="form-control" v-model="livro.editora" id="editora" required />
				</div>
			</div>
			<div class="row mb-3">
				<label class="col-sm-2 col-form-label">Selecione o gênero do livro:</label>
				<div class="col-sm-10">
					<select id="genero" class="form-select mb-3" v-model="livro.genero" aria-label="Gênero">
						<option disabled>Selecione entre os gêneros disponíveis ou o que mais se aproxima:</option>
						<option value="Romance">Romance</option>
						<option value="Ação">Ação</option>
						<option value="Terror">Terror</option>
						<option value="Suspense">Suspense</option>
						<option value="Drama">Drama</option>
						<option value="Histórico">Histórico</option>
						<option value="Fantasia">Fantasia</option>
						<option value="Fantasia">Acadêmico</option>
						<option value="Fantasia">Religioso</option>
					</select>
				</div>
			</div>
			<div class="row mb-3">
				<label class="col-sm-2 col-form-label">Descrição:</label>
				<div class="col-sm-10">
					<textarea class="form-control" placeholder="Insira aqui a sua resenha..." id="description" v-model="livro.description" required></textarea>
				</div>
			</div>
			<button v-if="!getisUpdating" type="submit" id="sbmt-btn" class="btn btn-success">Adicionar</button>
			<button v-else type="submit" class="btn btn-success" id="sbmt-btn">Salvar</button>
			<button type="button" class="btn btn-light" @click="this.$router.push('/')">Voltar</button>
		</form>
	</div>
</template>

<script>
	import { mapActions, mapGetters } from 'vuex';
	export default {
		mounted() {
			if (this.$store.getters.getisUpdating) {
				this.livro.id = this.getToUpdate.id;
				this.livro.nome = this.$store.getters.getToUpdate.nome;
				this.livro.editora = this.$store.getters.getToUpdate.editora;
				this.livro.genero = this.$store.getters.getToUpdate.genero;
				this.livro.description = this.$store.getters.getToUpdate.description;
			}
		},
		beforeUnmount() {
			this.$store.dispatch('setIsUpdating');
		},
		data() {
			return {
				livro: { id: Date.now(), insertDate: new Date(Date.now()).toLocaleDateString() },
			};
		},
		methods: {
			...mapActions(['addLivro', 'setIsUpdating']),

			add(livro) {
				if (this.$store.getters.getisUpdating) {
					this.$store.dispatch('removeLivro', this.$store.getters.getToUpdate);
					this.addLivro(livro);
					this.$router.push('/');
				} else {
					this.addLivro(livro);
					this.livro = { id: Date.now() };
					this.$router.push('/');
				}
			},
		},
		computed: {
			...mapGetters(['getisUpdating', 'getToUpdate']),
		},
	};
</script>

<style scoped lang="scss">
	h2 {
		margin-bottom: 1rem;
	}
	textarea {
		min-height: 15rem;
	}
	#generoP {
		display: inline;
	}

	#sbmt-btn {
		margin-right: 1rem;
	}
</style>
