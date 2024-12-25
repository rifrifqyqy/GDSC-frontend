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
		`bg-primary-100 flex h-fit cursor-pointer rounded-full px-4 py-2 text-[1rem] text-white transition-all duration-300 hover:opacity-85 active:scale-95 ${customClass}`
	)}
	{style}
>
	<slot>{label}</slot>
</button>

<style scoped>
	.button:hover {
		@apply opacity-80;
	}
</style>
