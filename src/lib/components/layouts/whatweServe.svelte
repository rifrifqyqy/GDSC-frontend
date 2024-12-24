<script>
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
</script>

<main class="main-wrapper">
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
			@apply text-primary-100 font-medium uppercase md:text-xl;
		}
		h2 {
			@apply text-dark-100 max-w-[600px] text-center text-[2rem] font-semibold leading-snug md:text-[3.3rem];
		}
	}
	.card {
		@apply flex flex-col items-center justify-center gap-4;
		article {
			@apply mt-2 flex flex-col items-center justify-center gap-2;
			h1 {
				@apply text-dark-100 text-[1.5rem] font-semibold md:text-[1.8rem];
			}
			p {
				@apply text-dark-500 text-center max-md:text-[0.8rem];
			}
		}
	}
</style>
