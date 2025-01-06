<script>
	import { goto } from '$app/navigation';
	import { gsap as blender } from 'gsap';
	import { onMount } from 'svelte';

	export let href;
	export let btn_title = 'btn';
	export let id;

	let griditems = 180;
	let elements = Array;
	// @ts-ignore
	let tl;

	onMount(() => {
		// Pisahkan elemen dan timeline untuk setiap komponen
		// @ts-ignore
		elements = Array.from(document.querySelectorAll(`#grid-item${id}`));
		blender.set(`#grid-container${id}`, { display: 'none', opacity: 0 });
		tl = blender.timeline({
			paused: true
		});

		// Animasi masuk elemen
		tl.from(elements, {
			duration: 1,
			opacity: 0,
			scale: 0,
			stagger: {
				amount: 1.5,
				from: 'random'
			},
			ease: 'power4.out',
			onUpdate: updateBorders,
			onStart: () => {
				blender.set(`#grid-container${id}`, { display: 'grid', opacity: 1 });
			}
		});
		tl.add('endOfFrom');

		// Animasi keluar elemen
		tl.to(elements, {
			duration: 1,
			opacity: 0,
			scale: 0,
			stagger: {
				amount: 1.8,
				from: 'random'
			},
			ease: 'power4.out',
			onUpdate: updateBorders,
			onComplete: () => {
				blender.set(`#grid-container${id}`, { display: 'none', opacity: 0 });
			}
		});
	});

	// Fungsi untuk memperbarui border
	function updateBorders() {
		// @ts-ignore
		elements.forEach((el, index) => {
			// @ts-ignore
			const scale = blender.getProperty(el, 'scale');
			const neighbors = getNeighbors(index, elements);

			el.style.borderWidth = '0';
			el.style.borderColor = 'red';

			// Tetapkan border sesuai kondisi
			if (neighbors.right && blender.getProperty(neighbors.right, 'scale') !== 1) {
				el.style.borderRightWidth = '2px';
			}
			if (neighbors.left && blender.getProperty(neighbors.left, 'scale') !== 1) {
				el.style.borderLeftWidth = '2px';
			}
			if (neighbors.top && blender.getProperty(neighbors.top, 'scale') !== 1) {
				el.style.borderTopWidth = '2px';
			}
			if (neighbors.bottom && blender.getProperty(neighbors.bottom, 'scale') !== 1) {
				el.style.borderBottomWidth = '2px';
			}
		});
	}

	// Fungsi untuk mendapatkan tetangga (grid 20 kolom)
	// @ts-ignore
	function getNeighbors(index, items) {
		const cols = 20; // Jumlah kolom
		return {
			left: index % cols !== 0 ? items[index - 1] : null,
			right: (index + 1) % cols !== 0 ? items[index + 1] : null,
			top: index >= cols ? items[index - cols] : null,
			bottom: index < items.length - cols ? items[index + cols] : null
		};
	}

	// @ts-ignore
	function handleClick(event, targetUrl) {
		event.preventDefault(); 
		// @ts-ignore
		tl.play();
		// @ts-ignore
		tl.call(
			() => {
				// @ts-ignore
				goto(targetUrl);
			},
			null,
			'endOfFrom'
		);
		// @ts-ignore
		tl.restart();
	}
</script>

<main
	class="absolute left-0 top-0 z-50 grid h-screen w-full"
	style="grid-template-columns: repeat(20, 1fr);"
	id="grid-container{id}"
>
	{#each Array(griditems) as _, i}
		<div class="flex items-center justify-center bg-gray-950" id="grid-item{id}"></div>
	{/each}
</main>

<a
	{href}
	aria-label="btn"
	on:click={(e) => handleClick(e, href)}
	class="rounded-full px-4 py-2 text-dark-100 transition-all hover:text-primary-100">{btn_title}</a
>


<style>
</style>
