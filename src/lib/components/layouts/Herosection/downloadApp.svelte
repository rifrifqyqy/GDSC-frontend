<script>
	import Button from '$lib/components/elements/Button.svelte';
</script>

<main class="main-wrapper bg-primary-800 max-md:pb-12">
	<main class="grid gap-8 md:grid-cols-2 md:gap-16">
		<section class="left-content max-md:order-2">
			<h1 class="label">Download App</h1>
			<article>
				<h2>Get Started With Fudo Today!</h2>
				<p>
					Discover food wherever and whenever you want and get your food delivered on time,
					everytime.
				</p>
				<Button label="Get The App" customClass="w-fit md:py-4 md:px-6 max-md:text-sm" />
			</article>
		</section>
		<section class="right-content">
			<figure>
				<img
					src="/images/mockupfudo.png"
					class="pt-8 max-md:mx-auto max-md:h-[20rem] md:pt-16"
					alt=""
				/>
			</figure>
		</section>
	</main>
</main>

<style scoped>
	.left-content {
		@apply my-auto flex flex-col gap-2;
		.label {
			@apply text-primary-100 font-medium uppercase md:text-2xl;
		}
		article {
			@apply flex flex-col gap-6 md:gap-8;
		}
		h2 {
			@apply text-[2rem] font-semibold leading-[140%] md:text-[3rem];
		}
	}
	.right-content {
		@apply mt-auto;
	}
</style>
