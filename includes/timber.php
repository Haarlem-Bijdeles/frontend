<?php

add_filter('timber_context', 'add_to_context');
function add_to_context($data){
  /* Now, in similar fashion, you add a Timber menu and send it along to the context. */
  $data['menu'] = new TimberMenu('header-menu');
  $data['footer_menu'] = new TimberMenu('footer-menu');
  $data['options'] = get_fields('options');
  return $data;
}


