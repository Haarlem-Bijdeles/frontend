<?php if (is_404()) : ?>

	<?php if (get_field('hero', 'option')) : ?>
		<?php $image_ID = get_field('hero', 'option'); ?>
		<?php if( !empty($image_ID) ): ?>
			<div class="hero">
				<?php echo wp_get_attachment_image($image_ID, 'large', false, array('class' => 'hero__image')); ?>
				<div class="hero__wrapper">
					<div class="hero__text">
						<h1 class="hero__title">Pagina niet gevonden</h1>
					</div>
				</div>
			</div>
		<?php endif; ?>
	<?php endif; ?>

<?php elseif (is_home() || is_single() || is_404()) : ?>

	<?php if (get_field('hero', 'option')) : ?>
		<?php $image_ID = get_field('hero', 'option'); ?>
		<?php if( !empty($image_ID) ): ?>
			<div class="hero">
				<?php echo wp_get_attachment_image($image_ID, 'large', false, array('class' => 'hero__image')); ?>
				<div class="hero__wrapper">
					<div class="hero__text">
						<h1 class="hero__title">Blog</h1>
					</div>
				</div>
			</div>
		<?php endif; ?>
	<?php endif; ?>

<?php else : ?>

	<?php while ( have_posts() ) : the_post(); ?>

			<?php if (has_post_thumbnail() || get_field('hero', 'option')) : ?>
				<div class="hero<?php echo (is_front_page()) ? " hero--front-page" : ""; ?>">
					<?php if (has_post_thumbnail()) : ?>

						<?php the_post_thumbnail('large', [
							'class' => 'hero__image',
							'title' => get_the_title(),
							'alt' => get_the_title()
							]); ?>
					<?php else : ?>
						<?php $image_ID = get_field('hero', 'option'); ?>
						<?php if( !empty($image_ID) ): ?>
							<?php echo wp_get_attachment_image($image_ID, 'large', false, array('class' => 'hero__image')); ?>
						<?php endif; ?>
					<?php endif; ?>
					<div class="hero__wrapper">
					<div class="hero__text">
						<h1 class="hero__title"><?php the_title(); ?></h1>
					</div>
				</div>
			</div>
		<?php endif; ?>
	<?php endwhile; ?>

<?php endif; ?>