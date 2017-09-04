<?php

define( 'VERSION', 2.2 );

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

  if (is_page('contact'))
    wp_enqueue_script( 'contact', get_template_directory_uri() . '/assets/scripts/contact.js', null, VERSION);

  wp_localize_script( 'functions', 'site', array(
    'ajaxurl' => admin_url( 'admin-ajax.php' )
  ));
}
add_action( 'wp_enqueue_scripts', 'add_default_scripts' );

function addFavicons() {
  Timber::render('views/partials/favicons.twig');
}
add_action('wp_head', 'addFavicons', 15);
