<script>
	// data link
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

<footer class="bottom-0 mt-24 grid grid-cols-5 gap-16 bg-white p-24">
	<section class="col-span-2 flex flex-col gap-4">
		<figure class="text-dark-100 flex items-center gap-4">
			<img src="/images/fudologo.png" class="aspect-auto h-12" alt="" />
			<h1 class="text-3xl font-semibold">Fudo</h1>
		</figure>
		<article>
			<p class="text-base">
				Our job is to filling youe tummy with delicious food and with fast and free delivery time.
			</p>
		</article>
		<div class="flex items-center gap-4">
			<img src="/images/ig.svg" alt="" />
			<img src="/images/fb.svg" alt="" />
			<img src="/images/twt.svg" alt="" />
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

<style scoped>
	.footer-title {
		@apply text-2xl font-bold;
	}
	.ul-footer {
		@apply text-dark-500 mt-4 flex flex-col gap-4;
		a {
			@apply hover:text-primary-100 transition-all;
		}
	}
</style>
