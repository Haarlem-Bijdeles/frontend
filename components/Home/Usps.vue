<template>
  <div class="highlights">
    <div class="usps">
      <div v-if="usps.length" class="teaser__usps">
        <h2 class="title">Wat kunnen jullie verwachten?</h2>
        <ul class="list">
          <li v-for="item in usps" :key="item.text" class="item">
            <icon-chevron-right aria-hidden="true" width="12" height="12" />
            {{ item.text }}
          </li>
        </ul>
      </div>
      <div v-if="offers.length" class="teaser__usps">
        <h2 class="title">Ons aanbod:</h2>
        <ul class="list">
          <li v-for="item in offers" :key="item.text" class="item">
            <icon-chevron-right aria-hidden="true" width="12" height="12" />
            {{ item.text }}
          </li>
        </ul>
      </div>
    </div>
    <div class="prices">
      <h2 class="title">Tarieven</h2>
      <ul class="list">
        <li class="item">
          <icon-chevron-right
            aria-hidden="true"
            width="12"
            height="12"
          />Huiswerkbegeleiding vanaf € 240,- p.m.
        </li>
        <li class="item">
          <icon-chevron-right
            aria-hidden="true"
            width="12"
            height="12"
          />Individuele bijles € 30,- p.u.
        </li>
      </ul>
      <a class="btn btn-action" href="https://www.haarlembijdeles.nl/contact"
        >Maak direct een afspraak</a
      >
      <a href="tel:06%20-%2028%2032%2057%2033" class="btn btn-ghost"
        >Bel Tim: 06 - 28 32 57 33</a
      >
    </div>
  </div>
</template>

<script>
import IconChevronRight from '@/icons/chevron-right.svg'

export default {
  components: {
    IconChevronRight,
  },
  props: {
    usps: {
      type: Array,
      default: () => [],
    },
    offers: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="postcss" scoped>
.list {
  @mixin list-reset;
}

.usps {
  @mixin color-negative;
  font-weight: var(--font-weight-bold);
  padding: var(--gutter);
  display: grid;
  grid-gap: var(--gutter);

  grid-template-columns: repeat(auto-fit, minmax(14em, 1fr));
}

.prices {
  padding: var(--gutter);
  background: linear-gradient(#f9f9f9, #e0fbe5);
}

.highlights {
  @mixin center;
  display: grid;
  grid-gap: var(--gutter);
  position: relative;
  margin-top: 1rem;
  @media (--viewport-sm) {
    margin-top: -5rem;
  }
  @media (--viewport-md) {
    grid-template-columns: 2fr 1fr;
  }
}

.btn {
  margin-top: 0.5em;
}
</style>
