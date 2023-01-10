<script lang="ts">
	import { handleSmoothScrolling } from '$lib/utils/helpers';
	import ThemeSwitch from './ThemeSwitch.svelte';

	let showMenu = true;
	function handleMenuToggle(event: any) {
		showMenu = !showMenu;
		handleSmoothScrolling(event);
		return;
	}

	
</script>

<header class="ps-header" id="header">
	<nav class="ps-nav ps-container">
		<a href="#home" class="ps-nav__logo" on:click={handleSmoothScrolling}>Praveen</a>
		<div class="ps-nav__menu {showMenu ? 'ps-show-menu' : ''}" id="nav-menu">
			<ul class="ps-nav__list ps-grid">
				<li class="ps-nav__item">
					<a href="#home" class="ps-nav__link" on:click={handleMenuToggle}>
						<i class="uil uil-estate ps-nav__icon" /> Home
					</a>
				</li>
				<li class="ps-nav__item">
					<a href="#about" class="ps-nav__link" on:click={handleMenuToggle}>
						<i class="uil uil-user ps-nav__icon" /> About
					</a>
				</li>
				<li class="ps-nav__item">
					<a href="#skills" class="ps-nav__link" on:click={handleMenuToggle}>
						<i class="uil uil-file-alt ps-nav__icon" /> Skills
					</a>
				</li>
				<li class="ps-nav__item">
					<a href="#services" class="ps-nav__link" on:click={handleMenuToggle}>
						<i class="uil uil-briefcase-alt ps-nav__icon" /> Services
					</a>
				</li>
				<li class="ps-nav__item">
					<a href="#portfolio" class="ps-nav__link" on:click={handleMenuToggle}>
						<i class="uil uil-scenery ps-nav__icon" /> Portfolio
					</a>
				</li>

				<li class="ps-nav__item">
					<a href="#contact" class="ps-nav__link" on:click={handleMenuToggle}>
						<i class="uil uil-message ps-nav__icon" /> Contact me
					</a>
				</li>
			</ul>
			<i class="uil uil-times ps-nav__close" id="ps-nav-close" on:click={handleMenuToggle} />
		</div>
		<div class="ps-nav__btns">
			<!-- Theme select input -->
			<ThemeSwitch />
			<div class="ps-nav__toggle" id="ps-nav-toggle" on:click={handleMenuToggle}>
				<i class="uil uil-apps" />
			</div>
		</div>
	</nav>
</header>

<style lang="scss">
	.ps-header {
		@apply fixed bottom-0 left-0 w-full z-[100] bg-ps-body-color tablet:top-0 tablet:bottom-[initial] tablet:py-0 tablet:px-4 desktop:p-0;
	}

	.ps-nav {
		@apply max-w-5xl h-12 flex justify-between items-center;
	}

	.ps-nav__logo,
	.ps-nav__toggle {
		@apply text-ps-title-color font-medium;
	}

	.ps-nav__logo:hover {
		@apply text-ps-first-color;
	}

	.ps-nav__toggle {
		@apply text-xl cursor-pointer tablet:hidden;
	}
	.ps-nav__toggle:hover {
		@apply text-ps-first-color;
	}

	.ps-nav__menu {
		@apply fixed bottom-0 left-0 w-[100%] bg-ps-body-color pl-8 py-6 pr-16 rounded-t-[2rem] rounded-b-none duration-[.3s] bottom-[-100%] z-10 mobile-sm:px-1 mobile-sm:pt-8 mobile-sm:pb-16 tablet:ml-auto tablet:static tablet:bg-transparent;
		box-shadow: 0 -1px 4px rgba($color: #000000, $alpha: 0.15);
	}

	.ps-nav__list {
		@apply grid-cols-3 gap-8 mobile-sm:gap-x-0 tablet:flex tablet:gap-x-8;
	}
	.ps-nav__link {
		@apply flex flex-col items-center font-medium text-ps-title-color text-ps-small-font-size;
	}

	.ps-nav__link:hover {
		@apply text-ps-first-color;
	}

	.ps-nav__icon {
		@apply text-xl tablet:hidden;
	}

	.ps-nav__close {
		@apply absolute right-5 bottom-2 text-2xl cursor-pointer text-ps-first-color tablet:hidden;
	}

	.ps-nav__close:hover {
		@apply text-ps-first-color-alt;
	}

	.ps-show-menu {
		@apply bottom-0;
	}

	.ps-nav__btns {
		@apply flex gap-2;
	}

	@media screen and (min-width: 768px) {
		.ps-nav {
			height: calc(4.5rem);
			column-gap: 1rem;
		}

		.ps-nav__menu {
			box-shadow: none;
		}
	}
</style>
