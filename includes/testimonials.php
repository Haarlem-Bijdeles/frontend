<?php
function get_testimonials() {
  $testimonials = array(
    'post_type' => 'testimonial',
    'posts_per_page' => 3,
    'orderby' => 'rand'
  );
  return Timber::get_posts($testimonials);
}