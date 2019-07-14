<template>
  <section class="student-parent" aria-labelledby="student-parent-title">
    <h1 id="student-parent-title" class="sr-only">
      Voor de ouders en leerling
    </h1>
    <div class="wrapper">
      <div class="student">
        <h2>Voor de leerling:</h2>
        <ul class="list">
          <li>
            Persoonlijke aandacht van betrokken docenten
          </li>
          <li>
            Een vrije en ontspannen sfeer waar rustig gewerkt kan worden
          </li>
          <li>Inhoudelijke hulp bij alle vakken</li>
          <li>
            Ondersteuning bij het maken van een planning
          </li>
          <li>Overhoringen en SO’s voor proefwerken</li>
          <li>Focus op het Leren Leren</li>
        </ul>
      </div>
      <div class="parent">
        <h2>Voor de ouders:</h2>
        <ul class="list">
          <li>Gratis en vrijblijvend kennismakingsgesprek</li>
          <li>Geen opzegtermijn</li>
          <li>Eigen leerlingenvolgsysteem Maginda</li>
          <li>Maandelijks verslag van de vorderingen</li>
          <li>
            Betere resultaten op school en een gemotiveerder kind
          </li>
          <li>
            Het verminderen van stress aan het thuisfront
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="postcss" scoped>
.student-parent {
  @mixin center;
}

.wrapper {
  position: relative;
  @media (--viewport-sm) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    &::before,
    &::after {
      top: 100%;
      border: 0 solid transparent;
      content: ' ';
      height: 0;
      width: 0;
      position: absolute;
      pointer-events: none;
      border-top-color: #88b7d5;
      border-top-width: 2em;
      z-index: 9;
    }

    &::before {
      border-left-width: 2em;
      right: 50%;
      border-top-color: #06b326;
    }

    &::after {
      border-right-width: 2em;
      left: 50%;
      border-top-color: #b5e8bd;
    }
  }
}

.parent,
.student {
  padding: var(--gutter);
}

.student {
  background: #06b326;
  color: var(--color-white);
}

.parent {
  background: #b5e8bd;
}

.list {
  @mixin list-reset;
}
</style>
