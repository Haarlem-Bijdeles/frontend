<template>
  <section v-if="pricesGroup" class="prices" aria-labelledby="prices-title">
    <image-hero :image="pricesGroup.image" class="image" />
    <notch-wrapper>
      <div class="wrapper">
        <h1 id="prices-title" class="title">{{ $t('title') }}:</h1>
        <prices-list :prices="pricesGroup.prices" />
        <prices-buttons />
      </div>
    </notch-wrapper>
  </section>
</template>

<script>
import ImageHero from '@/components/Images/ImageHero.vue'
import PricesList from '@/components/Prices/PricesList.vue'
import PricesButtons from '@/components/Prices/PricesButtons.vue'
import NotchWrapper from '@/components/Layout/NotchWrapper.vue'

export default {
  components: {
    NotchWrapper,
    ImageHero,
    PricesList,
    PricesButtons,
  },
  props: {
    pricesGroup: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="postcss" scoped>
.prices {
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

.header {
  text-align: center;
  margin-bottom: var(--spacing-m);
  position: relative;
}

.wrapper {
  @mixin block-padding;
  position: relative;
}
</style>

<i18n>
{
  "nl": {
    "title": "Kies het pakket dat bij uw kind past"
  }
}
</i18n>
