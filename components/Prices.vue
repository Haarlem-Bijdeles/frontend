<template>
  <section v-if="pricesGroup" class="prices" aria-labelledby="prices-title">
    <app-image
      v-if="pricesGroup.image"
      :src="pricesGroup.image.heroMedium"
      :alt="pricesGroup.image.altText"
      :srcset="
        `
        ${pricesGroup.image.heroLarge} 1140w,
        ${pricesGroup.image.heroMedium} 800w,
        ${pricesGroup.image.heroSmall} 640w`
      "
      class="image"
      sizes="(min-width: 1140px) 1140px, 100vw"
    />
    <div class="wrapper">
      <h1 id="prices-title" class="title">
        Kies het pakket dat bij uw kind past:
      </h1>
      <ul class="list">
        <li
          v-for="price in pricesGroup.prices"
          :key="price.title"
          class="item item--transparent"
        >
          <div v-if="price.recommended" class="badge">Meest gekozen</div>
          <div class="header">
            <div class="label">{{ price.title }}</div>
            <div class="value">
              <check-rounded
                aria-hidden="true"
                class="icon"
                width="36"
                height="36"
              />
              {{ price.price }}
            </div>
          </div>
        </li>
      </ul>
      <div class="buttons">
        <div class="button-wrapper">
          <nuxt-link to="/contact" class="btn btn-action">
            Maak direct een afspraak
          </nuxt-link>
        </div>
        <div class="button-wrapper">
          <a href="tel:06%20-%2028%2032%2057%2033" class="btn btn-ghost"
            >Bel Tim: 06 - 28 32 57 33</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CheckRounded from '@/icons/check-rounded.svg'
import AppImage from '@/components/Shared/AppImage.vue'

export default {
  components: {
    AppImage,
    CheckRounded,
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
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: none;

  @media (--viewport-lg) {
    display: block;
  }
}

.badge {
  --badge-height: 2em;
  background: var(--color-action);
  line-height: var(--badge-height);
  position: absolute;
  top: -1.5em;
  padding: 0;
  text-align: center;
  font-weight: 700;
  color: #fff;
  z-index: 9;
  left: 2em;
  right: 2em;

  @media (--viewport-sm) {
    left: 50%;
    margin-left: -5em;
    width: 10em;
  }

  &::before,
  &::after {
    z-index: 1;
    content: '';
    display: block;
    top: 0.25em;
    position: absolute;
    border-top: calc(var(--badge-height) / 2) solid var(--color-action-dark);
    border-bottom: calc(var(--badge-height) / 2) solid var(--color-action-dark);
  }

  &::before {
    right: 100%;
    margin-right: 0;
    border-right: calc(var(--badge-height) / 2) solid var(--color-action-dark);
    border-left: calc(var(--badge-height) / 2) solid transparent;
  }
  &::after {
    left: 100%;
    margin-left: 0;
    border-left: calc(var(--badge-height) / 2) solid var(--color-action-dark);
    border-right: calc(var(--badge-height) / 2) solid transparent;
  }
}

.title {
  color: var(--color-white);
  text-shadow: 1px 1px 1px var(--color-black);
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

.label {
  font-weight: 700;
  font-size: 1.75em;
}

.value {
  position: relative;
  font-size: 2em;
  line-height: 1.2;
}

.list {
  @mixin list-reset;
  display: grid;
  grid-gap: var(--gutter);
  margin-bottom: 1em;
  grid-template-columns: repeat(auto-fit, minmax(15em, 1fr));
}

.item {
  flex-direction: column;
  padding: 0.5em 1em 1em;
  background: var(--color-white);
  position: relative;
  display: flex;
  flex: 1 0 auto;
  margin-bottom: 0;

  @include breakpoint(lg) {
    &--transparent {
      background: rgba($white, 0.9);
    }
  }

  &--recommended {
    @include breakpoint-max(sm) {
      margin-top: 1em;
    }
  }

  ul {
    flex: 1 1 auto;
    margin-bottom: 1.5em;
  }
}

.usp {
  padding: 0 0 0.5em;

  &:last-child {
    padding-bottom: 0;
  }
}

.icon {
  font-size: 1.25rem;
  position: absolute;
  left: 0;
  top: 0;
  background: #06b326;
  fill: var(--color-white);
  border-radius: 50%;
}

.buttons {
  @include breakpoint(md) {
    display: flex;
    justify-content: center;
  }
}

.button-wrapper {
  padding-bottom: 0.5em;
  @include breakpoint(md) {
    width: 25%;
    padding: 0 0.5em 0.5em;
  }
}

.btn {
  width: 100%;
}
</style>
