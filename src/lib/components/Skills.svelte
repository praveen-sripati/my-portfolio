<script lang="ts">
	import { Accordion, AccordionItem } from '$lib/components/accordion/index';

	// For retaining the state of inner accordions
	// (The use of #if resets everything otherwise)
	let accordionState = {
		current: 0
	};
</script>

<section class="ps-skills ps-section" id="skills">
	<h2 class="ps-section__title">Skills</h2>
	<span class="ps-section__subtitle">My technical level</span>
	<div class="ps-skills__container ps-container ps-grid">
		<div>
			<!-- Skills 1 -->
			<div class="ps-skills__content">
				<Accordion bind:current={accordionState.current}>
					<AccordionItem key={0}>
						<svelte:fragment slot="head">
							<div class="ps-skills__header">
								<i class="uil uil-brackets-curly ps-skills__icon" />
								<div>
									<h1 class="ps-skills__title">Frontend developer</h1>
									<span class="ps-skills__subtitle">More than 2 years</span>
								</div>
								<i
									class="uil uil-angle-down ps-skills__arrow {accordionState.current === 0
										? 'ps-skills__arrow-rotate-up'
										: ''}"
								/>
							</div>
						</svelte:fragment>
						<svelte:fragment slot="details">
							<div class="ps-skills__list ps-grid">
								<div class="ps-skills__data">
									<div class="ps-skills__titles">
										<h3 class="ps-skills__name">HTML</h3>
										<span class="ps-skills__number">90%</span>
									</div>
									<div class="ps-skills__bar">
										<span class="ps-skills__percentage ps-skills__html" />
									</div>
								</div>
								<div class="ps-skills__data">
									<div class="ps-skills__titles">
										<h3 class="ps-skills__name">CSS</h3>
										<span class="ps-skills__number">80%</span>
									</div>
									<div class="ps-skills__bar">
										<span class="ps-skills__percentage ps-skills__css" />
									</div>
								</div>
								<div class="ps-skills__data">
									<div class="ps-skills__titles">
										<h3 class="ps-skills__name">Javascript</h3>
										<span class="ps-skills__number">60%</span>
									</div>
									<div class="ps-skills__bar">
										<span class="ps-skills__percentage ps-skills__js" />
									</div>
								</div>
								<div class="ps-skills__data">
									<div class="ps-skills__titles">
										<h3 class="ps-skills__name">Angular</h3>
										<span class="ps-skills__number">75%</span>
									</div>
									<div class="ps-skills__bar">
										<span class="ps-skills__percentage ps-skills__angular" />
									</div>
								</div>
							</div>
						</svelte:fragment>
					</AccordionItem>
				</Accordion>
			</div>

			<!-- Skills 2 -->
			<div class="ps-skills__content">
				<Accordion bind:current={accordionState.current}>
					<AccordionItem key={1}>
						<svelte:fragment slot="head">
							<div class="ps-skills__header">
								<i class="uil uil-server-network ps-skills__icon" />
								<div>
									<h1 class="ps-skills__title">Backend developer</h1>
									<span class="ps-skills__subtitle">Fresher</span>
								</div>
								<i class="uil uil-angle-down ps-skills__arrow {accordionState.current === 1
                  ? 'ps-skills__arrow-rotate-up'
                  : ''}" />
							</div>
						</svelte:fragment>
						<svelte:fragment slot="details">
							<div class="ps-skills__list ps-grid">
								<div class="ps-skills__data">
									<div class="ps-skills__titles">
										<h3 class="ps-skills__name">PHP</h3>
										<span class="ps-skills__number">10%</span>
									</div>
									<div class="ps-skills__bar">
										<span class="ps-skills__percentage ps-skills__php" />
									</div>
								</div>
								<div class="ps-skills__data">
									<div class="ps-skills__titles">
										<h3 class="ps-skills__name">Node.js</h3>
										<span class="ps-skills__number">60%</span>
									</div>
									<div class="ps-skills__bar">
										<span class="ps-skills__percentage ps-skills__nodejs" />
									</div>
								</div>
								<div class="ps-skills__data">
									<div class="ps-skills__titles">
										<h3 class="ps-skills__name">Firebase</h3>
										<span class="ps-skills__number">50%</span>
									</div>
									<div class="ps-skills__bar">
										<span class="ps-skills__percentage ps-skills__firebase" />
									</div>
								</div>
								<div class="ps-skills__data">
									<div class="ps-skills__titles">
										<h3 class="ps-skills__name">Express</h3>
										<span class="ps-skills__number">65%</span>
									</div>
									<div class="ps-skills__bar">
										<span class="ps-skills__percentage ps-skills__express" />
									</div>
								</div>
							</div>
						</svelte:fragment>
					</AccordionItem>
				</Accordion>
			</div>

			<!-- Skills 3 -->
			<div class="ps-skills__content">
				<Accordion bind:current={accordionState.current}>
					<AccordionItem key={2}>
						<svelte:fragment slot="head">
							<div class="ps-skills__header">
								<i class="uil uil-swatchbook ps-skills__icon" />
								<div>
									<h1 class="ps-skills__title">Design Tools</h1>
									<span class="ps-skills__subtitle">More than 2 years</span>
								</div>
								<i class="uil uil-angle-down ps-skills__arrow {accordionState.current === 2
                  ? 'ps-skills__arrow-rotate-up'
                  : ''}" />
							</div>
						</svelte:fragment>
						<svelte:fragment slot="details">
							<div class="ps-skills__list ps-grid">
								<div class="ps-skills__data">
									<div class="ps-skills__titles">
										<h3 class="ps-skills__name">Figma</h3>
										<span class="ps-skills__number">80%</span>
									</div>
									<div class="ps-skills__bar">
										<span class="ps-skills__percentage ps-skills__figma" />
									</div>
								</div>
								<div class="ps-skills__data">
									<div class="ps-skills__titles">
										<h3 class="ps-skills__name">Sketch</h3>
										<span class="ps-skills__number">35%</span>
									</div>
									<div class="ps-skills__bar">
										<span class="ps-skills__percentage ps-skills__sketch" />
									</div>
								</div>
								<div class="ps-skills__data">
									<div class="ps-skills__titles">
										<h3 class="ps-skills__name">Photoshop</h3>
										<span class="ps-skills__number">60%</span>
									</div>
									<div class="ps-skills__bar">
										<span class="ps-skills__percentage ps-skills__photoshop" />
									</div>
								</div>
							</div>
						</svelte:fragment>
					</AccordionItem>
				</Accordion>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.ps-skills__container {
		@apply gap-y-0;
	}

	.ps-skills__header {
		@apply flex items-center mb-10 cursor-pointer;
	}

	.ps-skills__icon,
	.ps-skills__arrow {
		@apply text-4xl text-ps-first-color;
	}

	.ps-skills__icon {
		@apply mr-3;
	}

	.ps-skills__title {
		@apply text-ps-h3-font-size;
	}

	.ps-skills__subtitle {
		@apply text-ps-small-font-size text-ps-text-color-light;
	}

	.ps-skills__arrow {
		@apply ml-auto duration-[400ms];
	}

	.ps-skills__list {
		@apply gap-y-6 pl-11;
	}

	.ps-skills__titles {
		@apply flex justify-between mb-2;
	}

	.ps-skills__name {
		@apply text-ps-normal-font-size font-medium;
	}

	.ps-skills__bar,
	.ps-skills__percentage {
		@apply h-[5px] rounded-md;
	}

	.ps-skills__bar {
		@apply bg-ps-first-color-lighter;
	}

	.ps-skills__percentage {
		@apply block bg-ps-first-color;
	}

	.ps-skills__html {
		@apply w-[90%];
	}

	.ps-skills__css {
		@apply w-[80%];
	}

	.ps-skills__js {
		@apply w-[60%];
	}

	.ps-skills__angular {
		@apply w-[75%];
	}

	.ps-skills__php {
		@apply w-[10%];
	}

	.ps-skills__nodejs {
		@apply w-[60%];
	}

	.ps-skills__firebase {
		@apply w-[50%];
	}

	.ps-skills__express {
		@apply w-[65%];
	}

	.ps-skills__figma {
		@apply w-[80%];
	}

	.ps-skills__sketch {
		@apply w-[35%];
	}

	.ps-skills__photoshop {
		@apply w-[60%];
	}

	.ps-skills__arrow-rotate-up {
		@apply -rotate-180;
	}
</style>
