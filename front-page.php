<?php get_header(); ?>

<article class="content">

	<?php while ( have_posts() ) : the_post(); ?>
		<?php get_template_part('partials/hero'); ?>
		<div class="about">
			<div class="usps">
				<div class="teaser__usps">
					<h2 class="teaser__title">Waarom haarlembijdeles?</h2>
					<ul class="teaser__list">
						<li>Persoonlijke aandacht</li>
						<li>Planning en structuur</li>
						<li>Jonge, hoogopgeleide docenten</li>
						<li>In het centrum van Haarlem</li>
						<li>Prettige en positieve sfeer</li>
						<li>Aandacht voor Leren Leren</li>
						<li>Lange termijn resultaten</li>
					</ul>
				</div>
				<div class="teaser__products">
					<h2 class="teaser__title">Ons aanbod</h2>
					<ul class="teaser__list">
						<li>Persoonlijke aandacht</li>
						<li>Planning en structuur</li>
						<li>Jonge, hoogopgeleide docenten</li>
						<li>In het centrum van Haarlem</li>
						<li>Prettige en positieve sfeer</li>
						<li>Aandacht voor Leren Leren</li>
						<li>Lange termijn resultaten</li>
					</ul>
				</div>
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

<?php get_template_part('partials/testimonials'); ?>

<?php get_footer(); ?>
