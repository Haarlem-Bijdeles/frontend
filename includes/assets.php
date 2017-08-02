<?php
function theme_style() {
  // Theme stylesheet.
  wp_enqueue_style( 'haarlem-bij-de-les', get_template_directory_uri() . '/assets/css/style.css', false);
  wp_enqueue_style( 'haarlem-bij-de-les-fonts', 'https://fonts.googleapis.com/css?family=Open+Sans:400,700');
}
add_action( 'wp_enqueue_scripts', 'theme_style' );


function add_default_scripts() {
  wp_enqueue_script( 'functions', get_template_directory_uri() . '/assets/scripts/functions.js', null, false, true);

  wp_localize_script( 'functions', 'site', array(
    'ajaxurl' => admin_url( 'admin-ajax.php' )
  ));
}
add_action( 'wp_enqueue_scripts', 'add_default_scripts' );
