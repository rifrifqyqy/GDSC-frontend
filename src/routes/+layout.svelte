<script>
	import '../app.css';
	import Navbar from '$lib/components/fragments/Navbar.svelte';
	import { onMount } from 'svelte';
	import FooterLayout from '$lib/components/layouts/footerLayout.svelte';
	import { page } from '$app/stores';

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
	{#if $page.error}{:else}
		<nav
			class={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? ' bg-white shadow-sm' : ''}`}
		>
			<div class="px-24">
				<Navbar />
			</div>
		</nav>
	{/if}
	<main class="min-h-screen container mx-auto">
		{@render children()}
	</main>
	{#if $page.error}{:else}
		<FooterLayout />
	{/if}
</div>

<style scoped>
</style>
