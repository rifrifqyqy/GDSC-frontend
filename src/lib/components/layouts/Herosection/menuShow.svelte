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
	<section class="mt-8 flex gap-4 overflow-x-scroll no-scrollbar">
		{#each images as img}
			<img src={img.url} alt="" class="menu-img" />
		{/each}
	</section>
</main>

<style scoped>
	.menu-img {
		@apply aspect-square h-[23.5rem] rounded-xl object-cover;
	}
	.header-content {
		@apply flex flex-col gap-2;

		p {
			@apply text-primary-100 text-xl font-medium uppercase;
		}
		article {
			@apply text-dark-100 text-[3.3rem] font-semibold leading-snug;
		}
	}
	.no-scrollbar::-webkit-scrollbar {
		display: none;
	}
	.no-scrollbar {
		scrollbar-width: none;
	}
</style>
