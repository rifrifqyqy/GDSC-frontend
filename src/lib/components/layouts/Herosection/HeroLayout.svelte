<script>
	import Button from '$lib/components/elements/Button.svelte';
</script>

<main class="main-wrapper grid-wrapper">
	<!-- left content -->
	<section class="main-content">
		<h2 class="hero-label">
			More than faster <span><img src="/images/delivery-bike.svg" alt="" /></span>
		</h2>
		<article>
			<h1>Be The Fastest In Delivering Your Food</h1>
			<p>Our job is to filling your tummy with delicious food and with fast and free delivery.</p>
		</article>
		<div class="mt-8 flex gap-8">
			<Button label="Get Started" customClass="gap-4 rounded-full py-3 px-6 font-medium" />
			<Button
				label="Watch Video"
				customClass="gap-4 rounded-full py-3 px-6 bg-transparent text-dark-100 font-medium hover:bg-zinc-200"
			/>
		</div>
	</section>
	<!-- end left content -->
	<!-- right content -->
	<figure>
		<img src="/images/herosection-img.png" alt="" />
	</figure>
	<!-- end right content -->
</main>

<style scoped>
	.main-content {
		@apply m-auto flex flex-col gap-4;
		.hero-label {
			@apply flex w-fit items-center gap-2 rounded-full bg-red-200 px-4 py-2 text-base font-normal text-red-600;
		}
		h1 {
			@apply text-dark-100 text-[4rem] font-bold leading-[150%];
		}
		p {
			@apply text-dark-400 text-lg leading-relaxed;
		}
	}
	.grid-wrapper {
		@apply grid grid-cols-2;
	}
	figure {
		@apply ml-auto;
		img {
			@apply h-[540px] w-full object-contain;
		}
	}
</style>
