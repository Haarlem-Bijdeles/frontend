<?php

$context = Timber::get_context();
$post = Timber::query_post();
$context['post'] = $post;
$context['nounce'] = wp_create_nonce("submit-form");

Timber::render( 'page-contact.twig', $context);
