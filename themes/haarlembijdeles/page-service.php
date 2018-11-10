<?php
/* Template Name: Dienst */
$context = Timber::get_context();
$post = new TimberPost();
$context['post'] = $post;

$context['testimonials'] = get_testimonials();

Timber::render('page-service.twig', $context);
