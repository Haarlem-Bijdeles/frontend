<template>
  <section class="services" aria-labelledby="services-title">
    <img
      src="https://www.haarlembijdeles.nl/wp-content/uploads/2017/09/170208_Bijdeles_28_HR-800x0-c-default.jpg"
      alt="Haarlem Bijdeles - Huiswerkbegeleiding Haarlem"
      class="image"
      srcset="
        https://www.haarlembijdeles.nl/wp-content/uploads/2017/09/170208_Bijdeles_28_HR-1140x0-c-default.jpg 1140w,
        https://www.haarlembijdeles.nl/wp-content/uploads/2017/09/170208_Bijdeles_28_HR-800x0-c-default.jpg   800w,
        https://www.haarlembijdeles.nl/wp-content/uploads/2017/09/170208_Bijdeles_28_HR-640x0-c-default.jpg   640w
      "
      sizes="(min-width: 1140px) 1140px, 100vw"
    />
    <div class="wrapper">
      <h2 id="services-title" class="title">Dit zijn onze diensten</h2>
      <ul class="row row--3-items">
        <li class="item item--transparent">
          <div class="header">
            <h3 class="service-title">Huiswerkbegeleiding</h3>
          </div>
          <ul class="usps">
            <li class="usp">
              2-5 middagen per week huiswerkbegeleiding
            </li>
            <li class="usp">
              Twee locaties in het centrum van Haarlem
            </li>
            <li class="usp">
              Persoonlijke begeleiding en ontspannen sfeer
            </li>
            <li class="usp">Aandacht voor Leren Leren</li>
            <li class="usp">Planning en hulp bij toetsweken</li>
            <li class="usp">Leerlingenvolgsysteem op maat</li>
          </ul>
          <a
            href="https://www.haarlembijdeles.nl/huiswerkbegeleiding-haarlem/"
            class="btn"
            >Meer informatie
            <span class="sr-only">over Huiswerkbegeleiding</span></a
          >
        </li>
        <li class="item item--transparent">
          <div class="header">
            <h3 class="service-title">Bijles</h3>
          </div>
          <ul class="usps">
            <li class="usp">Inhoudelijke hulp voor elk vak</li>
            <li class="usp">Intensief oefenen met de lesstof</li>
            <li class="usp">Veel aandacht voor vragen</li>
            <li class="usp">Individuele begeleiding op maat</li>
            <li class="usp">Ervaren docenten</li>
            <li class="usp">In het centrum van Haarlem</li>
          </ul>
          <a href="https://www.haarlembijdeles.nl/bijles-haarlem/" class="btn"
            >Meer informatie <span class="sr-only">over Bijles</span></a
          >
        </li>
        <li class="item item--transparent">
          <div class="header">
            <h3 class="service-title">Examentraining</h3>
          </div>
          <ul class="usps">
            <li class="usp">Tweedaagse examentrainingen</li>
            <li class="usp">
              Uitgebreid oefenen met examenopgaven
            </li>
            <li class="usp">
              Uitleg van de examenstof en handige tips
            </li>
            <li class="usp">Een samenvatting van de examenstof</li>
            <li class="usp">SE-trainingen voor iedere SE-week</li>
            <li class="usp">Met zelfvertrouwen de examens in!</li>
          </ul>
          <a
            href="https://www.haarlembijdeles.nl/examentraining-haarlem/"
            class="btn"
            >Meer informatie <span class="sr-only">over Examentraining</span></a
          >
        </li>
      </ul>
    </div>
  </section>
</template>

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
  line-height: $banner-height;
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
    border-top: ($banner-height / 2) solid darken($color-action, $darken-amount);
    border-bottom: ($banner-height / 2) solid
      darken($color-action, $darken-amount);
  }

  &::before {
    right: 100%;
    margin-right: $tail-h-offset;
    border-right: ($banner-height / 2) solid
      darken($color-action, $darken-amount);
    border-left: 5px solid transparent;
  }
  &::after {
    left: 100%;
    margin-left: $tail-h-offset;
    border-left: ($banner-height / 2) solid
      darken($color-action, $darken-amount);
    border-right: 5px solid transparent;
  }
}

.title {
  color: var(--color-white);
  text-shadow: 1px 1px 1px #000;
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

.row {
  display: grid;
  grid-gap: 1em;
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
    &--transparent {
      background: rgba(var(--color-white), 0.9);
    }
  }

  &--recommended {
    @include breakpoint-max(sm) {
      margin-top: 1em;
    }
  }
}

.usps {
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
