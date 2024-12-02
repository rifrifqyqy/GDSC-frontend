<script>
	import { page } from '$app/stores';
	import Button from '$lib/components/elements/Button.svelte';
</script>

<nav class="navbar z-[9999]">
	<figure>
		<img src="/images/fudologo.png" alt="" />
	</figure>
	<ul class="flex items-center gap-8">
		<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
			<a href="/">Why Fudo</a>
		</li>
		<li aria-current={$page.url.pathname === '/services' ? 'page' : undefined}>
			<a href="/services">Services</a>
		</li>
		<li aria-current={$page.url.pathname.startsWith('/menu') ? 'page' : undefined}>
			<a href="/menu">Menu</a>
		</li>
		<li aria-current={$page.url.pathname === '/contact' ? 'page' : undefined}>
			<a href="/contact">Contact</a>
		</li>
	</ul>
	<Button label="login" customClass="gap-4 rounded-full py-3 px-5"
		><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M4 15H6V20H18V4H6V9H4V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V15ZM10 11V8L15 12L10 16V13H2V11H10Z"
				fill="white"
			/>
		</svg>
		Login
	</Button>
</nav>

<style scoped>
	.navbar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		@apply p-4;

		figure {
			img {
				height: 54px;
			}
		}
		li[aria-current='page'] {
			a {
				font-weight: bold;
				@apply text-primary-100;
				&:hover {
					@apply bg-inherit;
				}
			}
		}
		li {
			a {
				@apply text-dark-100 rounded-full px-5 py-2 font-medium transition-all duration-300;
				&:hover {
					@apply bg-zinc-200;
				}
			}
		}
	}
</style>
