<template>
  <section
    v-if="servicesGroup"
    class="services"
    aria-labelledby="services-title"
  >
    <image-hero
      :image="servicesGroup.servicesImage"
      class="image"
      :lazy="true"
    />
    <notch-wrapper>
      <div class="wrapper">
        <h2 id="services-title" class="title">
          {{ servicesGroup.servicesLabel }}
        </h2>
        <services-list :services-group="servicesGroup" />
      </div>
    </notch-wrapper>
  </section>
</template>

<script>
import ImageHero from '~/components/Images/ImageHero.vue'
import ServicesList from '~/components/Services/ServicesList.vue'
import NotchWrapper from '~/components/Layout/NotchWrapper.vue'

export default {
  components: {
    NotchWrapper,
    ImageHero,
    ServicesList,
  },
  props: {
    servicesGroup: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="postcss" scoped>
.services {
  background: var(--color-primary);
  text-align: center;
  position: relative;
}

.image {
  position: absolute;
  top: 0;
  left: 0;
  display: none;

  @media (--viewport-lg) {
    display: block;
  }
}

.title {
  color: var(--color-white);
  text-shadow: var(--text-shadow);
  margin-bottom: var(--spacing-m);
}

.wrapper {
  position: relative;
  padding-top: 5rem;
  padding-bottom: 3rem;
}
</style>
