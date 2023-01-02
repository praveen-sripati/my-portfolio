<script lang="ts">
	import portfolio from '$lib/assets/images/allu.png';
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	// Import Swiper styles
	import 'swiper/css';

	import 'swiper/css/navigation';
	import 'swiper/css/pagination';
  import 'swiper/css/mousewheel';
  import 'swiper/css/keyboard';
  import 'swiper/css/autoplay';

	// import required modules
	import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper';
</script>

<section class="ps-portfolio ps-section" id="portfolio">
	<h2 class="ps-section__title">Portfolio</h2>
	<span class="ps-section__subtitle">What i offer</span>
	<div class="ps-portfolio__container ps-container">
    
		<Swiper
			cssMode={true}
			navigation={true}
			pagination={true}
      speed={2500}
			mousewheel={true}
      autoplay={{delay: 5000}}
			keyboard={true}
			modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
		>
			<SwiperSlide>
				<!-- Portfolio 1 -->
				<div class="ps-portfolio__content ps-grid mb-7">
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
			</SwiperSlide>
			<SwiperSlide>
				<!-- Portfolio 2 -->
				<div class="ps-portfolio__content ps-grid mb-7">
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
			</SwiperSlide>
			<SwiperSlide>
				<!-- Portfolio 3 -->
				<div class="ps-portfolio__content ps-grid mb-7">
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
			</SwiperSlide>
		</Swiper>
	</div>
</section>

<style lang="scss">
  .ps-portfolio__container {
    /* Override style of swiper slide arrows */
    :global(.swiper-button-prev), :global(.swiper-button-next) {
      @apply text-ps-first-color;
    }

    :global(.swiper-horizontal > .swiper-pagination.swiper-pagination-bullets.swiper-pagination-horizontal) {
      @apply -bottom-1;
    }

    :global(.swiper-pagination .swiper-pagination-bullet-active) {
      @apply bg-ps-first-color;
    }
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
