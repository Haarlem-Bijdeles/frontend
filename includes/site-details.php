<?php
function register_site_details() {
  acf_add_options_page(array(
    'page_title'  => 'Site details',
    'position' => 26,
    'icon_url' => 'dashicons-layout',
  ));
}

add_action( 'init', 'register_site_details', 0 );
