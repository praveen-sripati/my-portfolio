<script>
	import { clickOutside } from '$lib/utils/clickOutside';
	import { fly, fade } from 'svelte/transition';

	let showUIUXModal = false;
	let showFrontendModal = false;
	let showBrandingModal = false;

	// @ts-ignore-next-line
	function handleKeyPressModalVisibility(event, modalName) {
		event.preventDefault();
		if (event.keyCode == 32) {
			if (modalName == 'uiux') showUIUXModal = true;
			if (modalName == 'frontend') showFrontendModal = true;
			if (modalName == 'branding') showBrandingModal = true;
		}
		if (event.keyCode == 27) {
			showUIUXModal = false;
			showBrandingModal = false;
			showFrontendModal = false;
		}
	}

	// @ts-ignore-next-line
	function handleKeyPressModalClose(event) {
		event.preventDefault();
		if (event.keyCode == 32) {
			showUIUXModal = false;
			showBrandingModal = false;
			showFrontendModal = false;
		}
	}

	// @ts-ignore-next-line
	function handleWindowKeypress(event) {
		event.preventDefault();
		if (event.keyCode == 27) {
			console.log('something');
			showUIUXModal = false;
			showBrandingModal = false;
			showFrontendModal = false;
		}
	}
</script>

<section class="ps-services ps-section" id="services">
	<h1 class="ps-section__title">Services</h1>
	<span class="ps-section__subtitle">What i offer</span>

	<div class="ps-services__container ps-container ps-grid">
		<!-- Services 1 -->
		<div class="ps-services__content">
			<div>
				<i class="uil uil-web-grid ps-services__icon" />
				<h3 class="ps-services__title">UI/UX <br /> Designer</h3>
			</div>
			<span
				class="ps-button ps-button__flex ps-button__small ps-button__link ps-services__button"
				on:click={() => (showUIUXModal = true)}
				on:keypress={(e) => handleKeyPressModalVisibility(e, 'uiux')}
				role="button"
				tabindex="0"
			>
				View More
				<i class="uil uil-arrow-right ps-button__icon" />
			</span>
			{#if showUIUXModal}
				<div
					class="ps-services__modal"
					role="dialog"
					on:keypress={(e) => handleKeyPressModalClose(e)}
					transition:fade
				>
					<div
						class="ps-services__modal-content"
						use:clickOutside
						on:outclick={() => (showUIUXModal = false)}
						transition:fly={{ y: 50 }}
					>
						<h4 class="ps-services__modal-title">Ui/Ux <br /> Designer</h4>
						<i
							class="uil uil-times ps-services__modal-close"
							role="button"
							tabindex="0"
							on:click={() => (showUIUXModal = false)}
							on:keypress={(e) => handleKeyPressModalClose(e)}
						/>
						<ul class="ps-services__modal-services ps-grid">
							<li class="ps-services__modal-service">
								<i class="uil uil-check-circle ps-services__modal-icon" />
								<p>I develop the user interface</p>
							</li>
							<li class="ps-services__modal-service">
								<i class="uil uil-check-circle ps-services__modal-icon" />
								<p>I develop the user interface</p>
							</li>
							<li class="ps-services__modal-service">
								<i class="uil uil-check-circle ps-services__modal-icon" />
								<p>I develop the user interface</p>
							</li>
							<li class="ps-services__modal-service">
								<i class="uil uil-check-circle ps-services__modal-icon" />
								<p>I develop the user interface</p>
							</li>
						</ul>
					</div>
				</div>
			{/if}
		</div>

		<!-- Services 2 -->
		<div class="ps-services__content">
			<div>
				<i class="uil uil-arrow ps-services__icon" />
				<h3 class="ps-services__title">Frontend <br /> Developer</h3>
			</div>
			<span
				class="ps-button ps-button__flex ps-button__small ps-button__link ps-services__button"
				on:click={() => (showFrontendModal = true)}
				on:keypress={(e) => handleKeyPressModalVisibility(e, 'frontend')}
				role="button"
				tabindex="0"
			>
				View More
				<i class="uil uil-arrow-right ps-button__icon" />
			</span>
			{#if showFrontendModal}
				<div class="ps-services__modal" role="dialog" transition:fade>
					<div
						class="ps-services__modal-content"
						use:clickOutside
						on:outclick={() => (showFrontendModal = false)}
						transition:fly={{ y: 50 }}
					>
						<h4 class="ps-services__modal-title">Frontend <br /> Developer</h4>
						<i
							class="uil uil-times ps-services__modal-close"
							role="button"
							tabindex="0"
							on:click={() => (showFrontendModal = false)}
							on:keypress={(e) => handleKeyPressModalClose(e)}
						/>
						<ul class="ps-services__modal-services ps-grid">
							<li class="ps-services__modal-service">
								<i class="uil uil-check-circle ps-services__modal-icon" />
								<p>I develop the user interface</p>
							</li>
							<li class="ps-services__modal-service">
								<i class="uil uil-check-circle ps-services__modal-icon" />
								<p>I develop the user interface</p>
							</li>
							<li class="ps-services__modal-service">
								<i class="uil uil-check-circle ps-services__modal-icon" />
								<p>I develop the user interface</p>
							</li>
							<li class="ps-services__modal-service">
								<i class="uil uil-check-circle ps-services__modal-icon" />
								<p>I develop the user interface</p>
							</li>
						</ul>
					</div>
				</div>
			{/if}
		</div>

		<!-- Services 3 -->
		<div class="ps-services__content">
			<div>
				<i class="uil uil-pen ps-services__icon" />
				<h3 class="ps-services__title">Branding <br /> Designer</h3>
			</div>
			<span
				class="ps-button ps-button__flex ps-button__small ps-button__link ps-services__button"
				on:click={() => (showBrandingModal = true)}
				on:keypress={(e) => handleKeyPressModalVisibility(e, 'branding')}
				role="button"
				tabindex="0"
			>
				View More
				<i class="uil uil-arrow-right ps-button__icon" />
			</span>
			{#if showBrandingModal}
				<div class="ps-services__modal" role="dialog" transition:fade>
					<div
						class="ps-services__modal-content"
						use:clickOutside
						on:outclick={() => (showBrandingModal = false)}
						transition:fly={{ y: 50 }}
					>
						<h4 class="ps-services__modal-title">Branding <br /> Designer</h4>
						<i
							class="uil uil-times ps-services__modal-close"
							role="button"
							tabindex="0"
							on:click={() => (showBrandingModal = false)}
							on:keypress={(e) => handleKeyPressModalClose(e)}
						/>
						<ul class="ps-services__modal-services ps-grid">
							<li class="ps-services__modal-service">
								<i class="uil uil-check-circle ps-services__modal-icon" />
								<p>I develop the user interface</p>
							</li>
							<li class="ps-services__modal-service">
								<i class="uil uil-check-circle ps-services__modal-icon" />
								<p>I develop the user interface</p>
							</li>
							<li class="ps-services__modal-service">
								<i class="uil uil-check-circle ps-services__modal-icon" />
								<p>I develop the user interface</p>
							</li>
							<li class="ps-services__modal-service">
								<i class="uil uil-check-circle ps-services__modal-icon" />
								<p>I develop the user interface</p>
							</li>
						</ul>
					</div>
				</div>
			{/if}
		</div>
	</div>
</section>

<style lang="scss">
	.ps-services__container {
		@apply gap-6 grid-cols-2 mobile-sm:grid-cols-[max-content] mobile-sm:justify-center tablet:grid-cols-3 tablet:justify-center desktop:gap-10;
	}

	.ps-services__content {
		@apply relative bg-ps-container-color pt-14 pr-2 pb-5 pl-6 rounded-md shadow-lg duration-300 mobile-sm:pr-14 tablet:pt-24 tablet:pr-0 tablet:pb-8 tablet:pl-10;
		&:hover {
			@apply shadow-xl;
		}
	}

	.ps-services__icon {
		@apply block text-2xl text-ps-first-color tablet:text-4xl;
	}

	.ps-services__title {
		@apply text-ps-h3-font-size mb-4 font-medium;
	}

	.ps-services__button {
		@apply cursor-pointer text-ps-small-font-size;
		&:hover .ps-button__icon {
			@apply translate-x-1;
		}
	}

	.ps-services__modal {
		@apply fixed top-0 right-0 bottom-0 left-0 bg-black/50 flex items-center justify-center py-0 px-4 z-[1000] duration-300 mobile-sm:px-2 mobile-sm:py-0;
	}

	.ps-services__modal-content {
		@apply relative bg-ps-container-color p-6 rounded-lg;
	}

	.ps-services__modal-services {
		@apply gap-x-4;
	}

	.ps-services__modal-service {
		@apply flex;
	}

	.ps-services__modal-title {
		@apply text-ps-h3-font-size font-medium mb-6;
	}

	.ps-services__modal-close {
		@apply absolute top-4 right-4 text-2xl text-ps-first-color cursor-pointer;
	}

	.ps-services__modal-icon {
		@apply text-ps-first-color mr-1;
	}
</style>
