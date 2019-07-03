<template>
  <div class="testimonials">
    <ul class="testimonials__list">
      <li class="testimonial">
        <div class="testimonial__text">
          <div class="user-meta">
            <span class="user-name">Vader Daaf</span>
          </div>
          <blockquote class="quote">
            Dank voor de tomeloze inzet en hulp!
          </blockquote>
        </div>
      </li>
      <li class="testimonial">
        <div class="testimonial__text">
          <div class="user-meta">
            <span class="user-name">Ouder Ashfaq</span>
          </div>
          <blockquote class="quote">
            Door huiswerkbegeleiding is zoveel meer dan de hulp bij het maken
            van huiswerk. Jullie positieve aanpak en coaching heeft enorm
            geholpen! Niet alleen bij het stimuleren van schoolwerk, maar ook
            als persoon.
          </blockquote>
        </div>
      </li>
      <li class="testimonial">
        <div class="testimonial__text">
          <div class="user-meta">
            <span class="user-name">Moeder Sem</span>
          </div>
          <blockquote class="quote">
            Naast de cijfers die zijn verbeterd is het zelfvertrouwen enorm
            gegroeid.
          </blockquote>
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="postcss" scoped>
.testimonials {
  @mixin center;
  @include block-padding();
}

.testimonials__list {
  @mixin list-reset;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(14em, 1fr));
}

.testimonial {
  text-align: center;
  margin-bottom: 2em;
}

.user-meta {
  line-height: 1.3;
  margin-bottom: 0.5em;
}

.user-name {
  display: block;
  font-weight: var(--font-weight-bold);
}
</style>
