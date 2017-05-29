<?php get_header(); ?>

<div class="archive">
	<ul class="archive__list">
			<?php while ( have_posts() ) : the_post(); ?>
				<li class="archive__item">
					<div class="archive__wrapper">

						<div class="archive__body">
							<div class="archive__image-wrapper">
									<?php the_post_thumbnail('medium', [
										'class' => 'archive__image',
										'title' => get_the_title(),
										'alt' => get_the_title()
										]); ?>
							</div>

							<div class="archive__text">

				 				<h2 class="archive__title"><a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>"><?php the_title(); ?></a></h2>
				 				<div class="archive__meta">
				 					<?php the_date(); ?>
				 				</div>
			 					<?php the_excerpt(); ?>
			 					<a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>" class="archive__link">Lees verder &hellip;</a>
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