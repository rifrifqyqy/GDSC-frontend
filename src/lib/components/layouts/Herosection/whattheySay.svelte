<script>
	let stars = 4.8;
	let starArr = Array.from({ length: stars }, (_, i) => i + 1);
</script>

<main class="main-wrapper mt-16 grid grid-cols-5 gap-16">
	<section class="col-span-2">
		<figure>
			<img src="./images/chef.png" alt="" />
		</figure>
	</section>
	<section class="header-content col-span-3">
		<p>what they say</p>
		<h1>What Our Customer Say About Us</h1>
		<article>
			"Fudo is simply outstanding! The variety and deliciousness of their meals are unparalleled,
			offering something for every palate. What sets Fudo apart is their exceptional service. The
			delivery is impressively fast, ensuring your food arrives hot and fresh."
		</article>

		<!-- review section -->
		<div class="__review-card">
			<section class="_header">
				<figure>
					<img src="./images/reviewer.png" alt="" class="aspect-square w-20 rounded-full" />
				</figure>
				<div class="_username">
					<h2>Theresa Jordan</h2>
					<p>Food Enthusiast</p>
				</div>
			</section>
			<!-- stars  -->
			<ul class="flex items-center gap-1 text-yellow-500">
				{#each starArr as star}
					<li>
						<svg xmlns="http://www.w3.org/2000/svg" width="1.8em" height="1.8em" viewBox="0 0 24 24"
							><path
								fill="currentColor"
								d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"
							/></svg
						>
					</li>
				{/each}
				<svg xmlns="http://www.w3.org/2000/svg" width="1.8em" height="1.8em" viewBox="0 0 24 24"
					><path
						fill="currentColor"
						d="m8.85 16.825l3.15-1.9l3.15 1.925l-.825-3.6l2.775-2.4l-3.65-.325l-1.45-3.4l-1.45 3.375l-3.65.325l2.775 2.425zM5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275zM12 12.25"
					/></svg
				>
				<div class="text-dark-100 ml-4 text-[1.1rem] font-semibold">{stars}</div>
			</ul>
		</div>
	</section>
</main>

<style>
	.header-content {
		@apply flex flex-col gap-2;

		p {
			@apply text-primary-100 text-xl font-medium uppercase;
		}
		h1 {
			@apply text-dark-100 text-[3.3rem] font-semibold leading-snug;
		}
		article {
			@apply text-dark-400 mt-6 text-[1.3rem] font-normal leading-relaxed;
		}
	}

	.__review-card {
		@apply mt-12 flex flex-col gap-8 rounded-xl bg-white;

		._header {
			@apply flex gap-8;
		}
		._username {
			h2 {
				@apply text-dark-100 text-[1.3rem] font-semibold;
			}
			p {
				@apply text-dark-500 text-[1rem] font-semibold capitalize;
			}
		}
	}
</style>
