<?php get_header(); ?>

<article class="content">
	<?php while ( have_posts() ) : the_post(); ?>
			<div class="text">
				<?php the_content(); ?>
			</div>
	<?php endwhile; ?>
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

<div class="prices2">
		<?php the_post_thumbnail('large', [
			'class' => 'prices2__image',
			'title' => get_the_title(),
			'alt' => get_the_title()
			]); ?>
	<div class="prices2__wrapper">
		<div class="prices2__text">
			<h2 class="prices2__title">Kies het pakket dat bij uw kind past:</h2>
			<ul>
				<li>
					<div class="prices2__label">Twee dagen</div>
					<svg class="prices2__icon">
						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-check-rounded"></use>
					</svg>
					<div class="prices2__value">
						&euro; 200,- p/m
					</div>
				</li>


				<li>
					<div class="prices2__label">Drie dagen</div>
					<svg class="prices2__icon">
						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-check-rounded"></use>
					</svg>
					<div class="prices2__value">
						&euro; 250,- p/m
					</div>
					</li>
				<li>
					<div class="prices2__label">Vier dagen</div>
					<svg class="prices2__icon">
						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-check-rounded"></use>
					</svg>
					<div class="prices2__value">
						&euro; 290,- p/m
					</div>
				</li>
				<li>
					<div class="prices2__label">Vijf dagen</div>
					<svg class="prices2__icon">
						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-check-rounded"></use>
					</svg>
					<div class="prices2__value">
						&euro; 320,- p/m
					</div>
				</li>
			</ul>
		</div>
	</div>
</div>

<?php get_footer(); ?>