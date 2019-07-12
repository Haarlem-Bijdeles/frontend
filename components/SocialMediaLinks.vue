<template>
  <div class="social">
    <h2>Volg ons op</h2>
    <ul class="list">
      <li>
        <a
          href="https://www.facebook.com/haarlembijdeles"
          class="social__link"
          rel="noopener"
          target="_blank"
        >
          <icon-facebook aria-hidden="true" width="24" height="24" />
          <span class="sr-only">Volg Haarlem Bijdeles op Facebook</span>
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/haarlembijdeles"
          class="social__link"
          rel="noopener"
          target="_blank"
        >
          <icon-twitter aria-hidden="true" width="24" height="24" />
          <span class="sr-only">Volg Haarlem Bijdeles op Twitter</span>
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/company-beta/5025367/"
          class="social__link"
          rel="noopener"
          target="_blank"
        >
          <icon-linkedin aria-hidden="true" width="24" height="24" />
          <span class="sr-only">Volg Haarlem Bijdeles op LinkedIn</span>
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/haarlembijdeles/"
          class="social__link"
          rel="noopener"
          target="_blank"
        >
          <icon-instagram aria-hidden="true" width="24" height="24" />
          <span class="sr-only">Volg Haarlem Bijdeles op Instagram</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import IconFacebook from '@/icons/facebook.svg'
import IconTwitter from '@/icons/twitter.svg'
import IconLinkedin from '@/icons/linkedin.svg'
import IconInstagram from '@/icons/instagram.svg'

export default {
  components: {
    IconFacebook,
    IconTwitter,
    IconLinkedin,
    IconInstagram,
  },
}
</script>

<style lang="postcss" scoped>
.list {
  @mixin list-reset;
  display: grid;
  grid-template-columns: repeat(4, 2em);
}
</style>
