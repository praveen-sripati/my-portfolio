<script lang="ts">
	import alluAvif from '$lib/assets/images/allu.avif';
	import alluWebp from '$lib/assets/images/allu.webp';
	import alluPng from '$lib/assets/images/allu.png';
	import { handleKeyPress, handleSmoothScrolling } from '$lib/utils/helpers';
</script>

<section class="ps-project ps-section">
	<div class="ps-project__bg">
		<div class="ps-project__container ps-container ps-grid">
			<div class="ps-project__data">
				<h2 class="ps-project__title">You have a new project</h2>
				<p class="ps-project__description">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum commodi maiores obcaecati
					eius unde beatae temporibus, praesentium aliquid rerum doloremque minima. Tenetur quisquam
					ab veniam, necessitatibus facilis quia. Quo, ad.
				</p>
				<a
					href="#contact"
					class="ps-button ps-button__flex ps-button__white"
					on:click={handleSmoothScrolling}
					on:keypress={handleKeyPress}
					aria-label="Jump to contact me section"
				>
					Contact Me
					<i class="uil uil-message ps-project__icon ps-button__icon" />
				</a>
			</div>
			<picture class="ps-project__img">
				<source srcset={alluAvif} type="image/avif" width=232 height=348 />
				<source srcset={alluWebp} type="image/webp" width=232 height=348 />
				<img src={alluPng} alt="projects" width=232 height=348 />
			</picture>
		</div>
	</div>
</section>

<style lang="scss">
	.ps-project {
		@apply text-center tablet:text-left;
	}

	.ps-project__container {
		@apply mobile-lg:grid-cols-2 tablet:bg-ps-first-color-second tablet:rounded-2xl tablet:pt-12 tablet:px-10 tablet:pb-12 tablet:grid-cols-[1fr_max-content] tablet:gap-x-12;
	}

	.ps-project__bg {
		@apply bg-ps-first-color pt-12 tablet:bg-transparent;
	}

	.ps-project__title {
		@apply text-ps-h2-font-size mb-3;
	}

	.ps-project__description {
		@apply mb-6;
	}

	.ps-project__title,
	.ps-project__description {
		@apply text-white;
	}

	.ps-project__img {
		@apply w-[232px] justify-self-center mobile-sm:w-[200px];
	}

	.ps-project__data {
		@apply tablet:pt-3;
	}
</style>
