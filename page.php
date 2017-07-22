<?php get_header(); ?>

<article class="content">
	<?php while ( have_posts() ) : the_post(); ?>

			<div class="text">
<!-- 				<p class="lead">
					Op zoek naar huiswerkbegeleiding in Haarlem? Huiswerkbegeleiding van Haarlem Bijdeles is vooral gericht op persoonlijke aandacht, een prettige sfeer, structuur, planning en motivatie. Leerlingen die thuis teveel afgeleid zijn, kunnen op de huiswerkbegeleiding gestructureerd aan school werken. Hierbij is ook veel aandacht voor Leren Leren.
				</p>
 -->
 				<?php the_content(); ?>
			</div>
	<?php endwhile; ?>
</article>


<?php get_template_part('partials/testimonials'); ?>

<?php get_footer(); ?>