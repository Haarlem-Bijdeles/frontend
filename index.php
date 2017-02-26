<?php get_header(); ?>

<article>
	<?php while ( have_posts() ) : the_post(); ?>
			<div class="hero-image">
				<?php the_post_thumbnail('post-thumbnail', [
					'class' => 'hero-image__image',
					'title' => get_the_title(),
					'alt' => get_the_title()
					]); ?>
				<div class="hero-image__text">
					<h1 class="hero-image__title"><?php the_title(); ?></h1>
				</div>
			</div>
			<div class="text">
				<h2></h2>
				<p class="lead">
					Op zoek naar huiswerkbegeleiding in Haarlem? Huiswerkbegeleiding van Haarlem Bijdeles is vooral gericht op persoonlijke aandacht, een prettige sfeer, structuur, planning en motivatie. Leerlingen die thuis teveel afgeleid zijn, kunnen op de huiswerkbegeleiding gestructureerd aan school werken. Hierbij is ook veel aandacht voor Leren Leren.
				</p>
				<?php the_content(); ?>
			</div>
	<?php endwhile; ?>
</article>

<ul class="testimonials">
<?php for ($i = 0; $i < 3; $i++) : ?>
	<li class="testimonial">
		<img src="<?php bloginfo('template_url'); ?>/images/quote.jpg" class="quote__image">
		<div class="testimonial__text">
			<span class="user-name">Mieke de Vries</span>
			<span class="user-class">VWO 4</span>
			<blockquote class="quote">Ik heb enorm veel geleerd bij Haarlembijdeles. Waarom het voor mij werkt is de persoonlijke aanpak.</blockquote>
		</div>
	</li>
<?php endfor; ?>
</ul>

<?php get_footer(); ?>