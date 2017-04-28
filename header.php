<?php wp_head(); ?>

	<header class="header" role="banner">
		<div class="header__wrapper">
			<a href="<?php echo home_url(); ?>" title="<?php bloginfo('name'); ?>" class="header__logo">
			</a>

			<nav aria-label="site" class="menu">
				<button class="menu__trigger" aria-expanded="false">
					<svg class="menu__icon">
						<use xlink:href="#icon-menu"></use>
					</svg>
					Menu
				</button>

				<?php wp_nav_menu( array(
							'theme_location'  => 'header-menu',
							'container' 			=> false,
							'menu_class'      => 'menu__list'
						) ); ?>
			</nav>
		</div>
	</header>


	<main id="main" class="main">