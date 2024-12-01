<script>
	import '../app.css';
	import Navbar from '$lib/components/fragments/Navbar.svelte';
	import { onMount } from 'svelte';

	/** @type {{children: import('svelte').Snippet}} */
	let { children } = $props();

	let isScrolled = $state(false);
	const handleScroll = () => {
		isScrolled = window.scrollY > 0;
		console.log('Scroll Position:', window.scrollY, 'Is Scrolled:', isScrolled);
	};

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<div class="relative min-h-screen font-sans">
	<nav
		class={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? ' bg-white shadow-sm' : ''}`}
	>
		<div class="px-24">
			<Navbar />
		</div>
	</nav>
	<main>
		{@render children()}
	</main>
	<footer class="bottom-0 mt-24 grid grid-cols-5 gap-16 bg-white p-24">
		<section class="col-span-2 flex flex-col gap-4">
			<figure class="text-dark-100 flex items-center gap-4">
				<img src="/images/fudologo.png" class="aspect-auto h-12" alt="" />
				<h1 class="text-3xl font-semibold">Fudo</h1>
			</figure>
			<article>
				<p class="text-base">
					Our job is to filling youe tummy with delicious food and with fast and free delivery time.
				</p>
			</article>
			<div class="flex gap-4 items-center">
				<img src="/images/ig.svg" alt="" />
				<img src="/images/fb.svg" alt="" />
				<img src="/images/twt.svg" alt="" />
			</div>
		</section>
		<section>a</section>
		<section>a</section>
		<section>a</section>
	</footer>
</div>

<style>
	.bg-putih {
		background-color: white;
	}
</style>
