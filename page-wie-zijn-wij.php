<?php get_header(); ?>

<article class="content">

	<?php get_template_part('partials/intro'); ?>

	<div class="videos">
		<div class="videos__wrapper">
			<div class="video__col">
				<div class="video">
					<iframe src="//player.vimeo.com/video/<?php the_field('video_1'); ?>" allowfullscreen="allowfullscreen"></iframe>
				</div>
			</div>
			<div class="video__col">
				<div class="video">
					<iframe src="//player.vimeo.com/video/<?php the_field('video_2'); ?>" allowfullscreen="allowfullscreen"></iframe>
				</div>
			</div>
		</div>
	</div>

	<?php if( have_rows('employers') ) : ?>
		<div class="about-us">
			<div class="about-us__list">
				<?php while ( have_rows('employers') ) : the_row(); ?>
					<div class="about-us__item">
						<div class="about-us__wrapper">
							<div class="about-us__body">
								<div class="about-us__image-wrapper">
									<?php $image_ID = get_sub_field('image'); ?>
									<?php if( !empty($image_ID) ): ?>
										<?php echo wp_get_attachment_image($image_ID, 'medium', false, array('class' => 'about-us__image')); ?>
									<?php endif; ?>
								</div>
								<div class="about-us__text">
									<h2><?php the_sub_field('name'); ?></h2>
									<?php the_sub_field('bio'); ?>
									<p class="social">
										<?php if (get_sub_field('facebook')) : ?>
											<a href="<?php the_sub_field('facebook'); ?>" class="archive__link" title="Volg <?php the_sub_field('name');?> op Facebook" rel="noopener">
												<svg class="archive__icon">
													<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-facebook-rounded"></use>
												</svg>
											</a>
										<?php endif; ?>
										<?php if (get_sub_field('twitter')) : ?>
											<a href="<?php the_sub_field('twitter'); ?>" class="archive__link" title="Volg <?php the_sub_field('name');?> op Twitter" rel="noopener">
												<svg class="archive__icon">
													<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-twitter-rounded"></use>
												</svg>
											</a>
										<?php endif; ?>
										<?php if (get_sub_field('linkedin')) : ?>
											<a href="<?php the_sub_field('linkedin'); ?>" class="archive__link" title="Volg <?php the_sub_field('name');?> op LinkedIn" rel="noopener">
												<svg class="archive__icon">
													<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-linkedin-rounded"></use>
												</svg>
											</a>
										<?php endif; ?>
									</p>
								</div>
							</div>
						</div>
					</div>
				<?php endwhile; ?>
			</div>
		</div>
	<?php endif; ?>
</article>

<?php //get_template_part('partials/testimonials'); ?>

<?php get_footer(); ?>
