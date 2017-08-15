<?php
add_action("wp", "redirect_about_us");
function redirect_about_us () {
  if (is_page('wie-zijn-wij')) {
    wp_redirect('/wie-zijn-wij/onze-mensen/');
    exit;
  }
}


