<template>
  <section
    v-if="servicesGroup"
    class="services"
    aria-labelledby="services-title"
  >
    <app-image
      v-if="servicesGroup.servicesImage"
      :src="servicesGroup.servicesImage.heroMedium"
      :alt="servicesGroup.servicesImage.altText"
      :srcset="
        `
        ${servicesGroup.servicesImage.heroLarge} 1140w,
        ${servicesGroup.servicesImage.heroMedium} 800w,
        ${servicesGroup.servicesImage.heroSmall} 640w`
      "
      class="image"
      sizes="(min-width: 1140px) 1140px, 100vw"
    />
    <div class="wrapper">
      <h2 id="services-title" class="title">
        {{ servicesGroup.servicesLabel }}
      </h2>
      <ul class="list">
        <li
          v-for="service in servicesGroup.services"
          :key="service.title"
          class="item"
        >
          <div class="header">
            <h3 class="service-title">{{ service.title }}</h3>
          </div>
          <ul class="usps">
            <li v-for="item in service.usps" :key="item.text" class="usp">
              {{ item.text }}
            </li>
          </ul>
          <a v-if="service.link" :href="service.link.url" class="btn btn-ghost">
            {{ $t('moreInformation') }}
            <span class="sr-only">over {{ service.title }}</span>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import AppImage from '@/components/Shared/AppImage.vue'

export default {
  components: {
    AppImage,
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
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: none;

  @media (--viewport-lg) {
    display: block;
  }
}

.badge {
  background: var(--color-primary);
  line-height: 2em;
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
    border-top: 5px solid var(--color-action-dark);
    border-bottom: 5px solid var(--color-action-dark);
  }

  &::before {
    right: 100%;
    margin-right: 0;
    border-right: 5px solid var(--color-action-dark);
    border-left: 5px solid transparent;
  }
  &::after {
    left: 100%;
    margin-left: 0;
    border-left: 5px solid var(--color-action-dark);
    border-right: 5px solid transparent;
  }
}

.title {
  color: var(--color-white);
  text-shadow: var(--text-shadow);
}

.header {
  text-align: center;
  margin-bottom: 1em;
  position: relative;
}

.wrapper {
  @mixin center;
  position: relative;
  padding-top: 5rem;
  padding-bottom: 3rem;
}

.value {
  position: relative;
  font-size: 2em;
  line-height: 1.2;
}

.title {
  margin-bottom: 1.5em;
}

.list {
  @mixin list-reset;
  display: grid;
  grid-gap: var(--gutter);
  margin-bottom: 2em;
  grid-template-columns: repeat(auto-fit, minmax(14em, 1fr));
}

.item {
  flex-direction: column;
  padding: 0.5em 1em 1em;
  background: var(--color-white);
  position: relative;
  display: flex;
  flex: 1 0 auto;

  @media (--viewport-lg) {
    background: var(--color-white-transparent);
  }
}

.usps {
  @mixin list-reset;

  flex: 1 1 auto;
  margin-bottom: 1.5em;
}

.usp {
  padding: 0 0 0.5em;

  &:last-child {
    padding-bottom: 0;
  }
}

.icon {
  font-size: 1.25rem;
  @include icon(2em);
  position: absolute;
  left: 0;
  top: 0;
  background: #06b326;
  fill: #fff;
  border-radius: 50%;
}

.btn {
  @extend %btn;
  @extend %btn--small;
  @extend %btn--outline;
  align-self: center;
}
.btn-cta,
.btn-call {
  @extend %btn;
  margin: 0 0.5em 0.5em;
}

.btn-cta {
  @extend %btn--action;
}

.btn-call {
  @extend %btn--outline;
  background: var(--color-white);
}
</style>

<i18n>
{
  "nl": {
    "moreInformation": "Meer informatie"
  }
}
</i18n>
