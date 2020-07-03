<template>
  <section aria-labelledby="home-usps-title" :class="$style['home-usps']">
    <notch-wrapper>
      <h1 id="home-usps-title" :class="$style.title">Onze kernwaarden</h1>
      <ul :class="$style.list">
        <home-usp
          v-for="usp in $t('usps')"
          :key="usp.title"
          :class="$style['list-item']"
          :usp="usp"
        />
      </ul>
    </notch-wrapper>
  </section>
</template>

<script>
import NotchWrapper from '~/components/Layout/NotchWrapper.vue'
import HomeUsp from '~/components/Home/HomeUsp.vue'

export default {
  components: {
    NotchWrapper,
    HomeUsp,
  },
}
</script>

<style lang="postcss" module>
.home-usps {
  padding: var(--spacing-l) 0 var(--spacing-l);
  text-align: center;
}

.title {
  margin-bottom: var(--spacing-s);
}

.list {
  @mixin list-reset;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: calc(-1 * var(--spacing-xs));
  margin-right: calc(-1 * var(--spacing-xs));
}

.list-item {
  padding-right: var(--spacing-xs);
  padding-left: var(--spacing-xs);

  @media (--viewport-sm) {
    flex: 0 0 50%;
  }

  @media (--viewport-md) {
    flex: 0 0 33%;
  }
}
</style>

<i18n>
{
  "nl": {
    "usps": [
      {
        "title": "Positief en persoonlijk",
        "text": "Een fijne, positieve leeromgeving met persoonlijke aandacht voor iedere leerling.",
        "icon": "usp-1"
      },
      {
        "title": "Hulp bij leren leren",
        "text": "Leerstrategieën die leiden tot efficiënter leren, betere schoolresultaten en minder stress.",
        "icon": "usp-2"
      },
      {
        "title": "Planning en structuur",
        "text": "Ondersteuning bij het plannen van schoolwerk, zodat leerlingen overzicht krijgen.",
        "icon": "usp-3"
      }
    ]
  }
}
</i18n>
