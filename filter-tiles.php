<?php

/*
Plugin Name: Filter Tiles
Plugin URI: http://URI_Of_Page_Describing_Plugin_and_Updates
Description: A brief description of the Plugin.
Version: 1.0
Author: Volodymyr
Author URI: http://URI_Of_The_Plugin_Author
License: A "Slug" license name e.g. GPL2
*/
defined('ABSPATH') or die('No scripting kiddies please!');

function filter_tiles_scripts()
{
    wp_enqueue_script('ex_filter_tiles', plugin_dir_url(__FILE__) . '/js/ex_filter_tiles.js', array('jquery'), false, true);
    wp_enqueue_style('ex_filter_tiles_styles', plugin_dir_url(__FILE__) . 'css/ex_filter_tiles_styles.css');
}

add_action('wp_enqueue_scripts', 'filter_tiles_scripts');