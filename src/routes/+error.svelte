<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import Button from '$lib/components/elements/Button.svelte';
</script>

<main class="error-page">
	<div class="wrapper">
		<h1>{`${$page.status}`}</h1>
		<p class="err-status">{$page.error?.message || 'Something went wrong.'}</p>

		{#if $page.status === 404}
			<p class="flex flex-col items-center gap-2">
				Halaman tidak ditemukan. Silakan kembali ke <Button
					label="Beranda"
					onClick={() => goto('/')}
				/>
			</p>
		{/if}
	</div>
</main>

<style>
	.error-page {
		@apply flex min-h-screen flex-col items-center justify-center gap-6;
		h1 {
			@apply bg-primary-100 w-fit p-12 text-6xl font-semibold uppercase text-white;
		}
		.err-status {
			@apply text-xl font-semibold uppercase text-gray-600;
		}
		.wrapper {
			@apply m-auto flex flex-col items-center gap-4;
		}
	}
</style>
