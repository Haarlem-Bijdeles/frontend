<?php

function theme_style() {
	// Theme stylesheet.
	wp_enqueue_style( 'haarlem-bij-de-les', get_stylesheet_uri() );
}
add_action( 'wp_enqueue_scripts', 'theme_style' );
