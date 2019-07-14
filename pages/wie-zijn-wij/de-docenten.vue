<template>
  <div>
    <article>
      <app-hero
        image="https://www.haarlembijdeles.nl/wp-content/uploads/2017/09/170208_Bijdeles_64_HR-1140x0-c-default.jpg"
        :title="title"
      />
      <usps />

      <intro :text="text" />
    </article>
    <ul class="list">
      <teacher
        v-for="teacher in teachers"
        :key="teacher.title.rendered"
        :post="teacher"
      />
    </ul>
    <videos />
  </div>
</template>

<script>
import axios from '~/plugins/axios'
import AppHero from '@/components/AppHero.vue'
import Intro from '@/components/Intro.vue'
import Teacher from '@/components/Teacher.vue'
import Videos from '@/components/Videos.vue'

export default {
  components: {
    AppHero,
    Intro,
    Teacher,
    Videos,
  },
  data() {
    return {
      teachers: [
        {
          image:
            'https://www.haarlembijdeles.nl/wp-content/uploads/2017/08/170208_Bijdeles_08_LR-280x0-c-default.jpg',
          title: {
            rendered: 'Tim',
          },
          excerpt: {
            rendered:
              'Tim Koning heeft vwo Economie & Maatschappij afgerond op de Vrije School in Haarlem. Hij heeft Sport Marketing afgerond aan de Johan Cruyff University en heeft zijn bachelor Psychologie aan de Universiteit van Amsterdam behaald. Tim heeft hierbij als specialisatie de klinische richting gekozen. Daarnaast heeft hij een master behaald in Sport- en Prestatiepsychologie. Deze master heeft veel raakvlakken met het onderwijs, hier gaat het immers ook om presteren. Daarnaast is Tim actief geweest als invaldocent bij het Sancta Maria. Tim is onze rainman, de man van de cijfers. Vakken waarin Tim bijles geeft zijn o.a. Wiskunde, Economie, Natuurkunde, M&O en Scheikunde. ',
          },
        },
        {
          image:
            'https://www.haarlembijdeles.nl/wp-content/uploads/2017/08/170208_Bijdeles_11_LR-280x0-c-default.jpg',
          title: {
            rendered: 'Michiel',
          },
          excerpt: {
            rendered:
              'Michiel van Schagen heeft vwo Cultuur & Maatschappij afgerond op de Vrije School in Haarlem. Daarna heeft hij Politicologie gestudeerd aan de Universiteit van Amsterdam. Michiel heeft zijn Master Internationale Betrekking Cum Laude afgerond. Daarna is hij gaan werken als werkgroepdocent op de universiteit, waar hij werkgroepen Public Policy geeft aan studenten. Hij geeft de bijlessen in talen, geschiedenis en aardrijkskunde. Michiel geeft niet alleen bijlessen, hij helpt studenten ook met schrijfopdrachten en scripties.',
          },
        },
        {
          image:
            'https://www.haarlembijdeles.nl/wp-content/uploads/2017/08/170208_Bijdeles_08_LR-280x0-c-default.jpg',
          title: {
            rendered: 'Tim',
          },
          excerpt: {
            rendered:
              'Tim Koning heeft vwo Economie & Maatschappij afgerond op de Vrije School in Haarlem. Hij heeft Sport Marketing afgerond aan de Johan Cruyff University en heeft zijn bachelor Psychologie aan de Universiteit van Amsterdam behaald. Tim heeft hierbij als specialisatie de klinische richting gekozen. Daarnaast heeft hij een master behaald in Sport- en Prestatiepsychologie. Deze master heeft veel raakvlakken met het onderwijs, hier gaat het immers ook om presteren. Daarnaast is Tim actief geweest als invaldocent bij het Sancta Maria. Tim is onze rainman, de man van de cijfers. Vakken waarin Tim bijles geeft zijn o.a. Wiskunde, Economie, Natuurkunde, M&O en Scheikunde. ',
          },
        },
        {
          image:
            'https://www.haarlembijdeles.nl/wp-content/uploads/2017/08/170208_Bijdeles_11_LR-280x0-c-default.jpg',
          title: {
            rendered: 'Michiel',
          },
          excerpt: {
            rendered:
              'Michiel van Schagen heeft vwo Cultuur & Maatschappij afgerond op de Vrije School in Haarlem. Daarna heeft hij Politicologie gestudeerd aan de Universiteit van Amsterdam. Michiel heeft zijn Master Internationale Betrekking Cum Laude afgerond. Daarna is hij gaan werken als werkgroepdocent op de universiteit, waar hij werkgroepen Public Policy geeft aan studenten. Hij geeft de bijlessen in talen, geschiedenis en aardrijkskunde. Michiel geeft niet alleen bijlessen, hij helpt studenten ook met schrijfopdrachten en scripties.',
          },
        },
      ],
    }
  },
  head() {
    return {
      title: this.title,
    }
  },

  async asyncData({ params }) {
    const response = await axios.get(`wp/v2/pages/`, {
      params: {
        slug: 'de-docenten',
      },
    })

    return {
      title: response.data[0].title.rendered,
    }
  },

  meta: {
    step: 4,
  },
}
</script>

<style lang="postcss" scoped>
.list {
  @mixin list-reset;
}
</style>
