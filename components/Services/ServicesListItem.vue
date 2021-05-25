<template>
  <clickable-list-item
    :url="service.link.url"
    :external="isExternalLink"
    class="item"
    :target="service.link.target"
  >
    <div class="header">
      <h3 class="title">
        <template v-if="service.link.url">
          <a
            v-if="isExternalLink"
            rel="noopener"
            :href="service.link.url"
            :target="service.link.target"
          >
            {{ service.title }}
          </a>
          <nuxt-link
            v-else-if="service.link.relativeUrl"
            :to="service.link.relativeUrl"
          >
            {{ service.title }}
          </nuxt-link>
        </template>
      </h3>
    </div>
    <ul class="usps">
      <li v-for="item in service.usps" :key="item.text" class="usp">
        {{ item.text }}
      </li>
    </ul>
    <span v-if="service.link.url" class="btn" aria-hidden="true">
      {{ $t('moreInformation') }}
    </span>
  </clickable-list-item>
</template>

<script>
import ClickableListItem from '~/components/Shared/ClickableListItem.vue'

export default {
  components: {
    ClickableListItem,
  },
  props: {
    service: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    isExternalLink() {
      return this.service.link.url.includes('https://')
    },
  },
}
</script>

<style lang="postcss" scoped>
.item {
  flex-direction: column;
  display: flex;
  padding: var(--spacing-xs) var(--spacing-m) var(--spacing-m);
  background: var(--color-white);
  position: relative;

  @media (--viewport-lg) {
    background: var(--color-white-transparent);
  }

  &:focus-within,
  &:hover {
    & .btn {
      @mixin btn-ghost-hover;
    }
  }
}

.header {
  text-align: center;
  margin-bottom: var(--spacing-m);
  position: relative;
}

.usps {
  @mixin list-reset;

  flex: 1 1 auto;
  margin-bottom: 1.5em;
}

.usp {
  padding: 0 0 var(--spacing-xs);

  &:last-child {
    padding-bottom: 0;
  }
}

.btn {
  @mixin btn;
  @mixin btn-ghost;
  align-self: center;
}
</style>

<i18n>
{
  "nl": {
    "moreInformation": "Meer informatie"
  }
}
</i18n>
