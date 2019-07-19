<template>
  <nav v-if="menu" aria-label="footer-nav-heading" class="footer-menu">
    <h2 id="footer-nav-heading">{{ $t('usefulLinks') }}</h2>
    <ul class="menu">
      <li v-for="item in menu" :key="item.ID" class="menu-item">
        <a v-if="item.target === '_blank'" :href="item.url" target="_blank">{{
          item.title
        }}</a>
        <nuxt-link v-else :to="item.url">{{ item.title }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>
