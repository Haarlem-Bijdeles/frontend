<?php wp_head(); ?>

	<header class="header" role="banner">
		<div class="header__wrapper">
			<a href="<?php echo home_url(); ?>" title="<?php bloginfo('name'); ?>" class="header__logo">
				<svg class="header__logo-icon">
					<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-logo"></use>
				</svg>
			</a>

			<nav aria-label="site" class="menu">
				<button class="menu__trigger" aria-expanded="false">
					<svg class="menu__icon" viewBox="0 0 24 24">
						<title>menu</title>
						<path class="menu-icon__bar menu-icon__bar--1" d="M19,7H4A1,1,0,0,1,4,5H19a1,1,0,0,1,0,2Z"/>
						<path class="menu-icon__bar menu-icon__bar--2" d="M19,13H4a1,1,0,0,1,0-2H19a1,1,0,0,1,0,2Z"/>
						<path class="menu-icon__bar menu-icon__bar--3" d="M19,19H4a1,1,0,0,1,0-2H19a1,1,0,0,1,0,2Z"/>
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

		<?php get_template_part('partials/hero'); ?>
