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
  wp_enqueue_script( 'ajax-script', get_template_directory_uri() . '/src/script/contact.js', null, false, true);
  wp_enqueue_script( 'menu', get_template_directory_uri() . '/src/script/menu.js', null, false, true);

  wp_localize_script( 'ajax-script', 'site', array(
    'ajaxurl' => admin_url( 'admin-ajax.php' )
  ));
}

add_action( 'wp_enqueue_scripts', 'add_default_scripts' );
