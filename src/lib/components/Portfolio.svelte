<script lang="ts">
	import portfolio from '$lib/assets/images/allu.png';
	import { Swiper, SwiperSlide } from 'swiper/svelte';

	// Import Swiper styles
	import 'swiper/css';

	import 'swiper/css/navigation';
	import 'swiper/css/pagination';

	// import required modules
	import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';
</script>

<Swiper
	cssMode={true}
	navigation={true}
	pagination={true}
	mousewheel={true}
	keyboard={true}
	modules={[Navigation, Pagination, Mousewheel, Keyboard]}
	class="mySwiper"
>
	<SwiperSlide>Slide 1</SwiperSlide>
  <SwiperSlide>Slide 2</SwiperSlide>
  <SwiperSlide>Slide 3</SwiperSlide>
  <SwiperSlide>Slide 4</SwiperSlide>
</Swiper>

<section class="ps-portfolio ps-section">
	<h2 class="ps-section__title">Portfolio</h2>
	<span class="ps-section__subtitle">What i offer</span>
	<div class="ps-portfolio__container ps-container ps-grid">
		<div>
			<!-- Portfolio 1 -->
			<div class="ps-portfolio__content ps-grid">
				<img src={portfolio} alt="portfolio img" class="ps-portfolio__img" />
				<div class="ps-portfolio__data">
					<h3 class="ps-portfolio__title">Modern Website</h3>
					<p class="ps-portfolio__description">
						Website adaptable to all devices, with ui components and animated interactions.
					</p>
					<a href="" class="ps-button ps-button__flex ps-button__small ps-portfolio__button">
						Demo
						<i class="uil uil-arrow-right ps-button__icon" />
					</a>
				</div>
			</div>

			<!-- Portfolio 2 -->
			<div class="ps-portfolio__content ps-grid">
				<img src={portfolio} alt="portfolio img" class="ps-portfolio__img" />
				<div class="ps-portfolio__data">
					<h3 class="ps-portfolio__title">Something</h3>
					<p class="ps-portfolio__description">
						Website adaptable to all devices, with ui components and animated interactions.
					</p>
					<a href="" class="ps-button ps-button__flex ps-button__small ps-portfolio__button">
						Demo
						<i class="uil uil-arrow-right ps-button__icon" />
					</a>
				</div>
			</div>

			<!-- Portfolio 3 -->
			<div class="ps-portfolio__content ps-grid">
				<img src={portfolio} alt="portfolio img" class="ps-portfolio__img" />
				<div class="ps-portfolio__data">
					<h3 class="ps-portfolio__title">Just like this</h3>
					<p class="ps-portfolio__description">
						Website adaptable to all devices, with ui components and animated interactions.
					</p>
					<a href="" class="ps-button ps-button__flex ps-button__small ps-portfolio__button">
						Demo
						<i class="uil uil-arrow-right ps-button__icon" />
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.ps-portfolio__container {
		@apply overflow-auto;
	}

	.ps-portfolio__content {
		@apply py-0 px-6;
	}

	.ps-portfolio__img {
		@apply w-[265px] rounded-lg justify-self-center;
	}

	.ps-portfolio__title {
		@apply text-ps-h3-font-size mb-2;
	}

	.ps-portfolio__description {
		@apply mb-3;
	}

	.ps-portfolio__button:hover .ps-button__icon {
		@apply translate-x-1;
	}
</style>
