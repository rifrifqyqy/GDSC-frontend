<script>
	import Breadcrumb from '$lib/components/elements/Breadcrumb.svelte';
	import Button from '$lib/components/elements/Button.svelte';
	import MenuRecom from '$lib/components/layouts/Menu/MenuRecom.svelte';
	import { formatToRupiah } from '$lib/utils/currency';
	import { onMount } from 'svelte';

	// @ts-ignore
	export let data;
	const { recipes, allRecipes } = data;

	const arrayIngredients = Object.fromEntries(
		recipes.ingredients.map((/** @type {any} */ ingredient, /** @type {any} */ index) => [
			index,
			ingredient
		])
	);

	let isMobile = false;
	/**
	 * @type {never[]}
	 */
	let recommendedData = [];
	onMount(() => {
		isMobile = window.innerWidth < 768;
		const sortedRecipes = allRecipes.sort((a, b) => b.rating - a.rating);
		const fiveData = sortedRecipes.slice(0, 5);
		const fourData = sortedRecipes.slice(0, 4);

		recommendedData = isMobile ? fourData : fiveData;
	});

	//state
	let accordionToggle = false;

	function toggleAccordion() {
		accordionToggle = !accordionToggle;
	}

	let isLoaded = false;
</script>

<svelte:head>
	<title>Fudo | {recipes.name}</title>
	<meta name="description" content="Fudo website" />
</svelte:head>

<main class="menu-wrapper flex h-full flex-col gap-6">
	<header class="flex flex-col gap-1 md:gap-4">
		<!-- breadcrumb -->
		<Breadcrumb currentpage={recipes.name} />
		<article class="flex flex-col gap-2">
			<h1 class="text-[1.3rem] font-semibold md:text-[2rem]">{recipes.name}</h1>
			<div class="flex w-full gap-2 overflow-x-scroll no-scrollbar">
				{#each recipes.tags as tag}
					<p
						class="text-primary-100 bg-primary-300/20 h-fit text-nowrap rounded-full px-3 py-1 font-semibold max-md:text-[0.7rem]"
					>
						{tag}
					</p>
				{/each}
			</div>
		</article>
	</header>
	<main class="__grid-wrapper">
		<section class="_left-content">
			<figure>
				{#if !isLoaded}
					<img
						src="/images/placeholder-img-3.png"
						class="object-contain object-center grayscale"
						alt=""
					/>
				{/if}
				<img
					src={recipes.image}
					onload={() => (isLoaded = true)}
					class={isLoaded ? 'block' : 'hidden'}
					alt=""
				/>
			</figure>
			<div class="_bg-blur">
				{#if !isLoaded}
					<div class="h-full w-full bg-gray-200 max-md:hidden"></div>
				{:else}
					<img src={recipes.image} class="blur brightness-50" alt="" />
				{/if}
			</div>
		</section>

		<section class="_right-content">
			<div class="_border-style _box-product">
				<article class="_header">
					<h1>
						{formatToRupiah(recipes.caloriesPerServing * 100)}
					</h1>
					<p>
						<span>{recipes.cookTimeMinutes}</span> minutes to serve
					</p>
				</article>
				<Button customClass="w-full justify-center max-md:text-sm max-md:py-2 font-semibold"
					>Buy Now</Button
				>
				<article class="_calories-wrap">
					<p>Calories: {recipes.caloriesPerServing} kkal</p>
					<a href="/" class="text-primary-100 font-semibold underline"
						>Reviews ({recipes.reviewCount})</a
					>
				</article>
			</div>
			<main class="_border-style _accordion-wrap">
				<button onclick={toggleAccordion}>
					<p>
						Ingredients <span>({recipes.ingredients.length})</span>
					</p>
					<!-- arrow down svg -->
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-4 w-4 {accordionToggle ? 'rotate-180 transform' : ''} transition-all"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
					</svg>
				</button>

				<!-- content accordion -->
				<div
					class=" flex flex-col gap-2 overflow-hidden
					{accordionToggle ? ' mt-4 h-full md:mt-8 md:pb-3' : ' h-0'} transition-all duration-300"
				>
					{#each Object.values(arrayIngredients) as ingredient}
						<p
							class="text-dark-100 rounded-md bg-gray-200 py-2 pl-3 font-semibold max-md:text-xs md:pl-6"
						>
							{ingredient}
						</p>
					{/each}
				</div>
			</main>
		</section>
	</main>

	<!-- main content | description -->
	<article class="flex flex-col gap-4">
		<h1 class=" text-[1.3rem] font-semibold md:text-[2rem]">How we cooked?</h1>

		<section class="flex flex-col gap-4">
			{#each recipes.instructions as steps}
				<p
					class="text-dark-100 flex items-center gap-4 rounded-md max-md:text-sm"
					style="font-family: 'Inter', sans-serif;"
				>
					<span class="bg-primary-100/20 text-primary-100 rounded-full px-3 py-1 max-md:text-xs"
						>{recipes.instructions.indexOf(steps) + 1}</span
					>

					{steps}
				</p>
			{/each}
		</section>
	</article>
	<MenuRecom fiveData={recommendedData} />
</main>

<style>
	._border-style {
		@apply border-2 border-gray-200;
	}

	.__grid-wrapper {
		@apply grid gap-8 md:grid-cols-5 md:gap-16;
	}

	._left-content {
		@apply relative flex flex-col gap-4 overflow-hidden rounded-2xl md:col-span-3 md:gap-8;

		figure {
			@apply flex h-fit overflow-hidden rounded-2xl md:px-24;

			img {
				@apply aspect-auto w-full rounded-2xl object-cover md:aspect-video md:h-[440px];
			}
		}

		._bg-blur {
			@apply absolute left-0 top-0 -z-10 hidden w-full overflow-hidden rounded-2xl bg-red-400 md:block md:h-[440px];
		}
	}

	._right-content {
		@apply sticky top-24 flex h-fit flex-col gap-4 md:col-span-2;

		._box-product {
			@apply flex flex-col gap-2 rounded-xl p-3 md:gap-4 md:p-6;

			._header {
				@apply flex items-center justify-between;
				h1 {
					@apply text-[1.1rem] font-semibold md:text-[1.5rem];
				}
				p {
					@apply text-dark-300 text-[0.7rem] md:text-[1rem];
					span {
						@apply text-primary-100 bg-primary-300/20 rounded-full px-1 py-0.5 font-semibold md:px-2 md:py-1;
					}
				}
			}

			._calories-wrap {
				@apply mt-2 flex items-center justify-between border-t-2 border-gray-200 pt-3 text-xs font-medium text-gray-500 md:pt-6 md:text-[0.9rem];
			}
		}
	}

	._accordion-wrap {
		@apply sticky top-0 flex h-fit transform flex-col rounded-lg bg-white px-3 py-3 transition-all md:px-6;

		button {
			@apply flex items-center justify-between;
			p {
				@apply mt-0.5 text-sm font-medium md:text-[0.9rem];
			}
		}
	}
</style>
