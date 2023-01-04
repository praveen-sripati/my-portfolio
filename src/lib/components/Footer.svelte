<footer class="ps-footer">
	<div class="ps-footer__bg">
		<div class="ps-footer__container ps-container ps-grid">
			<div>
				<h1 class="ps-footer__title">Praveen</h1>
				<div class="ps-footer__subtitle">Frontend web developer</div>
			</div>
			<ul class="ps-footer__links">
				<li>
					<a href="#services" class="ps-footer__link">Services</a>
        </li>
        <li>
					<a href="#portfolio" class="ps-footer__link">Portfolio</a>
        </li>
        <li>
					<a href="#contact" class="ps-footer__link">Contact me</a>
        </li>
			</ul>
			<div class="ps-footer__socials">
				<a href="https://www.facebook.com" rel="noreferrer" target="_blank" class="ps-footer__social">
					<i class="uil uil-facebook-f"></i>
				</a>
				<a href="https://www.instagram.com" rel="noreferrer" target="_blank" class="ps-footer__social">
					<i class="uil uil-instagram"></i>
        </a>
				<a href="https://twitter.com" rel="noreferrer" target="_blank" class="ps-footer__social">
					<i class="uil uil-twitter-alt"></i>
        </a>
			</div>
		</div>
    <p class="ps-footer__copy">&#169; Praveen. All rights reserved</p>
	</div>
</footer>

<style lang="scss">
  .ps-footer {
    @apply pt-8;
  }
  .ps-footer__container {
    @apply gap-y-14 mobile-lg:grid-cols-2 tablet:py-0 tablet:px-4 tablet:grid-cols-3 desktop:p-0;
  }
  .ps-footer__bg {
    @apply bg-ps-first-color-second pt-8 px-0 pr-12 tablet:pt-12 tablet:py-0 tablet:pb-14;
  }
  .ps-footer__title {
    @apply text-ps-h1-font-size mb-1;
  }

  .ps-footer__subtitle {
    @apply text-ps-small-font-size;
  }

  .ps-footer__links {
    @apply flex flex-col gap-y-6 tablet:flex-row tablet:gap-x-8;
  }

  .ps-footer__links:hover {
    @apply text-ps-first-color-lighter;
  }

  .ps-footer__social {
    @apply text-xl mr-6;
  }

  .ps-footer__social:hover {
    @apply text-ps-first-color-lighter;
  }

  .ps-footer__copy {
    @apply text-ps-smaller-font-size text-center text-ps-text-color-light mt-12 tablet:mt-[4.5rem];
  }

  .ps-footer__title,
  .ps-footer__subtitle,
  .ps-footer__link,
  .ps-footer__social {
    @apply text-white;
  }
</style>
