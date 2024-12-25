<script>
	import CardMenu from '$lib/components/elements/CardMenu.svelte';

	export let data;
	const { recipes } = data;
	console.log(recipes);
</script>

<svelte:head>
	<title>FUDO | Menu Pages</title>
	<meta name="description" content="Fudo website" />
</svelte:head>

<main class="main-wrapper">
	<header class="bg-primary-100/15 my-8 flex items-center gap-4 rounded-2xl p-8">
		<img src="./images/fudologo.png" class="h-12" alt="" />
		<h1 class="font-semibold">Fudo Menu</h1>
	</header>
	<section class="grid grid-cols-5 gap-10">
		{#each recipes as R}
			<CardMenu
				title={R.name}
				thumb={R.image}
				label={R.mealType}
				rating={R.rating}
				price="${R.caloriesPerServing}"
			/>
		{/each}
	</section>
</main>

<style>
</style>
