<?php
function theme_style()
{
    // Theme stylesheet.
    $version = wp_get_theme()->get('Version');
    wp_enqueue_style(
        'haarlembijdels',
        get_template_directory_uri() . '/assets/css/style.css',
        false,
        $version
    );
}

add_action('wp_enqueue_scripts', 'theme_style');

function getGaTrackingScript()
{
    return "var gaId = '" . get_field('analytics', 'option') . "'";
}

function add_scripts()
{
    $version = wp_get_theme()->get('Version');

    wp_enqueue_script(
        'functions',
        get_template_directory_uri() . '/assets/scripts/main.js',
        null,
        $version
    );
    $gaTrackingId = 'var gaTrackingId  = ' . get_field('analytics', 'option');

    wp_add_inline_script('functions', getGaTrackingScript(), 'before');
}

add_action('wp_enqueue_scripts', 'add_scripts');

function add_favicons()
{
    $context = Timber::get_context();
    Timber::render('views/partials/defaults/favicons.twig', $context);
}
add_action('wp_head', 'add_favicons', 15);

// define the wp_resource_hints callback
function add_domains_to_dns_prefetch($urls, $relation_type)
{
    if ('dns-prefetch' === $relation_type) {
        $urls[] = 'https://www.google-analytics.com';
        $urls[] = 'https://www.googletagmanager.com';
        $urls[] = 'https://www.google.com';
    }
    return $urls;
}

// add the filter
add_filter('wp_resource_hints', 'add_domains_to_dns_prefetch', 10, 2);
