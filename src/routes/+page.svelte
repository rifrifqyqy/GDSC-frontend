<script>
	import Herolayout from '$lib/components/layouts/Herosection/herolayout.svelte';
	import WhatweServe from '$lib/components/layouts/whatweServe.svelte';
</script>

<svelte:head>
	<title>FUDO | Home</title>
	<meta name="description" content="Fudo website" />
</svelte:head>

<main class="">
	<section class="mt-10">
		<Herolayout />
		<section class="mt-24">
			<WhatweServe />
		</section>
		<div class="hero-wrapper absolute top-0 -z-50 h-screen w-full"></div>
	</section>
</main>

<style>
	.hero-wrapper {
		background: linear-gradient(
			180deg,
			rgba(245, 71, 72, 0.15) 0%,
			rgba(255, 255, 255, 0.3) 75.17%
		);
	}
</style>
