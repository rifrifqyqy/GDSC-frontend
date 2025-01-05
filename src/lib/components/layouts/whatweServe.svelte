<script>
	import { gsap } from './../../../../node_modules/gsap/gsap-core.js';
	const dataserve = [
		{
			id: 1,
			name: 'Easy to Order',
			description: 'You only need a few steps in ordering food',
			images: '/images/fatman1.png'
		},
		{
			id: 2,
			name: 'Fastest Delivery',
			description: 'Delivery that is always ontime even faster',
			images: '/images/fatman2.png'
		},
		{
			id: 3,
			name: 'Best Quality',
			description: 'Not only fast for us quality is also number one',
			images: '/images/fatman3.png'
		}
	];

	import { gsap as blender } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { onMount } from 'svelte';

	onMount(() => {
		let tl = blender.timeline({
			scrollTrigger: {
				trigger: '#serve',
				start: 'top 40%',
				end: 'top 30%',
				scrub: 2
			}
		});

		tl.from('.title h1', {
			y: 100,
			opacity: 0,
			duration: 0.6,
			ease: 'power4.out'
		});
		tl.from('.title h2', {
			y: 100,
			opacity: 0,
			duration: 0.6,
			ease: 'power4.out'
		});
		let scrollTL = blender.timeline({
			scrollTrigger: {
				trigger: '#serve',
				start: 'top 40%',
				end: 'top 30%',
				scrub: 3,
				toggleActions: 'play pause resume reset'
			}
		});
		scrollTL.from('.card', {
			scale: 0.8,
			opacity: 0,
			stagger: {
				each: 0.6,
				from: 'start'
			}
		});
	});
</script>

<main class="main-wrapper" id="serve">
	<article class="title">
		<h1>What We Serve</h1>
		<h2>Your Favourite Food Delivery Partner</h2>
	</article>
	<section class="mt-8 grid gap-4 md:mt-24 md:grid-cols-3">
		{#each dataserve as skibidi}
			<main class="card">
				<figure>
					<img
						src={skibidi.images}
						alt="{skibidi.name} Image"
						class="h-[160px] w-full object-contain md:h-[200px]"
					/>
					<article>
						<h1>{skibidi.name}</h1>
						<p>{skibidi.description}</p>
					</article>
				</figure>
			</main>
		{/each}
	</section>
</main>

<style scoped>
	.title {
		@apply flex flex-col items-center gap-4;

		h1 {
			@apply font-medium uppercase text-primary-100 md:text-xl;
		}
		h2 {
			@apply max-w-[600px] text-center text-[2rem] font-semibold leading-snug text-dark-100 md:text-[3.3rem];
		}
	}
	.card {
		@apply flex flex-col items-center justify-center gap-4;
		article {
			@apply mt-2 flex flex-col items-center justify-center gap-2;
			h1 {
				@apply text-[1.5rem] font-semibold text-dark-100 md:text-[1.8rem];
			}
			p {
				@apply text-center text-dark-500 max-md:text-[0.8rem];
			}
		}
	}
</style>
