<?php get_header(); ?>

<article class="content">

	<?php while ( have_posts() ) : the_post(); ?>
		<div class="contact">
			<div class="contact__row">
				<div class="contact__map">
	 				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9741.199788363134!2d4.6378296139902115!3d52.38311264804979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5ef6c2277441b%3A0x44db6c2d89893d5c!2sJansstraat+33%2C+2011+RT+Haarlem!5e0!3m2!1snl!2snl!4v1415027846084" class="contact__iframe"></iframe>
					<div class="contact__address">
						<?php get_template_part('partials/address'); ?>
					</div>
				</div>
				<form class="contact__form js-contact-form" method="post" action="<?php the_permalink(); ?>">
					<p class="message" id="feedback"></p>

					<input type="hidden" name="action" value="submit_ajax_form">
					<input type="hidden" name="formkey" value="contact">
					<input type="hidden" name="security" value="<?php echo wp_create_nonce("submit-form");?>">

					<div class="form-group">
						<label for="name">Naam</label>
						<input type="text" id="name" name="name" maxlength="50" required class="js-name" value="Naam">
					</div>
					<div class="form-group">
						<label for="email">E-mailadres</label>
						<input type="email" id="email" name="email" maxlength="50" required class="js-email" value="mail@4michielkoning.nl">
					</div>
					<div class="form-group">
						<label for="message">Bericht</label>
						<textarea id="message" name="message" rows="3" required class="js-message">Bericht</textarea>
					</div>
					<input type="submit" class="contact__submit">
				</form>
			</div>
		</div>
	<?php endwhile; ?>
</article>

<?php // get_template_part('partials/testimonials'); ?>

<?php get_footer(); ?>
