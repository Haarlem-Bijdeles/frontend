<?php
function register_testimonials()
{
  $labels_testimonials = array(
    'name' => 'Testimonials',
    'singular_name' => 'Testimonial',
    'add_new' => 'Nieuwe testimonial',
    'add_new_item' => 'Nieuwe testimonial toevoegen',
    'edit_item' => 'Testimonial bewerken',
    'new_item' => 'Nieuwe testimonial',
    'view_item' => 'Testimonial bekijken',
    'search_items' => 'Zoeken in testimonials',
    'not_found' => 'Geen testimonial gevonden',
    'not_found_in_trash' => 'Geen testimonial gevonden in de prullenbak',
    'parent_item_colon' => 'Bovenliggende testimonial:',
    'menu_name' => 'Testimonials',
  );

  register_post_type('testimonial', array(
    'show_in_graphql' => true,
    'graphql_single_name' => 'testimonial',
    'graphql_plural_name' => 'testimonials',
    'labels' => $labels_testimonials,
    'menu_icon' => 'dashicons-format-quote',
    'hierarchical' => false,
    'description' => 'Testimonials',
    'supports' => array('title'),
    'public' => false,
    'show_ui' => true,
    'show_in_menu' => true,
    'menu_position' => 25,
    'show_in_nav_menus' => false,
    'publicly_queryable' => true,
    'exclude_from_search' => false,
    'has_archive' => true,
    'query_var' => true,
    'can_export' => true,
    'rewrite' => array('slug' => 'posters'),
    'capability_type' => 'post',
  ));
}

add_action('init', 'register_testimonials', 0);
