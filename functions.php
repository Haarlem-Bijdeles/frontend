<?php

add_action( 'wp_ajax_nopriv_post_form', 'post_form' );

function post_form() {
		// Handle request then generate response using WP_Ajax_Response

		check_ajax_referer( get_bloginfo("name") . "_post_form", "security" );

		echo $_POST['message'];

		echo "verzonden";
		// Don't forget to stop execution afterward.
		wp_die();
}

function theme_style() {
	// Theme stylesheet.
	wp_enqueue_style( 'haarlem-bij-de-les', get_stylesheet_uri() );
	wp_enqueue_style( 'haarlem-bij-de-les-fonts', 'https://fonts.googleapis.com/css?family=Open+Sans:400,700');
}
add_action( 'wp_enqueue_scripts', 'theme_style' );


function register_menus() {
  register_nav_menus(
    array(
      'header-menu' => 'Header Menu',
      'footer-menu' => 'Footer Menu'
    )
  );
}
add_action( 'init', 'register_menus' );


function add_default_scripts() {
  wp_enqueue_script( 'functions', get_template_directory_uri() . '/scripts/functions.js', null, false, true);

  wp_localize_script( 'functions', 'site', array(
    'ajaxurl' => admin_url( 'admin-ajax.php' )
  ));
}

add_action( 'wp_enqueue_scripts', 'add_default_scripts' );



function register_testimonials() {

  $labels_testimonials = array(
    'name'               => 'Testimonials',
    'singular_name'      => 'Testimonial',
    'add_new'            => 'Nieuwe testimonial',
    'add_new_item'       => 'Nieuwe testimonial toevoegen',
    'edit_item'          => 'Testimonial bewerken',
    'new_item'           => 'Nieuwe testimonial',
    'view_item'          => 'Testimonial bekijken',
    'search_items'       => 'Zoeken in testimonials',
    'not_found'          => 'Geen testimonial gevonden',
    'not_found_in_trash' => 'Geen testimonial gevonden in de prullenbak',
    'parent_item_colon'  => 'Bovenliggende testimonial:',
    'menu_name'          => 'Testimonials'
  );

  register_post_type(
    'testimonial', array(
      'labels'               => $labels_testimonials,
      'menu_icon'            => 'dashicons-format-quote',
      'hierarchical'         => false,
      'description'          => 'Testimonials',
      'supports'             => array( 'title', 'thumbnail'),
      'public'               => false,
      'show_ui'              => true,
      'show_in_menu'         => true,
      'menu_position'        => 25,
      'show_in_nav_menus'    => false,
      'publicly_queryable'   => true,
      'exclude_from_search'  => false,
      'has_archive'          => true,
      'query_var'            => true,
      'can_export'           => true,
      'rewrite'              => array( 'slug' => 'posters' ),
      'capability_type'      => 'post'
    )
  );
}

add_action( 'init', 'register_testimonials', 0 );

function register_site_details() {
  acf_add_options_page(array(
    'page_title'  => 'Site details',
    'position' => 26,
    'icon_url' => 'dashicons-layout',
  ));
}

add_action( 'init', 'register_site_details', 0 );
