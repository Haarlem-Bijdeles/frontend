<?php
/* Template Name: Contact */

function get_address_data() {
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

  return 'var locations = ' . wp_json_encode($addresses);
}

function get_site_data() {
  $site = [
    'ajax_url'       => admin_url( 'admin-ajax.php' ),
    'theme_url'      => get_bloginfo('template_url'),
  ];

  return 'var site = ' . wp_json_encode($site);
}

function add_scripts_on_contact_page() {
  $version = wp_get_theme()->get('Version');

  wp_enqueue_script( 'contact', get_template_directory_uri() . '/assets/scripts/contact.js', null, $version);
  wp_add_inline_script( 'contact', get_address_data(), 'before');
  wp_add_inline_script( 'contact', get_site_data(), 'before');

  add_form_scripts();
}

add_action( 'wp_enqueue_scripts', 'add_scripts_on_contact_page' );


// define the wp_resource_hints callback
function add_google_maps_to_dns_prefetch( $urls, $relation_type ) {
    if ( 'dns-prefetch' === $relation_type ) {
      $urls[] = 'maps.googleapis.com';
    }
    return $urls;
};

// add the filter
add_filter( 'wp_resource_hints', 'add_google_maps_to_dns_prefetch', 10, 2 );

$context = Timber::get_context();
$post = Timber::query_post();
$context['post'] = $post;
$context['ajax_url']           = admin_url('admin-ajax.php');

$context['nounce'] = wp_create_nonce("submit-form");

Timber::render( 'page-contact.twig', $context);
