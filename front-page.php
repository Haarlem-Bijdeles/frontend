<?php get_header(); ?>


<?php while ( have_posts() ) : the_post(); ?>
	<?php get_template_part('partials/hero'); ?>
	<div class="about">
		<div class="about__row">
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
				<div class="teaser__usps">
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
			<div class="prices">
				<h2 class="prices__title">Ons aanbod</h2>
				<ul class="prices__list">
					<li>Huiswerkbegeleiding vanaf &euro; 200,- per maand</li>
					<li>Individuele bijles &euro; 25,- per uur</li>
				</ul>
				<a class="prices__btn-cta">Maak direct een afspraak</a>
				<a class="prices__btn-call">Of bel met 06 28 32 57 33</a>
			</div>
		</div>
	</div>
	<article class="content">
			<div class="text">
				<div class="lead">
					<?php the_content(); ?>
				</div>
			</div>
	</article>
<?php endwhile; ?>

<?php get_template_part('partials/testimonials'); ?>

<?php get_footer(); ?>
