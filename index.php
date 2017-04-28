<?php get_header(); ?>

<article class="content">
	<?php while ( have_posts() ) : the_post(); ?>
			<div class="text">
 				<h2><a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>"><?php the_title(); ?></a></h2>
 				<p>
 					<?php the_excerpt(); ?>
 					<a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>">Lees verder &hellip;</a>
 				</p>
			</div>
	<?php endwhile; ?>
</article>


<?php get_template_part('partials/testimonials'); ?>

<?php get_footer(); ?>