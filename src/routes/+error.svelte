<script>
	export let error;
	export let status;
</script>

<main class="text-center">
	<h1>{status}</h1>
	<p>{error.message}</p>
	{#if status === 404}
		<p>Halaman tidak ditemukan. <a href="/">Kembali ke beranda</a></p>
	{/if}
</main>

<style scoped>
	main {
		margin: 2rem;
		font-family: Arial, sans-serif;
	}
	h1 {
		font-size: 3rem;
		color: red;
	}
	a {
		color: blue;
		text-decoration: underline;
	}
</style>
