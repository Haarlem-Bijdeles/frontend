<?php get_header(); ?>

<?php while ( have_posts() ) : the_post(); ?>
	<div class="about">
		<div class="about__row">
			<div class="usps">
				<?php if( have_rows('usps') ) : ?>
					<div class="teaser__usps">
						<h2 class="teaser__title">Waarom haarlembijdeles?</h2>
						<ul class="teaser__list">
							<?php while ( have_rows('usps') ) : the_row(); ?>
								<li><?php the_sub_field('text'); ?></li>
							<?php endwhile; ?>
						</ul>
					</div>
				<?php endif; ?>
				<?php if( have_rows('offers') ) : ?>
					<div class="teaser__usps">
						<h2 class="teaser__title">Ons aanbod</h2>
						<ul class="teaser__list">
								<?php while ( have_rows('offers') ) : the_row(); ?>
									<li><?php the_sub_field('text'); ?></li>
								<?php endwhile; ?>
						</ul>
					</div>
				<?php endif; ?>
			</div>
			<div class="prices">
				<?php if( have_rows('prices') ) : ?>
					<h2 class="prices__title">Tarieven</h2>
					<ul class="prices__list">
						<?php while ( have_rows('prices') ) : the_row(); ?>
							<li><?php the_sub_field('text'); ?></li>
						<?php endwhile; ?>
					</ul>
				<?php endif; ?>
				<a class="prices__btn-cta" href="<?php echo site_url(); ?>/contact">Maak direct een afspraak</a>
				<a href="tel:<?php the_field('phonenumber', 'option'); ?>" class="prices__btn-call">Of bel met <?php the_field('phonenumber', 'option'); ?></a>
			</div>
		</div>
	</div>
	<article class="content">

		<?php get_template_part('partials/intro'); ?>

	</article>


<?php endwhile; ?>

<div class="prices2">
		<div class="prices2__wrapper">
			<div class="prices2__text">
				<h2 class="prices2__title">Dit zijn onze diensten:</h2>
				<ul class="prices2__list">

					<li class="prices2__list-item">
						<div class="prices2__header">
							<div class="prices2__label">Huiswerkbegeleiding</div>
						</div>
						<ul>
								<li class="prices2__usp">3 middagen per week huiswerkbegeleiding</li>
								<li class="prices2__usp">Persoonlijke begeleiding en studiecoach</li>
								<li class="prices2__usp">1 Examenzondag per maand</li>
								<li class="prices2__usp">3 SE-trainingen voor iedere SE-week</li>
								<li class="prices2__usp">3 Examentrainingen in april</li>
						</ul>
						<a href="#" class="prices2__btn">Meer informatie</a>
					</li>

					<li class="prices2__list-item">
						<div class="prices2__header">
							<div class="prices2__label">Bijles</div>
						</div>
						<ul>
								<li class="prices2__usp">3 middagen per week huiswerkbegeleiding</li>
								<li class="prices2__usp">Persoonlijke begeleiding en studiecoach</li>
								<li class="prices2__usp">1 Examenzondag per maand</li>
								<li class="prices2__usp">3 SE-trainingen voor iedere SE-week</li>
								<li class="prices2__usp">3 Examentrainingen in april</li>
						</ul>
						<a href="#" class="prices2__btn">Meer informatie</a>

					</li>

					<li class="prices2__list-item">
						<div class="prices2__header">
							<div class="prices2__label">Examenbegeleiding</div>
						</div>
						<ul>
								<li class="prices2__usp">3 middagen per week huiswerkbegeleiding</li>
								<li class="prices2__usp">Persoonlijke begeleiding en studiecoach</li>
								<li class="prices2__usp">1 Examenzondag per maand</li>
								<li class="prices2__usp">3 SE-trainingen voor iedere SE-week</li>
								<li class="prices2__usp">3 Examentrainingen in april</li>
						</ul>
						<a href="#" class="prices2__btn">Meer informatie</a>
					</li>



				</ul>
			</div>
		</div>
	</div>

<?php get_template_part('partials/testimonials'); ?>

<?php get_footer(); ?>
