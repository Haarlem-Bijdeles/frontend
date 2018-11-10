<?php

$context = Timber::get_context();
$post = Timber::query_post();
$context['post'] = $post;

$recent_posts = array(
    "posts_per_page" => 3,
    "post__not_in" => array($post->ID),
);
$context['recent_posts'] = Timber::get_posts($recent_posts);
$context['url_for_posts'] = get_permalink(get_option("page_for_posts"));

Timber::render('single.twig', $context);
