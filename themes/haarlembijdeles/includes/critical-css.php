<?php

function add_critical_css()
{
    if (is_front_page()) {
        $version = wp_get_theme()->get('Version');

        $data['stylesheet'] = sprintf(
            "%s?ver=%s",
            get_template_directory_uri() . '/assets/css/style.css',
            $version
        );
        $data['critical_css'] = 'assets/css/critical.css';

        wp_dequeue_style('adler');

        Timber::render('views/partials/defaults/critical.twig', $data);
    }
}
add_action('wp_head', 'add_critical_css', 5);
