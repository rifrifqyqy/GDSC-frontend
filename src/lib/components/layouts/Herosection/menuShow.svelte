<script>
	let images = [
		{
			id: 1,
			url: '/images/menu1.png'
		},
		{
			id: 2,
			url: '/images/menu2.png'
		},
		{
			id: 3,
			url: '/images/menu3.png'
		},
		{
			id: 4,
			url: '/images/menu4.png'
		},
		{
			id: 5,
			url: '/images/menu1.png'
		},
		{
			id: 6,
			url: '/images/menu2.png'
		}
	];
</script>

<main class="main-wrapper">
	<section class="header-content">
		<p>Our Menu</p>
		<article>Menu That Always <br /> Make You Fall In Love</article>
	</section>
	<section class="no-scrollbar mt-8 flex gap-4 overflow-x-scroll">
		{#each images as img}
			<img src={img.url} alt="" class="menu-img" />
		{/each}
	</section>
</main>

<style>
	.menu-img {
		@apply aspect-square h-[15rem] rounded-xl object-cover md:h-[23.5rem];
	}
	.header-content {
		@apply flex flex-col gap-2;

		p {
			@apply text-primary-100 font-medium uppercase md:text-xl;
		}
		article {
			@apply text-dark-100 text-[2rem] font-semibold leading-snug md:text-[3.3rem];
		}
	}
	.no-scrollbar::-webkit-scrollbar {
		display: none;
	}
	.no-scrollbar {
		scrollbar-width: none;
	}
</style>
