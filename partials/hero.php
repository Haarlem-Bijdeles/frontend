
	<?php if (has_post_thumbnail()) : ?>

		<div class="hero<?php echo (is_front_page()) ? " hero--front-page" : ""; ?>">
			<?php the_post_thumbnail('large', [
				'class' => 'hero__image',
				'title' => get_the_title(),
				'alt' => get_the_title()
				]); ?>
			<div class="hero__wrapper">
				<div class="hero__text">
					<h1 class="hero__title"><?php the_title(); ?></h1>
				</div>
			</div>
		</div>
	<?php endif; ?>
