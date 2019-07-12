<template>
  <li class="item" @mousedown="mouseDown" @mouseup="mouseUp">
    <div class="wrapper">
      <div class="image-wrapper">
        <img
          src="https://www.haarlembijdeles.nl/wp-content/uploads/2018/04/Team-280x0-c-default.jpg"
          alt="Team"
          class="image"
          srcset="
            https://www.haarlembijdeles.nl/wp-content/uploads/2018/04/Team-280x0-c-default.jpg 1x,
            https://www.haarlembijdeles.nl/wp-content/uploads/2018/04/Team-560x0-c-default.jpg 2x
          "
        />
      </div>

      <div class="text">
        <!-- eslint-disable-next-line -->
        <h2><router-link :to="post.slug" v-html="post.title.rendered" /></h2>

        <div class="meta">
          <post-date :date="post.date" />
        </div>
        <!-- eslint-disable-next-line -->
          <p v-html="post.excerpt.rendered" />

        <div class="link-wrapper">
          <span class="read-more">
            {{ $t('readMore') }}
            <icon-chevron-right aria-hidden="true" width="16" height="16" />
          </span>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
import PostDate from '@/components/PostDate.vue'
import IconChevronRight from '@/icons/chevron-right.svg'

export default {
  components: {
    PostDate,
    IconChevronRight,
  },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      down: null,
    }
  },
  methods: {
    mouseUp() {
      const up = +new Date()
      if (up - this.down < 200) {
        this.goToPost()
      }
    },
    mouseDown() {
      this.down = +new Date()
    },
    goToPost() {
      this.$router.push(this.post.slug)
    },
  },
}
</script>

<style lang="postcss" scoped>
.wrapper {
  @mixin center;
  @mixin block-padding;
  display: grid;
  grid-gap: var(--gutter);
  @media (--viewport-sm) {
    grid-template-columns: 20em auto;
  }
}

.item {
  cursor: pointer;
  background: linear-gradient(
    to bottom,
    var(--color-gray-light) 0,
    var(--color-white) 20rem
  );
}

.image-wrapper {
  @media (--viewport-sm) {
    flex: 0 0 percentage(1 / 3);
  }
}

.image {
  display: block;
  width: 100%;
  border: 5px var(--color-white) solid;
  box-shadow: 0 0 3px #999;
  @media (--viewport-sm) {
    margin: 0 auto;
  }
  @media (--viewport-sm) {
    flex: 0 0 percentage(1 / 3);
    max-width: 20em;
  }
}

.social {
  font-size: 0.9em;
}

.archive__icon {
  @include icon(1.5em);
  margin-right: 0.25em;
}
</style>
