<script lang="ts">
	import { NavBar, Footer } from '$lib/components/index';
	import '../app.css';

	function handleScrollUp(event: any) {
		event.preventDefault();
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
		return;
	}
</script>

<NavBar />

<main>
	<slot />
</main>

<Footer />

<a
	href="/"
	id="scroll-up"
	class="ps-scrollup"
	on:click={handleScrollUp}
	on:keypress={handleScrollUp}
	rel="noreferrer"
  aria-label="Scroll upto top of the page"
>
	<i class="uil uil-arrow-up ps-scrollup__icon" />
</a>
