<?php
/* Template Name: Werkwijze */
function add_scripts_on_procedure_page()
{
    $version = wp_get_theme()->get('Version');

    wp_enqueue_script(
        'procedure',
        get_template_directory_uri() . '/assets/scripts/procedure.js',
        null,
        $version
    );
}

add_action('wp_enqueue_scripts', 'add_scripts_on_procedure_page');

$context = Timber::get_context();
$post = new TimberPost();
$context['testimonials'] = get_testimonials();

$context['post'] = $post;
Timber::render('page-procedure.twig', $context);
