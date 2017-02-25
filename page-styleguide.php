<?php get_header('styleguide'); ?>

<link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri(); ?>/styleguide.css">

<?php get_template_part('styleguide/atoms/' . $_GET['type']); ?>

</body>
</html>

