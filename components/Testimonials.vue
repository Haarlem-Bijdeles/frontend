<template>
  <section class="testimonials" aria-labelledby="testimonials-title">
    <h2 id="testimonials-title" class="sr-only">Onze waarderingen</h2>
    <ul class="list">
      <li class="testimonial">
        <div class="testimonial__text">
          <blockquote class="quote">
            <cite class="cite">Vader Daaf</cite>
            Dank voor de tomeloze inzet en hulp!
          </blockquote>
        </div>
      </li>
      <li class="testimonial">
        <div class="testimonial__text">
          <blockquote class="quote">
            <cite class="cite">Ouder Ashfaq</cite>
            Door huiswerkbegeleiding is zoveel meer dan de hulp bij het maken
            van huiswerk. Jullie positieve aanpak en coaching heeft enorm
            geholpen! Niet alleen bij het stimuleren van schoolwerk, maar ook
            als persoon.
          </blockquote>
        </div>
      </li>
      <li class="testimonial">
        <div class="testimonial__text">
          <blockquote class="quote">
            <cite class="cite">Moeder Sem</cite>
            Naast de cijfers die zijn verbeterd is het zelfvertrouwen enorm
            gegroeid.
          </blockquote>
        </div>
      </li>
    </ul>
  </section>
</template>

<style lang="postcss" scoped>
.testimonials {
  @mixin center;
  @mixin block-padding;
}

.list {
  @mixin list-reset;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(14em, 1fr));
  grid-gap: var(--gutter);
}

.testimonial {
  text-align: center;
}

.cite {
  line-height: 1.3;
  margin-bottom: 0.25em;
  display: block;
  font-weight: var(--font-weight-bold);
}
</style>
