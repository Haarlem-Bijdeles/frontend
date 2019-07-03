<template>
  <div class="hero">
    <img
      src="https://www.haarlembijdeles.nl/wp-content/uploads/2017/09/170208_Bijdeles_64_HR-800x0-c-default.jpg"
      alt="Haarlem Bijdeles - huiswerkbegeleiding Haarlem"
      class="image"
      srcset="
        https://www.haarlembijdeles.nl/wp-content/uploads/2017/09/170208_Bijdeles_64_HR-1140x0-c-default.jpg 1140w,
        https://www.haarlembijdeles.nl/wp-content/uploads/2017/09/170208_Bijdeles_64_HR-800x0-c-default.jpg   800w,
        https://www.haarlembijdeles.nl/wp-content/uploads/2017/09/170208_Bijdeles_64_HR-640x0-c-default.jpg   640w
      "
      sizes="(min-width: 1140px) 1140px, 100vw"
      data-object-fit="cover"
    />
    <div class="wrapper">
      <div class="text">
        <h1 id="content" class="title js-skip-content">
          Huiswerkbegeleiding in het centrum van Haarlem
        </h1>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.hero {
  position: relative;
  text-shadow: 1px 1px 1px #000;
}

.title {
  color: var(--color-white);
}

.image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.wrapper {
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 1rem;
}

.content {
  @mixin center;
}
</style>
