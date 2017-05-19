<?php get_header(); ?>

<article class="content">

	<?php while ( have_posts() ) : the_post(); ?>
		<?php get_template_part('partials/hero'); ?>
		<div class="contact">
			<div class="contact__row">
				<div class="contact__map">
 					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9741.199788363134!2d4.6378296139902115!3d52.38311264804979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5ef6c2277441b%3A0x44db6c2d89893d5c!2sJansstraat+33%2C+2011+RT+Haarlem!5e0!3m2!1snl!2snl!4v1415027846084" class="contact__iframe"></iframe>
				</div>
				<address class="contact__address">
					<p>
						Jansstraat 33<br>
						2011RT, Haarlem
					</p>
					<p>
						06 28 32 57 33
						info@haarlembijdeles.nl
					</p>
					<p>
							KvK-nummer:57774374
					</p>
				</address>
				<form class="contact__form js-contact-form" method="post" action="<?php the_permalink(); ?>">
					<p class="message" id="feedback"></p>

					<input type="hidden" name="action" value="post_form">
					<input type="hidden" name="security" value="<?php echo wp_create_nonce(get_bloginfo("name") . "_post_form"); ?>">

					<div class="form-group">
						<label for="name">Naam</label>
						<input type="text" id="name" id="name" maxlength="50" required class="js-name">
					</div>
					<div class="form-group">
						<label for="email">E-mailadres</label>
						<input type="email" id="email" name="email" maxlength="50" required class="js-email">
					</div>
					<div class="form-group">
						<label for="message">Bericht</label>
						<textarea id="message" name="message" rows="3" required class="js-message"></textarea>
					</div>
					<input type="submit" name="">
				</form>
			</div>
		</div>
	<?php endwhile; ?>
</article>

<?php get_template_part('partials/testimonials'); ?>

<?php get_footer(); ?>
