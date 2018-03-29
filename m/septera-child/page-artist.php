<?php 
/**
 * Template Name: Artist
 */
?>


<?php
    get_header();
        echo('<div class="container">');
            //tutaj bedzie petla

	/* WP_query argumenty*/
	$args = array (
		'post_type' => 'artist', // Typ postów
		'posts_per_page' => 5 // Liczba wyświetlanych postów na stronie
	);

	$the_query = new WP_Query( $args ); 

	/* Jeżeli istnieją posty o podanych argumentach */
	if ( $the_query->have_posts() ) :

		/* Początek pętli */
		while ( $the_query->have_posts() ) : $the_query->the_post();

			/* Obrazek wyróżniający jeśli dodany */
			if ( has_post_thumbnail() && ! post_password_required() ) :

            echo get_the_post_thumbnail( null, 'full' );

			endif;
            echo('<a href="');
            echo get_post_permalink();
            echo('">');
			the_title(); // Tytuł postu
            echo('</a>');
			the_content(); // Zawartość postu

		endwhile;
		/* Koniec pętli */

		/* Paginacja tutaj */

	wp_reset_postdata();

	else:

	 _e( 'Nie ma postów spełniających dane kryteria', 'text-domain' );

	endif;
    echo('</div>');
    echo('<div class="clear"></div>');
    get_footer();
?>
