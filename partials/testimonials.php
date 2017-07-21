<?php
$testimonials = new WP_Query( array(
		'post_type' => 'testimonial',
		'posts_per_page' => 3,
		'orderby' => 'rand'
	));
?>
<?php if ( $testimonials->have_posts() ) : ?>
	<div class="testimonials">
		<ul class="testimonials__list">
			<?php while ( $testimonials->have_posts() ) : $testimonials->the_post(); ?>
			<li class="testimonial">
				<?php if ( has_post_thumbnail() ) : ?>
					<?php the_post_thumbnail('thumbnail', array('class' => 'quote__image')); ?>
				<?php endif; ?>
				<div class="testimonial__text">
					<div class="user-meta">
						<span class="user-name"><?php the_title(); ?></span>
						<span class="user-class"><?php the_field('class'); ?></span>
					</div>
					<blockquote class="quote"><?php the_field('quote'); ?></blockquote>
				</div>
			</li>
			<?php endwhile; ?>
		</ul>
	</div>
<?php endif; ?>
