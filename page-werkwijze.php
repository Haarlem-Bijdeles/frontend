<?php get_header(); ?>

<article class="content">
	<?php while ( have_posts() ) : the_post(); ?>
		<div class="text">
			<div class="lead">
				<?php the_content(); ?>
			</div>
		</div>

		<?php if( have_rows('way-we-work') ) : ?>
			<?php $index = 0; ?>

			<div class="way-we-work">
				<nav>
					<ul>
						<?php while ( have_rows('way-we-work') ) : the_row(); $index++; ?>
							<li><a href="#werkwijze-<?php echo $index; ?>" class="js-scroll"><?php the_sub_field('title'); ?></a></li>
						<?php endwhile; ?>
					</ul>
				</nav>
				<?php $index = 0; ?>

				<div class="way-we-work__list">
						<?php while ( have_rows('way-we-work') ) : the_row(); $index++; ?>
						<div class="way-we-work__item">
							<div class="way-we-work__wrapper">
								<?php setup_postdata( $post ); ?>
								<div class="way-we-work__body" id="werkwijze-<?php echo $index; ?>">
									<div class="way-we-work__image-wrapper">
										<?php $image_ID = get_sub_field('image'); ?>
										<?php if( !empty($image_ID) ): ?>
											<?php echo wp_get_attachment_image($image_ID, 'medium', false, array('class' => 'way-we-work__image')); ?>
										<?php endif; ?>
									</div>
									<div class="way-we-work__text">
										<h2><?php the_sub_field('title'); ?></h2>
										<?php the_sub_field('text'); ?>
									</div>
								</div>
							</div>
						</div>
					<?php endwhile; ?>
				</div>
			</div>
		<?php endif; ?>
	<?php endwhile; ?>
</article>

<?php get_footer(); ?>