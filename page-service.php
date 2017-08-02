<?php /* Template Name: Dienst */ ?>

<?php get_header(); ?>

<article class="content">
	<?php get_template_part('partials/intro'); ?>
</article>

<?php if( have_rows('student') && have_rows('parents') ) : ?>
	<div class="highlights">
		<div class="highlights__wrapper">
				<div class="highlight">
					<h2>Voor de leerling:</h2>
					<ul>
						<?php while ( have_rows('student') ) : the_row(); ?>
							<li><?php the_sub_field('text'); ?></li>
						<?php endwhile; ?>
					</ul>
				</div>
			<div class="highlight">
				<h2>Voor de ouders:</h2>
				<ul>
					<?php while ( have_rows('parents') ) : the_row(); ?>
						<li><?php the_sub_field('text'); ?></li>
					<?php endwhile; ?>
				</ul>
			</div>
		</div>
	</div>
<?php endif; ?>

<?php if ( have_rows('prices') ) :?>

	<div class="prices2">
		<div class="prices2__wrapper">
			<div class="prices2__text">
				<h2 class="prices2__title">Kies het pakket dat bij uw kind past:</h2>
				<ul class="prices2__list">
					<?php while ( have_rows('prices') ) : the_row(); ?>

					<li class="prices2__list-item">
						<div class="prices2__header">
							<div class="prices2__label"><?php the_sub_field('title'); ?></div>
							<div class="prices2__value">
								<svg class="prices2__icon">
									<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-check-rounded"></use>
								</svg>
								<?php the_sub_field('price'); ?>
							</div>
						</div>
						<?php if ( have_rows('usps') ) :?>
							<ul>
								<?php while ( have_rows('usps') ) : the_row(); ?>
									<li class="prices2__usp"><?php the_sub_field('text'); ?></li>
								<?php endwhile; ?>
							</ul>
						<?php endif; ?>
					</li>
					<?php endwhile; ?>

				</ul>
			</div>
			<a href="<?php echo site_url(); ?>/contact" class="prices__btn-contact">Neem contact met ons op</a>
		</div>
	</div>
<?php endif; ?>

<?php get_template_part('partials/testimonials'); ?>

<?php get_footer(); ?>