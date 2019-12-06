<template>
  <section v-if="pricesGroup" class="prices" aria-labelledby="prices-title">
    <image-hero :image="pricesGroup.image" class="image" />

    <div class="wrapper">
      <h1 id="prices-title" class="title">{{ $t('title') }}:</h1>
      <prices-list :prices="pricesGroup.prices" />
      <prices-buttons />
    </div>
  </section>
</template>

<script>
import ImageHero from '@/components/Images/ImageHero.vue'
import PricesList from '@/components/Prices/PricesList.vue'
import PricesButtons from '@/components/Prices/PricesButtons.vue'

export default {
  components: {
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
  margin-bottom: 1em;
}

.header {
  text-align: center;
  margin-bottom: 1em;
  position: relative;
}

.wrapper {
  @mixin center;
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
