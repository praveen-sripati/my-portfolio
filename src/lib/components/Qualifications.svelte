<script lang="ts">
	import { slide } from 'svelte/transition';
	import { quintInOut } from 'svelte/easing';

	let selectedTab = 0;

	function handleTabChange(tabIndex: number) {
		selectedTab = tabIndex;
	}
</script>

<section class="ps-qualification ps-section">
	<h2 class="ps-section__title">Qualification</h2>
	<span class="ps-section__subtitle">My personal journey</span>
	<div class="ps-qualification__container ps-container">
		<div class="ps-qualification__tabs">
			<div
				class="ps-qualification__button ps-button__flex {selectedTab === 0
					? 'ps-qualification__button_active'
					: ''}"
				role="button"
				on:click={() => handleTabChange(0)}
			>
				<i class="uil uil-graduation-cap ps-qualification__icon" />
				Education
			</div>
			<div
				class="ps-qualification__button ps-button__flex {selectedTab === 1
					? 'ps-qualification__button_active'
					: ''}"
				role="button"
				on:click={() => handleTabChange(1)}
			>
				<i class="uil uil-briefcase-alt ps-qualification__icon" />
				Work
			</div>
		</div>
		<div class="ps-qualification__sections">
			{#if selectedTab == 0}
				<!-- Qualification Content 1 -->
				<div
					class="ps-qualification__content"
					transition:slide={{ duration: 300, easing: quintInOut }}
				>
					<!-- Qualification 1 -->
					<div class="ps-qualification__data">
						<div>
							<h3 class="ps-qualification__title">IT Engineer</h3>
							<span class="ps-qualification__subtitle">Mumbai - University</span>
							<div class="ps-qualification__calendar" />
							<i class="uil uil-calendar-alt" />
							2016-2020
						</div>
						<div>
							<span class="ps-qualification__rounder" />
							<span class="ps-qualification__line" />
						</div>
					</div>
					<!-- Qualification 2 -->
					<div class="ps-qualification__data">
						<div />
						<div>
							<span class="ps-qualification__rounder" />
							<span class="ps-qualification__line" />
						</div>
						<div>
							<h3 class="ps-qualification__title">Web Developer</h3>
							<span class="ps-qualification__subtitle">Mumbai - University</span>
							<div class="ps-qualification__calendar" />
							<i class="uil uil-calendar-alt" />
							2016-2020
						</div>
					</div>
					<!-- Qualification 3 -->
					<div class="ps-qualification__data">
						<div>
							<h3 class="ps-qualification__title">IT Engineer</h3>
							<span class="ps-qualification__subtitle">Mumbai - University</span>
							<div class="ps-qualification__calendar" />
							<i class="uil uil-calendar-alt" />
							2016-2020
						</div>
						<div>
							<span class="ps-qualification__rounder" />
							<span class="ps-qualification__line" />
						</div>
					</div>
					<!-- Qualification 4 -->
					<div class="ps-qualification__data">
						<div />
						<div>
							<span class="ps-qualification__rounder" />
							<!-- <span class="ps-qualification__line"></span> -->
						</div>
						<div>
							<h3 class="ps-qualification__title">UX Designer</h3>
							<span class="ps-qualification__subtitle">Mumbai - University</span>
							<div class="ps-qualification__calendar" />
							<i class="uil uil-calendar-alt" />
							2016-2020
						</div>
					</div>
				</div>
			{/if}
			{#if selectedTab == 1}
				<!-- Qualification Content 2 -->
				<div
					class="ps-qualification__content"
					transition:slide={{ duration: 300, easing: quintInOut }}
				>
					<!-- Qualification 1 -->
					<div class="ps-qualification__data">
						<div>
							<h3 class="ps-qualification__title">Software Engineer</h3>
							<span class="ps-qualification__subtitle">Mumbai - University</span>
							<div class="ps-qualification__calendar" />
							<i class="uil uil-calendar-alt" />
							2016-2020
						</div>
						<div>
							<span class="ps-qualification__rounder" />
							<span class="ps-qualification__line" />
						</div>
					</div>
					<!-- Qualification 2 -->
					<div class="ps-qualification__data">
						<div />
						<div>
							<span class="ps-qualification__rounder" />
							<span class="ps-qualification__line" />
						</div>
						<div>
							<h3 class="ps-qualification__title">Frontend Web Developer</h3>
							<span class="ps-qualification__subtitle">Mumbai - University</span>
							<div class="ps-qualification__calendar" />
							<i class="uil uil-calendar-alt" />
							2016-2020
						</div>
					</div>
					<!-- Qualification 3 -->
					<div class="ps-qualification__data">
						<div>
							<h3 class="ps-qualification__title">UI Designer</h3>
							<span class="ps-qualification__subtitle">Mumbai - University</span>
							<div class="ps-qualification__calendar" />
							<i class="uil uil-calendar-alt" />
							2016-2020
						</div>
						<div>
							<span class="ps-qualification__rounder" />
							<span class="ps-qualification__line" />
						</div>
					</div>
				</div>
			{/if}
		</div>
	</div>
</section>

<style lang="scss">
	.ps-qualification__tabs {
		@apply flex justify-evenly mb-8;
	}

	.ps-qualification__button {
		@apply text-ps-h3-font-size font-medium cursor-pointer;
	}

	.ps-qualification__button:hover {
		@apply text-ps-first-color;
	}

	.ps-qualification__button_active {
		@apply text-ps-first-color;
	}

	.ps-qualification__icon {
		@apply text-3xl mb-1;
	}

	.ps-qualification__data {
		@apply grid grid-cols-[1fr_max-content_1fr] gap-x-6;
	}

	.ps-qualification__title {
		@apply text-ps-normal-font-size font-medium;
	}

	.ps-qualification__subtitle {
		@apply inline-block text-ps-small-font-size mb-4;
	}

	.ps-qualification__calendar {
		@apply text-ps-smaller-font-size text-ps-text-color-light;
	}

	.ps-qualification__rounder {
		@apply inline-block w-3 h-3 bg-ps-first-color rounded-[50%];
	}

	.ps-qualification__line {
		@apply block w-[1px] h-full bg-ps-first-color translate-x-[6px] translate-y-[-7px];
	}
</style>
