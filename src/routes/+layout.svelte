<script>
	import '../app.css';
	import Navbar from '$lib/components/fragments/Navbar.svelte';
	import { onMount } from 'svelte';
	import FooterLayout from '$lib/components/layouts/footerLayout.svelte';
	import { page } from '$app/stores';
	import { afterNavigate, beforeNavigate } from '$app/navigation';
	import { writable } from 'svelte/store';
	import Modal from '$lib/components/elements/Modal.svelte';

	/** @type {{children: import('svelte').Snippet}} */
	let { children } = $props();

	let isScrolled = $state(false);
	const handleScroll = () => {
		isScrolled = window.scrollY > 0;
	};

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	export const navigating = writable(false);

	beforeNavigate(() => {
		navigating.set(true);
		document.body.style.overflow = 'hidden';
	});

	afterNavigate(() => {
		navigating.set(false);
		document.body.style.overflow = 'auto';

		closeModal();
	});

	function closeModal() {
		navigating.set(false);
	}
</script>

<div class="relative min-h-screen font-sans">
	{#if $page.error}{:else}
		<nav
			class={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? ' bg-white shadow-sm' : ''}`}
		>
			<div class="px-4 xl:px-24">
				<Navbar />
			</div>
		</nav>
	{/if}
	<main class="mx-auto min-h-screen 2xl:container">
		{@render children()}
	</main>
	{#if $page.error}{:else}
		<FooterLayout />
	{/if}
	<!-- modal loading beforenavigate -->
	{#if $navigating}
		<Modal />
	{/if}
</div>

<style scoped>
</style>
