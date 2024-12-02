<script>
	import { twMerge } from 'tailwind-merge';

	export let label = 'Click me';
	export let onClick = () => {};
	export let customClass = '';
	export let style = '';
</script>

<button
	on:click={onClick}
	class={twMerge(
		`button bg-primary-100 rounded-full px-4 py-2 text-white transition-all duration-300 ${customClass}`
	)}
	{style}
>
	<slot>{label}</slot>
</button>

<style scoped>
	.button {
		font-size: 1rem;
		cursor: pointer;
		height: fit-content;
		display: flex;
	}

	.button:hover {
		@apply opacity-80;
	}
</style>
