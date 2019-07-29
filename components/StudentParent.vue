<template>
  <section class="student-parent" aria-labelledby="student-parent-title">
    <h1 id="student-parent-title" class="sr-only">
      Voor de ouders en leerling
    </h1>
    <div class="wrapper">
      <div v-if="students.length" class="student">
        <h2>Voor de leerling:</h2>
        <ul class="list">
          <li v-for="item in students" :key="item.text">{{ item.text }}</li>
        </ul>
      </div>
      <div v-if="parents.length" class="parent">
        <h2>Voor de ouders:</h2>
        <ul class="list">
          <li v-for="item in parents" :key="item.text">{{ item.text }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    students: {
      type: Array,
      default: () => [],
    },
    parents: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

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
