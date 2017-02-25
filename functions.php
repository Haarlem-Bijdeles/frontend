<?php

function theme_style() {
	// Theme stylesheet.
	wp_enqueue_style( 'haarlem-bij-de-les', get_stylesheet_uri() );
	wp_enqueue_style( 'haarlem-bij-de-les-fonts', 'https://fonts.googleapis.com/css?family=Open+Sans:400,600,700');

}
add_action( 'wp_enqueue_scripts', 'theme_style' );