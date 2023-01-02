<script lang="ts">
  import allu from '$lib/assets/images/allu.png';
</script>

<section class="ps-project ps-section" id="projects">
  <div class="ps-project__bg">
    <div class="ps-project__container ps-container ps-grid">
      <div class="ps-project__data">
        <h2 class="ps-project__title">You have a new project</h2>
        <p class="ps-project__description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum commodi maiores obcaecati eius unde beatae temporibus, praesentium aliquid rerum doloremque minima. Tenetur quisquam ab veniam, necessitatibus facilis quia. Quo, ad.</p>
        <a href="" class="ps-button ps-button__flex ps-button__white">
          Contact Me
          <i class="uil uil-message ps-project__icon ps-button__icon"></i>
        </a>
      </div>
      <img src="{allu}" alt="" class="ps-project__img">
    </div>
  </div>
</section>

<style lang="scss">
  .ps-project {
    @apply text-center;
  }

  .ps-project__bg {
    @apply bg-ps-first-color pt-12;
  }

  .ps-project__title {
    @apply text-ps-h2-font-size mb-3;
  }

  .ps-project__description {
    @apply mb-6;
  }

  .ps-project__title, .ps-project__description {
    @apply text-white;
  }

  .ps-project__img {
    @apply w-[232px] justify-self-center;
  }
</style>