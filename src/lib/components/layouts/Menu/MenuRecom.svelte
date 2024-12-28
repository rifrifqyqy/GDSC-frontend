<script>
	import CardMenu from '$lib/components/elements/CardMenu.svelte';

	// buat props fiveData
	export let fiveData = [];
	import { formatToRupiah } from '$lib/utils/currency';
</script>

<main class="mt-8 flex flex-col gap-6 md:mt-16">
	<header>
		<h1 class=" text-[1.3rem] font-semibold md:text-[2rem]">You may also like</h1>
	</header>
	<section class=" grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-16 lg:grid-cols-4 xl:grid-cols-5">
		<!-- loop max 5 datas -->
		{#each fiveData as data}
			<a href="/menu/{data.id}">
				<CardMenu
					title={data.name}
					thumb={data.image}
					label={data.mealType}
					rating={data.rating}
					price={formatToRupiah(data.caloriesPerServing * 100)}
				/>
			</a>
		{/each}
	</section>
</main>
