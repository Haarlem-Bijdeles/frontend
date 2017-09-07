<?php

define( 'VERSION', 2.3 );

function theme_style() {
  // Theme stylesheet.
  if (is_front_page()) {
    $data['stylesheet'] = sprintf("%s?ver=%s", get_stylesheet_uri(), VERSION);
    Timber::render('views/partials/critical.twig', $data);
  } else {
    wp_enqueue_style( 'haarlem-bij-de-les', get_stylesheet_uri(), false, VERSION);
  }
}

add_action( 'wp_enqueue_scripts', 'theme_style', 10 );

function add_default_scripts() {
  wp_enqueue_script( 'functions', get_template_directory_uri() . '/assets/scripts/functions.js', null, VERSION);

  if (is_page('werkwijze'))
    wp_enqueue_script( 'sticky-nav', get_template_directory_uri() . '/assets/scripts/sticky-nav.js', null, VERSION);

  if (is_page('contact')) {
    wp_enqueue_script( 'contact', get_template_directory_uri() . '/assets/scripts/contact.js', null, VERSION);
    wp_enqueue_script( 'google-maps', 'http://maps.google.com/maps/api/js?sensor=false&amp;callback=initMap', 'contact', VERSION, true);

    $addresses = array();
    while (have_rows('addresses', 'options')) : the_row();
      if (get_sub_field('latitude') && get_sub_field('longitude')) {
        $address = array(
          'street' => get_sub_field('street'),
          'zipcode' => get_sub_field('zipcode'),
          'city' => get_sub_field('city'),
          'latitude' => get_sub_field('latitude'),
          'longitude' => get_sub_field('longitude'),
        );

        array_push($addresses, $address);
      }
    endwhile;

    wp_localize_script( 'functions', 'locations', $addresses);
    wp_localize_script( 'functions', 'site', array(
      'ajaxurl' => admin_url( 'admin-ajax.php' ),
      'theme_url' => get_bloginfo('template_url')
    ));
  }


}
add_action( 'wp_enqueue_scripts', 'add_default_scripts' );

function addFavicons() {
  Timber::render('views/partials/favicons.twig');
}
add_action('wp_head', 'addFavicons', 15);
