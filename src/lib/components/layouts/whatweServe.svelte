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

<main>
	<article class="title">
		<h1>What We Serve</h1>
		<h2>Your Favourite Food Delivery Partner</h2>
	</article>
	<section class="mt-24 grid grid-cols-3 gap-4">
		{#each dataserve as skibidi}
			<main class="card">
				<figure>
					<img
						src={skibidi.images}
						alt="${skibidi.name} Image"
						class="h-[200px] w-full object-contain"
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

<style>
	.title {
		@apply flex flex-col items-center gap-4;

		h1 {
			@apply text-primary-100 text-xl font-medium uppercase;
		}
		h2 {
			@apply text-dark-100 max-w-[600px] text-center text-[3.3rem] font-semibold leading-snug;
		}
	}
	.card {
		@apply flex flex-col items-center justify-center gap-4;
		article {
			@apply mt-2 flex flex-col items-center justify-center gap-2;
			h1 {
				@apply text-dark-100 text-2xl font-semibold;
			}
			p {
				@apply text-dark-500 text-center;
			}
		}
	}
</style>
