<?php

add_filter('timber_context', 'add_to_context');
function add_to_context($data){
  /* Now, in similar fashion, you add a Timber menu and send it along to the context. */
  $data['menu'] = new TimberMenu('header-menu');
  $data['footer_menu'] = new TimberMenu('footer-menu');
  $data['options'] = get_fields('options');

  if (is_404()) {
    $hero_title = 'Pagina niet gevonden';
  } elseif (is_single() || is_home()) {
    $blog = get_post(get_option("page_for_posts"));
    $hero_title = $blog->post_title;
    $hero_image = get_post_thumbnail_id($blog->ID);
  } else {
    $hero_title = get_the_title();
    $hero_image = get_post_thumbnail_id();
  }

  $data['hero'] = array(
    'title' => $hero_title,
    'image' => (isset($hero_image)) ? $hero_image : get_field('hero', 'option'),
    'is_front_page' => is_front_page()
  );

  return $data;
}


