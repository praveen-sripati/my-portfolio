<script>
  import alluAvif from '$lib/assets/images/allu.avif';
	import alluWebp from '$lib/assets/images/allu.webp';
	import alluPng from '$lib/assets/images/allu.png';
	import { Swiper, SwiperSlide } from 'swiper/svelte';

	// Import Swiper styles
	import 'swiper/css';

	import 'swiper/css/pagination';
	import 'swiper/css/mousewheel';
	import 'swiper/css/keyboard';
	import 'swiper/css/autoplay';

	// import required modules
	import { Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper';
</script>

<section class="ps-testimonial ps-section">
	<h2 class="ps-section__title">Testimonial</h2>
	<span class="ps-section__subtitle">My client saying</span>
	<div class="ps-testimonial__container ps-container">
		<Swiper
			modules={[Pagination, Mousewheel, Keyboard, Autoplay]}
			cssMode={true}
			grabCursor={true}
			spaceBetween={48}
			speed={5000}
			pagination={{ clickable: true, dynamicBullets: true }}
			breakpoints={{
				568: {
					slidesPerView: 2
				}
			}}
			keyboard={true}
			autoplay={true}
		>
			<SwiperSlide>
				<!-- Testimonial 1 -->
				<div class="ps-testimonial__content">
					<div class="ps-testimonial__data">
						<div class="ps-testimonial__header">
              <picture class="ps-testimonial__avatar">
                <source srcset={alluAvif} type="image/avif" class="ps-testimonial__img" width=64 height=64 />
                <source srcset={alluWebp} type="image/webp" class="ps-testimonial__img" width=64 height=64 />
                <img src={alluPng} alt="Allu Arjun" class="ps-testimonial__img" width=64 height=64 />
              </picture>
							<div>
								<h3 class="ps-testimonial__name">Kirankumar Sripati</h3>
								<span class="ps-testimonial__client">Client</span>
							</div>
						</div>
						<div>
							<i class="uil uil-star ps-testimonial__icon-star" />
							<i class="uil uil-star ps-testimonial__icon-star" />
							<i class="uil uil-star ps-testimonial__icon-star" />
							<i class="uil uil-star ps-testimonial__icon-star" />
							<i class="uil uil-star ps-testimonial__icon-star" />
						</div>
					</div>
					<p class="ps-testimonial__description">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe nisi assumenda illum
						nihil quibusdam soluta, dolor earum illo unde minima dolore delectus, voluptatum iusto
						molestiae esse repellendus laboriosam eius.
					</p>
				</div>
			</SwiperSlide>

			<!-- Testimonial 2 -->
			<SwiperSlide>
				<div class="ps-testimonial__content">
					<div class="ps-testimonial__data">
						<div class="ps-testimonial__header">
							<picture class="ps-testimonial__avatar">
                <source srcset={alluAvif} type="image/avif" class="ps-testimonial__img" width=64 height=64 />
                <source srcset={alluWebp} type="image/webp" class="ps-testimonial__img" width=64 height=64 />
                <img src={alluPng} alt="Allu Arjun" class="ps-testimonial__img" width=64 height=64 />
              </picture>
							<div>
								<h3 class="ps-testimonial__name">Anand Sripati</h3>
								<span class="ps-testimonial__client">Client</span>
							</div>
						</div>
						<div>
							<i class="uil uil-star ps-testimonial__icon-star" />
							<i class="uil uil-star ps-testimonial__icon-star" />
							<i class="uil uil-star ps-testimonial__icon-star" />
							<i class="uil uil-star ps-testimonial__icon-star" />
							<i class="uil uil-star ps-testimonial__icon-star" />
						</div>
					</div>
					<p class="ps-testimonial__description">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe nisi assumenda illum
						nihil quibusdam soluta, dolor earum illo unde minima dolore delectus, voluptatum iusto
						molestiae esse repellendus laboriosam eius.
					</p>
				</div>
			</SwiperSlide>

			<SwiperSlide>
				<!-- Testimonial 3 -->
				<div class="ps-testimonial__content">
					<div class="ps-testimonial__data">
						<div class="ps-testimonial__header">
							<picture class="ps-testimonial__avatar">
                <source srcset={alluAvif} type="image/avif" class="ps-testimonial__img" width=64 height=64 />
                <source srcset={alluWebp} type="image/webp" class="ps-testimonial__img" width=64 height=64 />
                <img src={alluPng} alt="Allu Arjun" class="ps-testimonial__img" width=64 height=64 />
              </picture>
							<div>
								<h3 class="ps-testimonial__name">Sidboy</h3>
								<span class="ps-testimonial__client">Client</span>
							</div>
						</div>
						<div>
							<i class="uil uil-star ps-testimonial__icon-star" />
							<i class="uil uil-star ps-testimonial__icon-star" />
							<i class="uil uil-star ps-testimonial__icon-star" />
							<i class="uil uil-star ps-testimonial__icon-star" />
							<i class="uil uil-star ps-testimonial__icon-star" />
						</div>
					</div>
					<p class="ps-testimonial__description">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe nisi assumenda illum
						nihil quibusdam soluta, dolor earum illo unde minima dolore delectus, voluptatum iusto
						molestiae esse repellendus laboriosam eius.
					</p>
				</div>
			</SwiperSlide>
		</Swiper>
	</div>
</section>

<style lang="scss">
	.ps-testimonial__container {
		:global(.swiper-pagination .swiper-pagination-bullet-active) {
			@apply bg-ps-first-color;
		}
	}

	.ps-testimonial__data,
	.ps-testimonial__header {
		@apply flex mobile-sm:flex-col mobile-sm:items-center;
	}

	.ps-testimonial__data {
		@apply justify-between mb-4 mobile-sm:text-center;
	}

  .ps-testimonial__avatar {
    @apply mr-3 mobile-sm:mr-0 mobile-sm:mb-1;
  }

	.ps-testimonial__img {
		@apply w-16 h-16 rounded-[50%] object-cover;
	}

	.ps-testimonial__name {
		@apply text-ps-h3-font-size font-medium;
	}

	.ps-testimonial__client {
		@apply text-ps-small-font-size text-ps-text-color-light;
	}

	.ps-testimonial__description {
		@apply mb-10 mobile-sm:text-center;
	}

	.ps-testimonial__icon-star {
		@apply text-ps-first-color;
	}
</style>
