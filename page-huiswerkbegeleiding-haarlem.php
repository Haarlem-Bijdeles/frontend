<?php get_header(); ?>

<article class="content">
	<?php while ( have_posts() ) : the_post(); ?>
			<?php get_template_part('partials/hero'); ?>

			<div class="text">
				<?php the_content(); ?>
			</div>
	<?php endwhile; ?>
</article>

<div class="highlights">
	<div class="highlights__wrapper">
		<div class="highlight">
			<h2>Voor de leerling:</h2>
			<ul>
				<li>Persoonlijke aandacht van betrokken docenten</li>
				<li>Een vrije en ontspannen sfeer waar rustig gewerkt kan worden</li>
				<li>Inhoudelijke hulp bij alle vakken</li>
				<li>Ondersteuning bij het maken van een planning</li>
				<li>Overhoringen en SO’s voor proefwerken</li>
				<li>Een Cursus Leren Leren, meerdere keren per jaar</li>
			</ul>
		</div>
		<div class="highlight">
			<h2>Voor de ouders:</h2>
			<ul>
				<li>Gratis en vrijblijvend kennismakingsgesprek</li>
				<li>Geen opzegtermijn</li>
				<li>Leerlingenvolgprogramma Studyassist</li>
				<li>Maandelijks verslag van de vorderingen</li>
				<li>Betere resultaten op school en een gemotiveerder kind</li>
				<li>Thuis stress wegnemen</li>
			</ul>
		</div>
	</div>
</div>

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