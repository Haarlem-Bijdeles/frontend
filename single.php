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

							<h1 class="blog__title"><a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>"><?php the_title(); ?></a></h1>
				 				<div class="blog__meta">
				 					<?php the_date(); ?>
				 				</div>
			 					<?php the_content(); ?>
				 			</div>
			 			</div>
					</div>
				</li>
		<?php endwhile; ?>
	</ul>
</div>

<?php $recent_posts = get_posts(array(
	"posts_per_page" => 3,
	"exclude" => get_the_ID()
)); ?>

<div class="blog">
	<ul class="blog__list">
			<?php	foreach( $recent_posts as $post ) : ?>
				<?php setup_postdata($post); ?>

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
		<?php endforeach; ?>
	</ul>
</div>


<div class="paging">
	<a href="<?php the_permalink(get_option("page_for_posts")); ?>">Bekijk alle berichten</a>
</div>

<?php wp_reset_query(); ?>



<?php //get_template_part('partials/testimonials'); ?>

<?php get_footer(); ?>