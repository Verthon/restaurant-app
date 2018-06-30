//var $ = require('node_modules/jquery');
import $ from 'jquery';
import 'jquery.easing';
import 'bootstrap';
import plugins from './plugins';
$(function () {
  $(document).scroll(function () {
	  var $nav = $(".navbar-fixed-top");
	  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});
});
$( document ).ready(function() {
  console.log( "ready!" );
});