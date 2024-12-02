<script>
	import Button from '$lib/components/elements/Button.svelte';
</script>

<main class="main-wrapper bg-primary-800 ">
	<main class="grid grid-cols-2 gap-16">
		<section class="left-content">
			<h1 class="label">Download App</h1>
			<article>
				<h2>Get Started With Fudo Today!</h2>
				<p>
					Discover food wherever and whenever you want and get your food delivered on time,
					everytime.
				</p>
				<Button label="Get The App" customClass="w-fit py-4 px-6" />
			</article>
		</section>
		<section class="right-content">
      <figure>
        <img src="/images/mockupfudo.png" class="pt-16" alt="">
      </figure>
    </section>
	</main>
</main>

<style scoped>
	.left-content {
		@apply flex flex-col gap-2 my-auto;
    .label {
      @apply text-primary-100 text-2xl font-medium uppercase;
    }
    article {
      @apply flex flex-col gap-8;
    }
		h2 {
			@apply text-[3rem] font-semibold leading-[140%];
		}
	}
  .right-content {
    @apply mt-auto;
  }
</style>
