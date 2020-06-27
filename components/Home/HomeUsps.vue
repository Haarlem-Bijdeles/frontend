<template>
  <section aria-labelledby="home-usps-title" :class="$style['home-usps']">
    <notch-wrapper>
      <h1 id="home-usps-title" :class="$style.title">Onze kernwaarden</h1>
      <ul :class="$style.list">
        <li :class="$style['list-item']">
          <icon-usp-3
            aria-hidden="true"
            width="64"
            height="64"
            :class="$style.icon"
          />
          <h2 :class="$style['list-item-title']">
            Inhoudelijke ondersteuning
          </h2>
          <p>Hoogopgeleide docenten die met uw kind het proces uitlichten.</p>
        </li>
        <li :class="$style['list-item']">
          <icon-usp-2
            aria-hidden="true"
            width="64"
            height="64"
            :class="$style.icon"
          />
          <h2 :class="$style['list-item-title']">
            Van stampen naar begrijpen
          </h2>
          <p>
            Via RTTI: reproduceren, toepassen in bekende situatie, toepassen in
            onbekende situatie en inzicht.
          </p>
        </li>
        <li :class="$style['list-item']">
          <icon-usp-1
            aria-hidden="true"
            width="64"
            height="64"
            :class="$style.icon"
          />
          <h2 :class="$style['list-item-title']">Een positieve aanpak</h2>
          <p>
            Op wetenschappelijk gefundeerde theorieen gebaseerd. Talent = aanleg
            x leervermogen.
          </p>
        </li>
      </ul>
    </notch-wrapper>
  </section>
</template>

<script>
import NotchWrapper from '~/components/Layout/NotchWrapper.vue'
import IconUsp1 from '~/icons/usp-1.svg'
import IconUsp2 from '~/icons/usp-2.svg'
import IconUsp3 from '~/icons/usp-3.svg'
export default {
  components: {
    NotchWrapper,
    IconUsp1,
    IconUsp2,
    IconUsp3,
  },
}
</script>

<style lang="postcss" module>
.home-usps {
  padding: var(--spacing-l) 0 var(--spacing-l);
  text-align: center;
}

.icon {
  margin-bottom: var(--spacing-xs);
}

.title {
  margin-bottom: var(--spacing-s);
}

.list-item-title {
  margin-bottom: 0.25em;
  font-size: 1.25rem;
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
