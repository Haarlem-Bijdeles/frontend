<template>
  <div>
    <img
      src="https://www.haarlembijdeles.nl/wp-content/uploads/2017/09/170208_Bijdeles_25_HR-280x0-c-default.jpg"
      alt
      class="image"
      srcset="
        https://www.haarlembijdeles.nl/wp-content/uploads/2017/09/170208_Bijdeles_25_HR-280x0-c-default.jpg 1x,
        https://www.haarlembijdeles.nl/wp-content/uploads/2017/09/170208_Bijdeles_25_HR-560x0-c-default.jpg 2x
      "
    />
    <span class="street">{{ office.street }}</span>
    {{ office.zipcode }}, {{ office.city }}
    <br />
    <a
      :href="
        `https://www.google.com/maps?daddr=${office.street}%20${office.city}`
      "
      target="_blank"
      rel="noopener"
      class="contact__btn-route"
      >{{ $t('direction') }}</a
    >
  </div>
</template>

<script>
export default {
  props: {
    office: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="postcss" scoped>
.image {
  display: block;
  margin-bottom: 0.5em;
  height: 12em;
  object-fit: cover;
  width: 100%;
  border: 5px solid var(--color-white);
  box-shadow: 0 0 3px var(--color-gray);
}

.street {
  display: block;
  font-weight: var(--font-weight-bold);
}
</style>
