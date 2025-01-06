<script>
	import { page } from '$app/stores';
	// @ts-ignore
	import Button from '$lib/components/elements/Button.svelte';

	// rective variable
	let navToggle = $state(false);
	let btn_dark = writable(false);
	// function to toggle navigation
	const toggleNav = () => {
		navToggle = !navToggle;
		// set body overflow to hidden
		document.body.style.overflow = navToggle ? 'hidden' : 'auto';
	};

	const menuafterClick = () => {
		navToggle = false;
		document.body.style.overflow = 'auto';
	};

	import { gsap as blender } from 'gsap';
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import Transition from '../elements/Transition.svelte';

	const handleHover = ({ target }) => {
		blender.to(target, {
			y: 200,
			x: 70,
			rotation: 180,
			opacity: 0.4,
			duration: 2,
			ease: 'bounce.out'
		});
	};
	const handleTroll = ({ target }) => {
		blender.to(target, {
			y: -200,
			x: -500,
			rotation: 0,
			duration: 1,
			ease: 'bounce.out',
			display: 'none'
		});
		// ubah btn_dark menjadi true
		btn_dark.update((n) => !n);
		console.log($btn_dark);
	};
	if ($btn_dark) {
		onMount(() => {
			blender.fromTo(
				'#btn2',
				{
					y: -40,
					opacity: 0
				},
				{
					y: 0,
					opacity: 1,
					duration: 1,
					ease: 'power4.in'
				}
			);
		});
	}
</script>

<nav class="navbar z-[9999] {navToggle ? 'border-b border-zinc-300' : ''} ">
	<figure
		class="mr-auto"
		onmousemove={handleHover({ target: '#fudo' })}
		aria-hidden="true"
		onclick={handleTroll({ target: '#fudo' })}
	>
		<img src="/images/fudologo.png" alt="" id="fudo" />
	</figure>
	<ul class="hidden items-center md:flex xl:gap-8">
		<li>
			<Transition btn_title="Why Fudo" href="/" id="home"></Transition>
		</li>
		<li>
			<Transition btn_title="Services" href="/services" id="service"></Transition>
		</li>
		<li>
			<Transition btn_title="Menu" href="/menu" id="menu"></Transition>
		</li>
		<li aria-current={$page.url.pathname === '/contact' ? 'page' : undefined}>
			<Transition btn_title="Contact" href="/contact" id="contact"></Transition>
		</li>
	</ul>
	<div
		id="btn"
		aria-hidden="true"
		onmousemove={handleHover({ target: '#btn' })}
		onclick={() => handleTroll({ target: '#btn' })}
		class="__btn-wrapper ml-auto hidden md:flex"
	>
		<Button label="login" customClass="gap-4 rounded-full py-3 px-5 "
			><svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M4 15H6V20H18V4H6V9H4V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V15ZM10 11V8L15 12L10 16V13H2V11H10Z"
					fill="white"
				/>
			</svg>
			Login
		</Button>
	</div>
	{#if $btn_dark}
		<div class="__btn-wrapper ml-auto hidden md:flex" id="btn2">
			<Button label="login" customClass="gap-4 rounded-full py-3 px-5 bg-gray-800 border-gray-400"
				><svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M4 15H6V20H18V4H6V9H4V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V15ZM10 11V8L15 12L10 16V13H2V11H10Z"
						fill="white"
					/>
				</svg>
				Login
			</Button>
		</div>
	{/if}
	<section>
		<button
			class="z-[9999] mt-1.5 text-primary-100 md:hidden"
			aria-label="Toggle navigation"
			onclick={toggleNav}
		>
			{#if !navToggle}
				<svg xmlns="http://www.w3.org/2000/svg" width="1.8em" height="1.8em" viewBox="0 0 24 24"
					><path
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1.5"
						d="M20 12H10m10-7H4m16 14H4"
						color="currentColor"
					/></svg
				>
			{:else}
				<svg xmlns="http://www.w3.org/2000/svg" width="1.8em" height="1.8em" viewBox="0 0 24 24"
					><path
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1.5"
						d="m5 19l7-7m0 0l7-7m-7 7L5 5m7 7l7 7"
					/></svg
				>
			{/if}
		</button>
	</section>
</nav>
<!-- mobile navigation -->
<nav
	class="absolute left-0 top-0 -z-20 block h-dvh w-full bg-white transition-all duration-300 md:hidden
{navToggle ? 'translate-y-0 opacity-100' : 'translate-y-[-150%] opacity-0'}"
>
	<ul class="__nav-mobilemenu">
		<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
			<a href="/" onclick={menuafterClick}>Why Fudo</a>
		</li>
		<li aria-current={$page.url.pathname === '/services' ? 'page' : undefined}>
			<a href="/services" onclick={menuafterClick}>Services</a>
		</li>
		<li aria-current={$page.url.pathname.startsWith('/menu') ? 'page' : undefined}>
			<a href="/menu" onclick={menuafterClick}>Menu</a>
		</li>
		<li aria-current={$page.url.pathname === '/contact' ? 'page' : undefined}>
			<a href="/contact" onclick={menuafterClick}>Contact</a>
		</li>
	</ul>
</nav>

<style scoped>
	.navbar {
		@apply flex w-full items-center justify-center px-4 py-3 md:p-4;

		figure {
			img {
				@apply aspect-square h-10 md:h-12;
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
				@apply rounded-full px-5 py-2 font-medium text-dark-100 transition-all duration-300;
				&:hover {
					@apply bg-zinc-200;
				}
			}
		}
	}

	/* mobile nav */
	.__nav-mobilemenu {
		@apply flex flex-col items-center justify-center bg-white pt-24 font-semibold;

		li[aria-current='page'] {
			a {
				@apply text-primary-100;
			}
		}
		li {
			@apply flex w-full justify-center;
		}
		a {
			@apply w-2/3 border-b border-zinc-300 py-4 text-zinc-500 transition-all duration-300 hover:text-primary-100;
		}
	}
</style>
