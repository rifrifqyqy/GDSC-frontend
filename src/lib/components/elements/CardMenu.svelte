<script>
	// membuat props
	export let title = 'Borgir';
	export let thumb = '';
	export let label = [''];
	export let rating = Number(0);
	export let price = Number(0) || '';
	let isLoaded = false;

	// setTimeout(() => {
	// 	isLoaded = true;
	// }, 3000);
</script>

<main class="__card-wrapper group">
	<figure class="__card-image relative">
		{#if !isLoaded}
			<!-- Placeholder -->
			<img
				src="./images/placeholder-img-3.png"
				class=" aspect-square rounded-md bg-gray-200 object-cover grayscale"
				alt=""
			/>
		{/if}
		<img
			src={thumb}
			onload={() => (isLoaded = true)}
			class="{isLoaded ? 'block' : 'hidden'} transition-all group-hover:brightness-75"
			alt=""
		/>
		<div
			class="bg-primary-100 absolute bottom-0 flex h-0 w-full text-center text-xs font-semibold uppercase text-white transition-all delay-100 duration-300 group-hover:h-5"
		>
			<p class="m-auto">Lihat Menu</p>
		</div>
	</figure>
	<article class="__card-content">
		<div class="__card-title">
			{#if !isLoaded}
				<div class="placeholder h-[1rem] w-[90%]"></div>
				<div class="placeholder h-[1rem] w-[60%]"></div>
			{:else}
				<h1>{title}</h1>
			{/if}
		</div>
		{#if !isLoaded}{:else}
			<div class="__label">
				{#each label as L}
					<p>{L}</p>
				{/each}
			</div>
		{/if}

		<footer class="__card-footer mt-auto">
			{#if !isLoaded}
				<div class="placeholder h-[1rem] w-[30%]"></div>
			{:else}
				<div class="__rating">
					{#if rating != null}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="w-[1.2rem] md:w-[1.5rem]"
							viewBox="0 0 24 24"
							><path
								fill="currentColor"
								d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"
							/></svg
						>
						<p>{rating}</p>
					{/if}
				</div>
			{/if}
			{#if !isLoaded}
				<div class="placeholder h-[1rem] w-[40%]"></div>
			{:else}
				<h1>{price}</h1>
			{/if}
		</footer>
	</article>
</main>

<style>
	.__card-wrapper {
		@apply flex h-full cursor-pointer flex-col gap-2;
		.__card-image {
			img {
				@apply rounded-md object-cover object-center;
			}
		}

		.__card-content {
			@apply flex h-full flex-col gap-1;

			.__card-title {
				@apply flex flex-col;
				h1 {
					@apply text-dark-300 text-[1rem] font-semibold leading-snug md:text-[1.3rem];
				}
			}

			.__label {
				@apply flex flex-wrap gap-2;

				p {
					@apply text-light-100 bg-primary-100 rounded-full px-2 text-[0.7rem] font-normal max-md:pt-[1px] md:text-[0.8rem];
				}
			}

			.__card-footer {
				@apply mt-auto flex items-center justify-between pt-4;

				.__rating {
					@apply flex items-center gap-2 text-yellow-500;
					p {
						@apply text-dark-400 text-[0.9rem] md:text-[1rem] font-semibold;
					}
				}
				h1 {
					@apply text-dark-100 text-[1.1rem] md:text-[1.3rem] font-semibold;
				}
			}
		}
	}
	.placeholder {
		background-color: #ddd;
		border-radius: 4px;
		height: 1.2rem;
		margin: 0.5rem 0;
		animation: shimmer 1s infinite linear;
	}
	@keyframes shimmer {
		0% {
			background-position: -200px 0;
		}
		100% {
			background-position: 200px 0;
		}
	}
</style>
