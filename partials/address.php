<address itemscope itemtype="http://schema.org/Organization">
  <span itemprop="name"><?php bloginfo('name'); ?></span>
  <p itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
    <span itemprop="streetAddress"><?php the_field('street', 'option'); ?></span><br>
    <span itemprop="locality"><?php the_field('city', 'option'); ?></span>,
    <span itemprop="postal-code"><?php the_field('zipcode', 'option'); ?></span>
  </p>

  <p>
    <a href="tel:<?php echo esc_url(get_field('phonenumber', 'option')); ?>" itemprop="telephone"><?php the_field('phonenumber', 'option'); ?></a><br>
    <a href="mailto:<?php the_field('email', 'option'); ?>" itemprop="email"><?php the_field('email', 'option'); ?></a><br>
  </p>
  <p>
  <?php if (get_field('kvk', 'option')) : ?>
    KVK: <?php the_field('kvk', 'option'); ?>
  <?php endif; ?>
  </p>
</address>
