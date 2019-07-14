<template>
  <ul class="list">
    <li v-if="facebookUrl">
      <a :href="facebookUrl" class="link" rel="noopener" target="_blank">
        <icon-facebook aria-hidden="true" width="24" height="24" />
        <span class="sr-only">Volg {{ title }} op Facebook</span>
      </a>
    </li>
    <li v-if="twitterUrl">
      <a :href="twitterUrl" class="link" rel="noopener" target="_blank">
        <icon-twitter aria-hidden="true" width="24" height="24" />
        <span class="sr-only">Volg {{ title }} op Twitter</span>
      </a>
    </li>
    <li v-if="linkedInUrl">
      <a :href="linkedInUrl" class="link" rel="noopener" target="_blank">
        <icon-linkedin aria-hidden="true" width="24" height="24" />
        <span class="sr-only">Volg {{ title }} op LinkedIn</span>
      </a>
    </li>
    <li v-if="instagramUrl">
      <a :href="instagramUrl" class="link" rel="noopener" target="_blank">
        <icon-instagram aria-hidden="true" width="24" height="24" />
        <span class="sr-only">Volg {{ title }} op Instagram</span>
      </a>
    </li>
  </ul>
</template>

<script>
import IconFacebook from '@/icons/facebook-rounded.svg'
import IconTwitter from '@/icons/twitter-rounded.svg'
import IconLinkedin from '@/icons/linkedin-rounded.svg'
import IconInstagram from '@/icons/instagram.svg'

export default {
  components: {
    IconFacebook,
    IconTwitter,
    IconLinkedin,
    IconInstagram,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    facebookUrl: {
      type: String,
      default: '',
    },
    linkedInUrl: {
      type: String,
      default: '',
    },
    twitterUrl: {
      type: String,
      default: '',
    },
    instagramUrl: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="postcss" scoped>
.list {
  @mixin list-reset;
  display: grid;
  grid-template-columns: repeat(4, 2em);
}

.link {
  @mixin link-reset;
}
</style>
