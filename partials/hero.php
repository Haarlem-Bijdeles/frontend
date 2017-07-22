<?php if (is_home() || is_single()) : ?>

	<div class="hero">
		<img src="<?php bloginfo('template_url'); ?>/images/hero.jpg" alt="<?php the_title(); ?>" class="hero__image">
		<div class="hero__wrapper">
			<div class="hero__text">
				<h1 class="hero__title">Blog</h1>
			</div>
		</div>
	</div>

<?php else : ?>

	<?php while ( have_posts() ) : the_post(); ?>

			<div class="hero<?php echo (is_front_page()) ? " hero--front-page" : ""; ?>">

				<?php if (has_post_thumbnail()) : ?>
					<?php the_post_thumbnail('large', [
						'class' => 'hero__image',
						'title' => get_the_title(),
						'alt' => get_the_title()
						]); ?>
					<?php else : ?>

						<img src="<?php bloginfo('template_url'); ?>/images/hero.jpg" alt="<?php the_title(); ?>" class="hero__image">

					<?php endif; ?>
					<div class="hero__wrapper">
					<div class="hero__text">
						<h1 class="hero__title"><?php the_title(); ?></h1>
					</div>
				</div>
			</div>
	<?php endwhile; ?>

<?php endif; ?>