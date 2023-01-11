<section class="ps-contact ps-section" id="contact">
	<h2 class="ps-section__title">Contact Me</h2>
	<span class="ps-section__subtitle">Get in touch</span>
	<div class="ps-contact__container ps-container ps-grid">
		<div>
			<div class="ps-contact__information">
				<i class="uil uil-phone ps-contact__icon" />
				<div>
					<h3 class="ps-contact__title">Call Me</h3>
					<span class="ps-contact__subtitle">+999-999-999</span>
				</div>
			</div>
			<div class="ps-contact__information">
				<i class="uil uil-envelope ps-contact__icon" />
				<div>
					<h3 class="ps-contact__title">Email</h3>
					<span class="ps-contact__subtitle">asdf@gmail.com</span>
				</div>
			</div>
			<div class="ps-contact__information">
				<i class="uil uil-map-marker ps-contact__icon" />
				<div>
					<h3 class="ps-contact__title">Location</h3>
					<span class="ps-contact__subtitle">Bhiwandi - Maharashtra</span>
				</div>
			</div>
		</div>
		<form action="" class="ps-contact__form ps-grid">
			<div class="ps-contact__inputs ps-grid">
				<div class="ps-contact__content">
					<label for="nameControl" class="ps-contact__label">Name</label>
					<input type="text" name="name" class="ps-contact__input" id="nameControl" />
				</div>
				<div class="ps-contact__content">
					<label for="emailControl" class="ps-contact__label">Email</label>
					<input type="email" name="email" class="ps-contact__input" id="emailControl" />
				</div>
			</div>
			<div class="ps-contact__content">
				<label for="projectControl" class="ps-contact__label">Project</label>
				<input type="text" name="project" class="ps-contact__input" id="projectControl" />
			</div>
			<div class="ps-contact__content">
				<label for="messageControl" class="ps-contact__label">Message</label>
				<textarea name="message" id="messageControl" cols="0" rows="7" class="ps-contact__input" />
			</div>

			<div>
				<a href="/" class="ps-button ps-button__flex">
					Send Message
					<i class="uil uil-message ps-button__icon" />
				</a>
			</div>
		</form>
	</div>
</section>

<style lang="scss">
	.ps-contact__container {
		@apply gap-y-12 mobile-lg:grid-cols-2;
	}

	.ps-contact__information {
		@apply flex mb-8;
	}

	.ps-contact__icon {
		@apply text-4xl text-ps-first-color mr-3;
	}

	.ps-contact__title {
		@apply text-ps-h3-font-size font-medium;
	}

	.ps-contact__subtitle {
		@apply text-ps-small-font-size text-ps-text-color-light;
	}

	.ps-contact__content {
		@apply bg-ps-input-color rounded-lg pl-3 px-4 pr-1;
	}

	.ps-contact__label {
		@apply text-ps-smaller-font-size text-ps-title-color;
	}

	.ps-contact__input {
		@apply w-full bg-ps-input-color text-ps-text-color text-ps-normal-font-size border-none outline-none pt-1 pr-2 pb-2 pl-0;
	}
</style>
