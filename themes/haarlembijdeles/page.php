<?php
$context = Timber::get_context();
$post = new TimberPost();
$context['testimonials'] = get_testimonials();

$context['post'] = $post;
Timber::render( array( 'page-' . $post->post_name . '.twig', 'page.twig' ), $context );
