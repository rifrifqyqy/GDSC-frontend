<script>
	import CardMenu from '$lib/components/elements/CardMenu.svelte';
	import { formatToRupiah } from '$lib/utils/currency.js';

	export let data;
	const { recipes } = data;
</script>

<svelte:head>
	<title>FUDO | Menu Pages</title>
	<meta name="description" content="Fudo website" />
</svelte:head>

<main class="menu-wrapper">
	<header
		class="bg-primary-100/15 mb-4 mt-1 flex items-center gap-4 rounded-2xl p-4 md:my-8 md:p-8"
	>
		<img src="./images/fudologo.png" class="h-6 md:h-12" alt="" />
		<h1 class="font-semibold">Fudo Menu</h1>
	</header>
	<section class="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-10 lg:grid-cols-4 xl:grid-cols-5">
		{#each recipes as R}
			<CardMenu
				title={R.name}
				thumb={R.image}
				label={R.mealType}
				rating={R.rating}
				price={formatToRupiah(R.caloriesPerServing * 100)}
			/>
		{/each}
	</section>
</main>

<style>
</style>
