<?php
add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_styles' );
function my_theme_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
    
    wp_enqueue_script('main', get_stylesheet_directory_uri() . '/js/main.js', array('jquery'), 1.0, true);
}

// Funkcja tworząca custom post type
	function register_offer_post_type() {

		$labels = array(
			'name'               => __( 'Artysci', 'text-domain' ), // Ogólna nazwa typu postów
			'singular_name'      => __( 'Artysta', 'text-domain' ) // Nazwa dla jednego obiektu tego typu
		);

		$supports = array( 'title', 'thumbnail', 'editor' );

		$args = array(
			'labels'              => $labels, // Etykiety dla danego typu postów
			'description'         => __( 'Lista artystow.', 'text-domain' ), // Opis
			'public'              => true, // Kontrola widoczności tego typu postów
			'has_archive'         => true, // Czy dany typ postów ma archiwum
			'rewrite'             => array( 'slug' => 'artist' ), // Slug postów tego typu
			'supports'            => $supports
		);

		register_post_type( 'artist', $args ); // Rejestracja postów o typie artist
	}

    add_action( 'init', 'register_offer_post_type' );


?>
