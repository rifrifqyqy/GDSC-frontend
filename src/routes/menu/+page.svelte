<script>
	import CardMenu from '$lib/components/elements/CardMenu.svelte';
	import { formatToRupiah } from '$lib/utils/currency.js';
	import { gsap as blender } from 'gsap';
	export let data;
	const { recipes } = data;

	let overlay;
	let mouseX = 0;
	let mouseY = 0;

	const handleMouseEnter = (event) => {
		mouseX = event.clientX;
		mouseY = event.clientY;

		// Animasi masuk
		blender.to(overlay, {
			x: mouseX,
			y: mouseY,
			opacity: 1,
			scale: 1,
			duration: 0.3,
			ease: 'power4.out'
		});
	};

	const handleMouseLeave = () => {
		console.log('mouse leave');
		// Animasi keluar
		blender.to(overlay, {
			opacity: 0,
			scale: 0.8,
			duration: 0.3,
			ease: 'power4.out'
		});
	};

	const handleMouseMove = (event) => {
		mouseX = event.clientX;
		mouseY = event.clientY;

		// Ikuti kursor
		blender.to(overlay, {
			x: mouseX,
			y: mouseY,
			duration: 0.1
		});
	};
</script>

<svelte:head>
	<title>FUDO | Menu Pages</title>
	<meta name="description" content="Fudo website" />
</svelte:head>

<main class="menu-wrapper">
	<header
		class="mb-4 mt-1 flex items-center gap-4 rounded-2xl bg-primary-100/15 p-4 md:my-8 md:p-8"
	>
		<img src="./images/fudologo.png" class="h-6 md:h-12" alt="" />
		<h1 class="font-semibold">Fudo Menu</h1>
	</header>
	<section class="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-10 lg:grid-cols-4 xl:grid-cols-5">
		{#each recipes as R}
			<a
				href={`/menu/${R.id}`}
				onmouseenter={handleMouseEnter}
				onmouseleave={handleMouseLeave}
				onmousemove={handleMouseMove}
			>
				<CardMenu
					title={R.name}
					thumb={R.image}
					label={R.mealType}
					rating={R.rating}
					price={formatToRupiah(R.caloriesPerServing * 100)}
				/>
				<div bind:this={overlay} class="overlay">
					<figure class="flex gap-4">
						<img src="/images/hu-tao.gif" class="h-16 " alt="" />
						<p class="my-auto font-semibold text-primary-100">Tap Me!!!</p>
					</figure>
				</div>
			</a>
		{/each}
	</section>
</main>

<style>
	.overlay {
		@apply pointer-events-none fixed left-0 top-0 z-50 h-fit w-fit scale-[0.8] rounded-xl border-2 border-gray-200 bg-white px-4 py-2 text-center text-white opacity-0;
	}
</style>
