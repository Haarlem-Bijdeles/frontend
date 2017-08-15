	</main>

	<footer class="footer">
		<div class="footer__wrapper">

			<a href="<?php echo home_url(); ?>" title="<?php bloginfo('name'); ?>" class="footer__logo">
				<svg class="footer__logo-icon">
					<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-logo"></use>
				</svg>
			</a>

			<nav class="quick-links" aria-labelledby="footer-nav-heading">
				<h2 id="footer-nav-heading">Handige links</h2>
					<?php wp_nav_menu( array(
						'theme_location'  => 'footer-menu',
						'container' 			=> false,
						'menu_class'      => 'footer__list'
					) ); ?>
			</nav>
			<div class="address">
				<h2>Contact</h2>
				<?php get_template_part('partials/address'); ?>
			</div>
			<div class="social-media">
				<h2>Social media</h2>
				<p>Volg ons op</p>
				<?php if (get_field('facebook', 'option')) : ?>
					<a href="<?php the_field('facebook', 'option'); ?>" class="archive__link" title="Volg Haarlem Bij de Les op Facebook" rel="noopener" target="_blank">
						<svg class="footer__icon">
							<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-facebook-rounded"></use>
						</svg>
					</a>
				<?php endif; ?>
				<?php if (get_field('twitter', 'option')) : ?>
					<a href="<?php the_field('twitter', 'option'); ?>" class="archive__link" title="Volg Haarlem Bij de Les op Twitter" rel="noopener" target="_blank">
						<svg class="footer__icon">
							<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-twitter-rounded"></use>
						</svg>
					</a>
				<?php endif; ?>
				<?php if (get_field('linkedin', 'option')) : ?>
					<a href="<?php the_field('linkedin', 'option'); ?>" class="archive__link" title="Volg Haarlem Bij de Les op LinkedIn" rel="noopener" target="_blank">
						<svg class="footer__icon">
							<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-linkedin-rounded"></use>
						</svg>
					</a>
				<?php endif; ?>

			</div>
		</div>
	</footer>

<?php get_template_part('partials/icons'); ?>

<?php wp_footer(); ?>