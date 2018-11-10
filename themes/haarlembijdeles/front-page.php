<?php

$context = Timber::get_context();
$post = Timber::query_post();
$context['post'] = $post;
$context['testimonials'] = get_testimonials();
Timber::render('front-page.twig', $context);
