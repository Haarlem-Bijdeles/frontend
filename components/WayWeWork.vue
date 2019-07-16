<template>
  <div class="way-we-work">
    <nav>
      <ul>
        <li>
          <a href="#werkwijze-1"
            >Persoonlijke aandacht en een gemotiveerde leerling</a
          >
        </li>
        <li>
          <a href="#werkwijze-2">Leerstijlen en leerstrategieën</a>
        </li>
        <li>
          <a href="#werkwijze-3">Verwerking van de lesstof</a>
        </li>
      </ul>
    </nav>

    <div class="list">
      <archive-wrapper
        image="https://www.haarlembijdeles.nl/wp-content/uploads/2017/08/IMG_4737-280x0-c-default.jpg"
      >
        <template v-slot:title>
          Persoonlijke aandacht en een gemotiveerde leerling
        </template>
        <p>
          Wij streven naar een persoonlijke band met elke leerling. Dit maakt de
          bijlessen en huiswerkbegeleiding van Haarlem Bijdeles persoonlijk,
          prettig en succesvol. Het zorgt er namelijk voor dat blokkades worden
          besproken en dat het kind oprechte interesse ervaart aangaande zijn
          persoonlijkheid. Onze ervaring is dat wanneer leerlingen zich
          gewaardeerd voelen, er tijd voor ze wordt gemaakt er blokkades
          wegvallen. Als jonge docenten weten wij vaak goed waar de leerlingen
          doorheen gaan. Wij maken de ontwikkeling van dichtbij mee en houden de
          ouders op de hoogte van de vorderingen.
        </p>
        <p>
          Vanuit deze persoonlijke band kunnen we de leerling het beste
          motiveren. Wij zijn er om de leerling te ondersteunen en te helpen,
          maar de echte ‘drive’ moet uit het kind zelf komen, dat zit tenslotte
          zelf in de schoolbanken de proefwerken te maken. Daarom combineren wij
          tijdens de bijlessen en huiswerkbegeleiding hard werken met plezier;
          zodat een gemotiveerde leerling met zelfvertrouwen naar school kan.
        </p>
        <p>
          Uiteindelijk zijn het verkrijgen van inzicht en het behalen van
          resultaten natuurlijk de grootste motivators. Veel leerlingen
          hervinden het plezier in het leren wanneer ze de lesstof weer
          begrijpen. Daarom werkt Haarlem Bijdeles bovenal doelgericht. De
          persoonlijke aandacht en de motivatie staan in dienst van het
          verbeteren van de schoolresultaten. Of het doel nu is om over te gaan,
          achterstanden weg te werken, een specifiek onderwerp te begrijpen of
          het cijfer op te hogen, samen met de leerling en de ouders gaan wij
          aan de slag om mooie resultaten te behalen.
        </p>
      </archive-wrapper>
      <archive-wrapper
        id="werkijze-2"
        image="https://www.haarlembijdeles.nl/wp-content/uploads/2017/08/IMG_4758-280x0-c-default.jpg"
      >
        <template v-slot:title>
          Leerstijlen en leerstrategieën
        </template>
        <p>
          In onze ogen zijn er drie leermomenten: 1) in de les 2) op de
          huiswerkbegeleiding en 3) thuis. Echter leert elk kind op zijn/haar
          eigen manier. Sommige kinderen leren het beste door te doen en te
          experimenteren, anderen door te observeren. Het ene kind leert beter
          door te luisteren naar een uitleg, het andere door de lesstof te
          bekijken op een filmpje of foto. Elk kind heeft ook een eigen
          motivatie om te leren. Sommige kinderen leren omdat ze de lesstof
          interessant vinden, anderen omdat ze de lesstof moeten reproduceren.
          Dit zijn allemaal verschillende leerstijlen (voor meer informatie over
          de leerstijlen, nodigen wij jullie graag uit op een vrijblijvende
          intake)
        </p>
        <p>
          Bij het leren hoort een aanpak, een leerstrategie. Een goede
          leerstrategie sluit aan op de leerstijl van de leerling. Tijdens de
          bijlessen en huiswerkbegeleiding van Haarlem Bijdeles is er veel
          aandacht voor de verschillende leerstijlen en -strategieën. Wij maken
          de leerlingen bewust van hun leerstijl en denken samen na over goede
          leerstrategieën. Ook bieden wij een aantal keer per jaar een cursus
          ‘leren leren’ voor alle leerlingen die huiswerkbegeleiding krijgen.
        </p>
      </archive-wrapper>
      <archive-wrapper
        id="werkijze-3"
        image="https://www.haarlembijdeles.nl/wp-content/uploads/2017/08/IMG_6286-280x0-c-default.jpg"
      >
        <template v-slot:title>
          Verwerking van de lesstof
        </template>
        <p>
          Een leerstijl- en strategie hebben gevolgen voor de verwerking van de
          lesstof. Veel leerlingen zijn de geleerde lesstof na een proefwerk al
          snel weer vergeten, waardoor ze voor een volgende proefwerk opnieuw
          moeten leren. Dit komt doordat de lesstof niet goed wordt verwerkt.
        </p>
        <p>
          Er bestaat een onderscheid tussen oppervlakkige verwerking en
          diepgaande verwerking. De door scholieren veel gebruikte leerstrategie
          die is gericht op reproductie, herhaling en het ‘stampen’ van de
          lesstof leidt tot oppervlakkige verwerking en korte termijn
          herinnering. De leerstrategie die in de bijlessen en
          huiswerkbegeleiding van Haarlem Bijdeles wordt toegepast is gericht op
          begrip, verbanden leggen en kritisch nadenken. Dit leidt tot
          diepgaande verwerking, lange termijn herinnering en betere resultaten
          op school.
        </p>
      </archive-wrapper>
    </div>
  </div>
</template>

<script>
import ArchiveWrapper from '@/components/ArchiveWrapper.vue'

export default {
  components: {
    ArchiveWrapper,
  },
}
</script>

<style lang="postcss" scoped>
.way-we-work {
  position: relative;
  background: var(--color-white);
}

nav {
  display: none;

  @mixin center;
  position: sticky;
  top: 0;
  background: var(--color-white);
  padding: 0.5em 0;
  @media (--viewport-md) {
    display: block;
  }

  & ul {
    @mixin list-reset;
    display: flex;
    justify-content: center;
  }

  & li {
    margin-right: 1em;
    padding-left: 0;
    border: 1px solid #7f7f7f;
    padding: 0.25em 0.5em;
    border-radius: 0.25em;
    font-weight: 400;

    &::before {
      background: none;
    }

    &.is-active {
      background: $color-action;
      border-color: $color-action;

      a {
        color: #fff;
      }
    }

    &:last-child {
      margin-right: 0;
    }
  }

  & a {
    @mixin link-reset;
    display: block;
    text-align: center;
  }
}

.item:nth-child(2n) >>> .image-wrapper {
  order: 2;
  @media (--viewport-sm) {
    padding: 0 0 0 var(--gutter);
  }
}
</style>
