<script>
	import DownloadApp from '$lib/components/layouts/Herosection/downloadApp.svelte';
	import HeroLayout from '$lib/components/layouts/Herosection/HeroLayout.svelte';
	import MenuShow from '$lib/components/layouts/Herosection/menuShow.svelte';
	import WhattheySay from '$lib/components/layouts/Herosection/whattheySay.svelte';
	import WhatweServe from '$lib/components/layouts/whatweServe.svelte';
</script>

<svelte:head>
	<title>FUDO | Home</title>
	<meta name="description" content="Fudo website" />
</svelte:head>

<main class="">
	<section class="mt-10 flex flex-col gap-32">
		<HeroLayout />
		<section class="">
			<WhatweServe />
		</section>
		<section>
			<MenuShow />
		</section>
		<section class="">
			<DownloadApp />
		</section>
		<section>
			<WhattheySay />
		</section>
		<div class="hero-wrapper absolute top-0 -z-50 h-screen w-full self-center"></div>
	</section>
</main>

<style>
	.hero-wrapper {
		background: linear-gradient(
			180deg,
			rgba(245, 71, 72, 0.20) 0%,
			rgba(255, 255, 255, 0.3) 75.17%
		);
	}
</style>
