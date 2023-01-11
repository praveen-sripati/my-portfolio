<script>
	import homeBlobImg from '$lib/assets/images/allu.png';
	import { handleKeyPress, handleSmoothScrolling } from '$lib/utils/helpers';
</script>

<section class="ps-home ps-section" id="home">
	<div class="ps-home__container ps-container ps-grid">
		<div class="ps-home__content ps-grid">
			<div class="ps-home__social">
				<a
					href="https://www.linkedin.com/"
					class="ps-home__social-icon"
					target="_blank"
					rel="noreferrer"
					aria-label="Praveen's linkedIn link"
				>
					<i class="uil uil-linkedin-alt" />
				</a>
				<a
					href="https://github.com/"
					aria-label="Praveen's github link"
					class="ps-home__social-icon"
					target="_blank"
					rel="noreferrer"
				>
					<i class="uil uil-github-alt" />
				</a>
				<a
					aria-label="Praveen's instagram link"
					href="https://www.instagram.com/"
					class="ps-home__social-icon"
					target="_blank"
					rel="noreferrer"
				>
					<i class="uil uil-instagram" />
				</a>
			</div>
			<div class="ps-home__img">
				<svg
					class="ps-home__blob"
					viewBox="0 0 200 187"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
				>
					<mask id="mask0" style="mask-type:alpha">
						<path
							d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
						/>
					</mask>
					<g mask="url(#mask0)">
						<path
							d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
						/>
						<image class="ps-home__blob-img" x="0" y="-25" xlink:href={homeBlobImg} />
					</g>
				</svg>
			</div>
			<div class="ps-home__data">
				<h1 class="ps-home__title">Hi, I'am Praveen</h1>
				<h3 class="ps-home__subtitle">Hi, I'am Praveen</h3>
				<p class="ps-home__description">
					High level experience in web design and knowledge, producing quality work.
				</p>
				<a
					href="#contact"
					class="ps-button ps-button__flex"
					on:click={handleSmoothScrolling}
					on:keypress={handleKeyPress}
          aria-label="Jump to Contact Me"
				>
					Contact Me <i class="uil uil-message ps-button__icon" />
				</a>
			</div>
		</div>
		<div class="ps-home__scroll">
			<a
				href="#about"
				class="ps-home__scroll-button ps-button__flex"
				on:click={handleSmoothScrolling}
				on:keypress={handleKeyPress}
        aria-label="Scroll down to About section"
			>
				<i class="uil uil-mouse-alt ps-home__scroll-mouse" />
				<span class="ps-home__scroll-name">Scroll down</span>
				<i class="uil uil-arrow-down ps-home__scroll-arrow" />
			</a>
		</div>
	</div>
</section>

<style lang="scss">
	// Home CSS
	.ps-home__container {
		@apply gap-4 tablet:gap-y-20;
	}

	.ps-home__content {
		@apply grid-cols-[.5fr_3fr] pt-14 items-center mobile-sm:grid-cols-[.25fr_3fr] mobile-lg:grid-cols-[max-content_1fr_1fr] tablet:pt-[5.5rem] tablet:gap-x-8;
	}

	.ps-home__social {
		@apply grid grid-cols-[max-content] gap-y-4 desktop:-translate-x-24;
	}

	.ps-home__social-icon {
		@apply text-xl text-ps-first-color;
	}

	.ps-home__social-icon:hover {
		@apply text-ps-first-color-alt;
	}

	.ps-home__blob {
		@apply w-[200px] fill-ps-first-color mobile-sm:w-[180px] tablet:w-[270px] desktop:w-[320px];
	}

	.ps-home__blob-img {
		@apply w-[170px];
	}

	.ps-home__data {
		@apply col-[1_/_3] mobile-lg:col-[initial];
	}

	.ps-home__title {
		@apply text-ps-big-font-size;
	}

	.ps-home__subtitle {
		@apply text-ps-h3-font-size text-ps-text-color font-medium mb-3;
	}

	.ps-home__description {
		@apply mb-8;
	}

	.ps-home__scroll {
		@apply hidden tablet:block;
	}

	.ps-home__scroll-button {
		@apply text-ps-first-color duration-300 tablet:ml-12;
	}

	.ps-home__scroll-button:hover {
		@apply translate-y-1;
	}

	.ps-home__scroll-mouse {
		@apply text-[2rem];
	}

	.ps-home__scroll-name {
		@apply text-ps-small-font-size text-ps-title-color font-medium mr-1;
	}

	.ps-home__scroll-arrow {
		@apply text-xl;
	}

	.ps-home__img {
		@apply mobile-lg:order-1 justify-self-center;
	}
</style>
