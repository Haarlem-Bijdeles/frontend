<?php
/* Template Name: Onze mensen */
$context = Timber::get_context();
$post = new TimberPost();
$context['post'] = $post;

Timber::render( 'page-employers.twig', $context );
