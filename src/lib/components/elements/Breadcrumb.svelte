<script>
	export let currentpage = '';
</script>

<nav aria-label="breadcrumb">
	<ol class="breadcrumb flex items-center gap-1 text-gray-400 md:gap-2">
		<li class="breadcrumb-item"><a href="/">Home</a></li>
		<span>/</span>
		<li class="breadcrumb-item"><a href="/menu">Menu</a></li>
		<span>/</span>
		<li class="breadcrumb-item active text-primary-100" aria-current="page">{currentpage}</li>
	</ol>
</nav>

<style>
	.breadcrumb {
		@apply hidden md:block;
		.breadcrumb-item {
			@apply hover:text-dark-100 text-[0.7rem] text-gray-400 md:text-[0.9rem];

			&.active {
				@apply text-primary-100;
			}
		}
	}
</style>
