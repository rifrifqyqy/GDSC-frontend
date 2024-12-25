<script>
	let about = [
		{
			id: 1,
			title: 'About Us',
			url: '/'
		},
		{
			id: 2,
			title: 'Featured',
			url: '/'
		},
		{
			id: 3,
			title: 'News',
			url: '/'
		},
		{
			id: 4,
			title: 'Menu',
			url: '/'
		}
	];
	let company = [
		{
			id: 1,
			title: 'Why Fudo',
			url: '/'
		},
		{
			id: 2,
			title: 'Partner With Us',
			url: '/'
		},
		{
			id: 3,
			title: 'FAQ',
			url: '/'
		},
		{
			id: 4,
			title: 'Blog',
			url: '/'
		}
	];
	let support = [
		{
			id: 1,
			title: 'Account',
			url: '/'
		},
		{
			id: 2,
			title: 'Support Center',
			url: '/'
		},
		{
			id: 3,
			title: 'Feedback',
			url: '/'
		},
		{
			id: 4,
			title: 'Contact Us',
			url: '/'
		},
		{
			id: 5,
			title: 'Accessibility',
			url: '/'
		}
	];
</script>

<footer class="bottom-0 mt-16 grid grid-cols-3 gap-16 bg-white p-8 md:mt-24 md:grid-cols-5 md:p-24">
	<section class="col-span-3 flex flex-col gap-4 md:col-span-2">
		<figure class="text-dark-100 flex items-center gap-4">
			<img src="/images/fudologo.png" class="aspect-auto h-8 md:h-12" alt="" />
			<h1 class="text-[1.5rem] font-semibold md:text-3xl">Fudo</h1>
		</figure>
		<article>
			<p class="text-[0.9rem] md:text-base">
				Our job is to filling youe tummy with delicious food and with fast and free delivery time.
			</p>
		</article>
		<div class="flex items-center gap-4">
			<img src="/images/ig.svg" class="max-md:h-5" alt="" />
			<img src="/images/fb.svg" class="max-md:h-5" alt="" />
			<img src="/images/twt.svg" class="max-md:h-5" alt="" />
		</div>
	</section>
	<section>
		<h1 class="footer-title">About</h1>
		<ul class="ul-footer">
			{#each about as a}
				<li>
					<a href={a.url}>{a.title}</a>
				</li>
			{/each}
		</ul>
	</section>
	<section>
		<h1 class="footer-title">Company</h1>
		<ul class="ul-footer">
			{#each company as c}
				<li>
					<a href={c.url}>{c.title}</a>
				</li>
			{/each}
		</ul>
	</section>
	<section>
		<h1 class="footer-title">Support</h1>
		<ul class="ul-footer">
			{#each support as s}
				<li>
					<a href={s.url}>{s.title}</a>
				</li>
			{/each}
		</ul>
	</section>
</footer>
<footer class="footer">
	<p>
		<img src="images/svelte.png" alt="" />
		Made with svelte.
		<a href="https://svelte.dev/"> see documentation</a>
	</p>
</footer>

<style scoped>
	.footer {
		p {
			display: flex;
			justify-content: center;
			font-size: 0.9rem;
			align-items: center;
			padding: 1rem 0;

			img {
				aspect-ratio: auto;
				height: 20px;
				margin-right: 6px;
			}

			a {
				text-decoration: underline;
				margin-left: 2px;
				color: rgb(255, 60, 26);
			}
		}
	}
	.footer-title {
		@apply text-[1.1rem] font-bold md:text-2xl;
	}
	.ul-footer {
		@apply text-dark-500 mt-4 flex flex-col gap-2 md:gap-4;
		a {
			@apply hover:text-primary-100 transition-all max-md:text-[0.9rem];
		}
	}
</style>
