<?php get_header(); ?>

<div class="blog">
	<ul class="blog__list">
			<?php while ( have_posts() ) : the_post(); ?>
				<li class="blog__item">
					<div class="blog__wrapper">

						<div class="blog__body">
							<div class="blog__image-wrapper">
									<?php the_post_thumbnail('medium', [
										'class' => 'blog__image',
										'title' => get_the_title(),
										'alt' => get_the_title()
										]); ?>
							</div>

							<div class="blog__text">

				 				<h2 class="blog__title"><a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>"><?php the_title(); ?></a></h2>
				 				<div class="blog__meta">
				 					<?php the_date(); ?>
				 				</div>
			 					<?php the_excerpt(); ?>
			 					<a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>" class="blog__link">Lees verder &hellip;</a>
				 			</div>
			 			</div>
					</div>
				</li>
		<?php endwhile; ?>
	</ul>
</div>

<div class="paging">
	<div class="paging__previous"><?php previous_posts_link(  ); ?></div>
	<div class="paging__next"><?php next_posts_link(  ); ?></div>
</div>


<?php // get_template_part('partials/testimonials'); ?>

<?php get_footer(); ?>