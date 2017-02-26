<?php wp_head(); ?>

<div class="layout">
	<header class="header">
		<a href="<?php echo home_url(); ?>" title="<?php bloginfo('name'); ?>" class="header__logo">
			<img src="<?php bloginfo('template_url'); ?>/images/logo.png" alt="<?php bloginfo('name'); ?>" style="display: block">
		</a>
		<nav class="menu__list">
			<ol class="menu">
				<li class="active">Werkwijze</li>
				<li>Huiswerkbegeleiding</li>
				<li>Bijles</li>
				<li>Eindexamens</li>
				<li>Wie zijn wij</li>
				<li>Blog</li>
				<li>Contact</li>
			</ol>
		</nav>
	</header>

	<div class="content">