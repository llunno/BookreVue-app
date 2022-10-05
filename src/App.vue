<template>
	<nav class="navbar navbar-expand-md navbar-dark bg-dark">
		<div class="container-fluid">
			<a class="navbar-brand" href="#">
				<img src="@/assets/logo.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top" />
				Bookrevue
			</a>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li class="nav-item">
						<router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" to="/adicionar">Adicionar</router-link>
					</li>
				</ul>
				<a id="textoNav" class="nav-link disabled">Gerenciador de resenhas de livros</a>
			</div>
		</div>
	</nav>
	<router-view />
</template>

<style lang="scss">
	#textoNav {
		color: rgb(196, 192, 192);
		margin-right: 1rem;
	}
</style>
