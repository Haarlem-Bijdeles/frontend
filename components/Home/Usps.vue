<template>
  <div class="hero">
    <image-hero :image="image" class="image" />
    <div class="wrapper">
      <notch-wrapper>
        <div class="buttons">
          <app-button class="btn" button-style="action" to="/contact">
            Maak direct een afspraak
          </app-button>
          <app-button
            class="btn"
            button-tag="a"
            href="tel:06%20-%2028%2032%2057%2033"
            button-style="ghost"
          >
            Bel ons: 06 - 28 32 57 33
          </app-button>
        </div>
      </notch-wrapper>
    </div>
  </div>
</template>

<script>
import AppButton from '~/components/Shared/AppButton.vue'
import NotchWrapper from '~/components/Layout/NotchWrapper.vue'
import ImageHero from '~/components/Images/ImageHero.vue'

export default {
  components: {
    NotchWrapper,
    AppButton,
    ImageHero,
  },
  props: {
    image: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="postcss" scoped>
.buttons {
  justify-content: center;
  flex-direction: row;
  display: flex;
}

.btn {
  margin: 0 var(--spacing-xs);
}

.hero {
  position: relative;
  height: 10rem;

  @media (--viewport-sm) {
    height: 25rem;
  }
}

.title {
  color: var(--color-white);
}

.wrapper {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 4em;
}
</style>
