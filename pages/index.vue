<template>
  <div>
    <app-hero />

    <div class="about">
      <div class="about__row">
        <div class="usps">
          <div class="teaser__usps">
            <h2 class="teaser__title">Wat kunnen jullie verwachten?</h2>
            <ul class="teaser__list">
              <li>
                <svg class="teaser__icon">
                  <use
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xlink:href="#icon-chevron-right"
                  ></use>
                </svg>
                Een positieve aanpak en groeiend zelfvertrouwen
              </li>
              <li>
                <svg class="teaser__icon">
                  <use
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xlink:href="#icon-chevron-right"
                  ></use>
                </svg>
                Thuis minder gedoe en meer vrije tijd
              </li>
              <li>
                <svg class="teaser__icon">
                  <use
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xlink:href="#icon-chevron-right"
                  ></use>
                </svg>
                Persoonlijke coaching door jonge, hoogopgeleide docenten
              </li>
              <li>
                <svg class="teaser__icon">
                  <use
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xlink:href="#icon-chevron-right"
                  ></use>
                </svg>
                Inhoudelijke ondersteuning en een rustige werkplek
              </li>
              <li>
                <svg class="teaser__icon">
                  <use
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xlink:href="#icon-chevron-right"
                  ></use>
                </svg>
                Aandacht voor Leren Leren en betere resultaten op school
              </li>
              <li>
                <svg class="teaser__icon">
                  <use
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xlink:href="#icon-chevron-right"
                  ></use>
                </svg>
                Leerlingenvolgsysteem op maat
              </li>
            </ul>
          </div>
          <div class="teaser__usps">
            <h2 class="teaser__title">Ons aanbod:</h2>
            <ul class="teaser__list">
              <li>
                <svg class="teaser__icon">
                  <use
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xlink:href="#icon-chevron-right"
                  ></use>
                </svg>
                Huiswerkbegeleiding
              </li>
              <li>
                <svg class="teaser__icon">
                  <use
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xlink:href="#icon-chevron-right"
                  ></use>
                </svg>
                Bijles
              </li>
              <li>
                <svg class="teaser__icon">
                  <use
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xlink:href="#icon-chevron-right"
                  ></use>
                </svg>
                Examentraining
              </li>
              <li>
                <svg class="teaser__icon">
                  <use
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xlink:href="#icon-chevron-right"
                  ></use>
                </svg>
                Coaching
              </li>
              <li>
                <svg class="teaser__icon">
                  <use
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xlink:href="#icon-chevron-right"
                  ></use>
                </svg>
                Alle vakken
              </li>
              <li>
                <svg class="teaser__icon">
                  <use
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xlink:href="#icon-chevron-right"
                  ></use>
                </svg>
                vmbo, havo, vwo
              </li>
              <li>
                <svg class="teaser__icon">
                  <use
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xlink:href="#icon-chevron-right"
                  ></use>
                </svg>
                In het centrum van Haarlem
              </li>
            </ul>
          </div>
        </div>
        <div class="prices">
          <div class="prices__col">
            <h2 class="prices__title">Tarieven</h2>
            <ul class="prices__list">
              <li>
                <svg class="prices__icon">
                  <use
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xlink:href="#icon-chevron-right"
                  ></use>
                </svg>
                Huiswerkbegeleiding vanaf € 240,- p.m.
              </li>
              <li>
                <svg class="prices__icon">
                  <use
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xlink:href="#icon-chevron-right"
                  ></use>
                </svg>
                Individuele bijles € 30,- p.u.
              </li>
            </ul>
          </div>
          <div class="prices__col">
            <a
              class="prices__btn-cta"
              href="https://www.haarlembijdeles.nl/contact"
              >Maak direct een afspraak</a
            >
            <a href="tel:06%20-%2028%2032%2057%2033" class="prices__btn-call"
              >Bel Tim: 06 - 28 32 57 33</a
            >
          </div>
        </div>
      </div>
    </div>
    <article class="content">
      <div class="text">
        <div class="lead">
          <p>
            Op zoek naar huiswerkbegeleiding in Haarlem? Huiswerkbegeleiding van
            Haarlem Bijdeles is gericht op persoonlijke aandacht, een positieve
            sfeer, structuur, planning en motivatie. Leerlingen die thuis veel
            afgeleid zijn, kunnen op de huiswerkbegeleiding gestructureerd aan
            school werken. Wanneer een leerling moeite heeft met één vak, biedt
            Haarlem Bijdeles individuele bijles. Bij zowel de
            huiswerkbegeleiding als bijles is er veel aandacht voor Leren Leren.
            Zo verbeteren de resultaten, vermindert de stress thuis, en groeit
            het zelfvertrouwen van de leerling.
          </p>
        </div>
      </div>
    </article>

    <services />
    <testimonials />
  </div>
</template>

<script>
import AppHero from '@/components/AppHero.vue'
import Services from '@/components/Services.vue'
import Testimonials from '@/components/Testimonials.vue'

export default {
  components: {
    AppHero,
    Services,
    Testimonials,
  },
}
</script>
