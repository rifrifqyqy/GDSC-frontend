<script>
	let stars = 4.8;
	let starArr = Array.from({ length: stars }, (_, i) => i + 1);
</script>

<main class="main-wrapper grid gap-8 md:mt-16 md:grid-cols-5 md:gap-16">
	<section class=" md:col-span-2">
		<figure>
			<img src="./images/chef.png" class="aspect-auto max-md:mx-auto max-md:h-[440px]" alt="" />
		</figure>
	</section>
	<section class="header-content md:col-span-3">
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
					<img src="./images/reviewer.png" alt="" class="aspect-square w-12 rounded-full md:w-20" />
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
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="w-[1.3rem] md:w-[1.8rem]"
							viewBox="0 0 24 24"
							><path
								fill="currentColor"
								d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"
							/></svg
						>
					</li>
				{/each}
				<svg xmlns="http://www.w3.org/2000/svg" class="w-[1.3rem] md:w-[1.8rem]" viewBox="0 0 24 24"
					><path
						fill="currentColor"
						d="m8.85 16.825l3.15-1.9l3.15 1.925l-.825-3.6l2.775-2.4l-3.65-.325l-1.45-3.4l-1.45 3.375l-3.65.325l2.775 2.425zM5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275zM12 12.25"
					/></svg
				>
				<div class="text-dark-100 ml-4 text-[0.9rem] font-semibold md:text-[1.1rem]">{stars}</div>
			</ul>
		</div>
	</section>
</main>

<style>
	.header-content {
		@apply flex flex-col gap-2;

		p {
			@apply text-primary-100 text-base font-medium uppercase md:text-xl;
		}
		h1 {
			@apply text-dark-100 text-[2rem] font-semibold leading-snug md:text-[3.3rem];
		}
		article {
			@apply text-dark-400 mt-2 text-[1rem] font-normal leading-relaxed md:mt-6 md:text-[1.3rem];
		}
	}

	.__review-card {
		@apply mt-8 flex flex-col gap-4 rounded-xl bg-white md:mt-12 md:gap-8;

		._header {
			@apply flex gap-6 md:gap-8;
		}
		._username {
			h2 {
				@apply text-dark-100 text-[1.1rem] font-semibold md:text-[1.3rem];
			}
			p {
				@apply text-dark-500 text-[0.8rem] font-semibold capitalize md:text-[1rem];
			}
		}
	}
</style>
