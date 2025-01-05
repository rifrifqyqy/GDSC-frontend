<script>
	import { goto } from '$app/navigation';
	import Button from '$lib/components/elements/Button.svelte';

	// function to navigate to menu page
	const navigateMenu = () => {
		goto('/menu');
	};

	// gsap
	import { gsap as blender } from 'gsap';
	import { onMount } from 'svelte';

	onMount(() => {
		let tl = blender.timeline();

		tl.from('#title', {
			y: 40,
			opacity: 0,
			duration: 0.6,
			ease: 'power4.out'
		});
		tl.from('#subtitle2', {
			opacity: 0,
			duration: 0.6,
			x: -50,
			ease: 'power4.out'
		});
		tl.from('#subtitle3', {
			opacity: 0,
			duration: 0.6,
			y: -50,
			ease: 'power4.out'
		});
	});
</script>

<main class="main-wrapper grid-wrapper" id="heros">
	<!-- left content -->
	<section class="main-content max-md:order-2">
		<h2 class="hero-label" id="title">
			More than faster <span>
				<img src="/images/delivery-bike.svg" class="max-md:h-6" alt="" /></span
			>
		</h2>
		<article>
			<h1 id="subtitle2">Be The Fastest In Delivering Your Food</h1>
			<p id="subtitle3">
				Our job is to filling your tummy with delicious food and with fast and free delivery.
			</p>
		</article>
		<div class="mt-4 flex items-center gap-8 md:mt-8">
			<Button
				label="Get Started"
				onClick={navigateMenu}
				customClass="gap-4 max-md:text-sm rounded-full md:py-3 md:px-6 font-medium"
			/>
			<Button
				label="Watch Video"
				customClass="gap-4 rounded-full md:py-3 max-md:text-sm md:px-6 bg-transparent text-dark-100 font-medium hover:bg-zinc-200"
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
			@apply flex w-fit items-center gap-2 rounded-full bg-red-200 px-4 py-1.5 text-xs font-normal text-red-600 md:py-2 md:text-base;
		}
		h1 {
			@apply text-[2rem] font-bold leading-[150%] text-dark-100 md:text-[4rem];
		}
		p {
			@apply mt-2 text-sm leading-relaxed text-dark-400 md:text-lg;
		}
	}
	.grid-wrapper {
		@apply grid md:grid-cols-2;
	}
	figure {
		@apply -mt-24 md:ml-auto md:mt-0;
		img {
			@apply h-[400px] w-full object-contain md:h-[540px];
		}
	}
</style>
