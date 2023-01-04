<section class="ps-about ps-section" id="about">
  <h2 class="ps-section__title">About Me</h2>
  <span class="ps-section__subtitle">My introduction</span>
  <div class="ps-about__container ps-container ps-grid">
    <img src="" alt="" class="ps-about__img">
    <div class="ps-about__data">
      <p class="ps-about__description">
        Web developer, with extensive knowledge and years of experience, working in web technologies and UI/UX design, delivering quality work.
      </p>
      <div class="ps-about__info">
        <div>
          <span class="ps-about__info-title">02+</span>
          <span class="ps-about__info-name">Years <br> experience</span>
        </div>
        <div>
          <span class="ps-about__info-title">10+</span>
          <span class="ps-about__info-name">Completed <br> projects</span>
        </div>
        <div>
          <span class="ps-about__info-title">01+</span>
          <span class="ps-about__info-name">Companies <br> worked</span>
        </div>
      </div>
      <div class="ps-about__buttons">
        <a href="" class="ps-button ps-button__flex">
          Download CV<i class="uil uil-download-alt ps-button__icon"></i>
        </a>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  // About CSS

  .ps-about__container {
    @apply mobile-lg:grid-cols-2 tablet:gap-x-20;
  }

  .ps-about__img {
    @apply w-[200px] rounded-lg justify-self-center self-center tablet:w-[350px];
  }

  .ps-about__description {
    @apply text-center mb-10 tablet:text-left;
  }

  .ps-about__info {
    @apply flex justify-evenly mb-10 tablet:justify-between;
  }

  .ps-about__info-title {
    @apply text-ps-h2-font-size font-semibold text-ps-title-color;
  }

  .ps-about__info-name {
    @apply text-ps-smaller-font-size;
  }

  .ps-about__info-title,
  .ps-about__info-name {
    @apply block text-center;
  }

  .ps-about__buttons {
    @apply flex justify-center tablet:justify-start;
  }
</style>