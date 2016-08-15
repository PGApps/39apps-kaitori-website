jQuery(function ($) {
	'use strict';
	/*==============================================================*/
	// Table of index
	/*==============================================================*/
	/*==============================================================
	# Menu add class
	# Magnific Popup
	# WoW Animation
	==============================================================*/
	// ----------------------------------------------
	// # Demo Chooser
	// ----------------------------------------------
	(function () {
		$('.demo-chooser .toggler').on('click', function (event) {
			event.preventDefault();
			$(this).closest('.demo-chooser').toggleClass('opened');
		})
	}());
	/*==============================================================*/
	// # Preloader
	/*==============================================================*/
	(function () {
		$(window).load(function () {
			$('.preloader').fadeOut('slow', function () {
				$(this).remove();
			});
		});
	}());
	/*==============================================================*/
	//Mobile Toggle Control
	/*==============================================================*/
	$(function () {
		var navMain = $("#mainmenu");
		navMain.on("click", "a", null, function () {
			navMain.collapse('hide');
		});
	});
	/*==============================================================*/
	// Menu add class
	/*==============================================================*/
	(function () {
		function menuToggle() {
			var windowWidth = $(window).width();
			if (windowWidth > 767) {
				$(window).on('scroll', function () {
					if ($(window).scrollTop() > 650) {
						$('.navbar').addClass('navbar-fixed-top');
					}
					else {
						$('.navbar').removeClass('navbar-fixed-top');
					};
					if ($(window)) {
						$('#home-three .navbar').addClass('navbar-fixed-top');
					}
				});
			}
			else {
				$('.navbar').addClass('navbar-fixed-top');
			};
		}
		menuToggle();
	}());
	$('#mainmenu').onePageNav({
		currentClass: 'active'
	, });
	/*==============================================================*/
	// WoW Animation
	/*==============================================================*/
	new WOW().init();
	/*==============================================================*/
	// Owl Carousel
	/*==============================================================*/
	$("#team-slider").owlCarousel({
		pagination: false
		, navigation: true
		, navigationText: [
		  "<span class='team-slider-left'><i class=' fa fa-angle-left '></i></span>"
		  , "<span class='team-slider-right'><i class=' fa fa-angle-right'></i></span>"
		]
	});
	$("#screenshot-slider").owlCarousel({
		items: 4
		, pagination: true
	, });
	/*==============================================================*/
	// Magnific Popup
	/*==============================================================*/
	(function () {
		$('.image-link').magnificPopup({
			gallery: {
				enabled: true
			}
			, type: 'image'
		});
		$('.feature-image .image-link').magnificPopup({
			gallery: {
				enabled: false
			}
			, type: 'image'
		});
		$('.image-popup').magnificPopup({
			type: 'image'
		});
		$('.video-link').magnificPopup({
			type: 'iframe'
		});
	}());
	/*
	 * OS detecter
	 */
	console.log("ready!");
	/*
	 * Keep return result from function getMobileOperatingSystem() into valuable 'result'
	 * Then print value.
	 */
	var result = getMobileOperatingSystem();
	console.log(result);
	/*
	 * Check if result is 'Android' or not
	 * If is 'Android' then print 'Yes' else print 'No'
	 */
	if (result == 'Android') {
		$('.apple-btn').css('display', 'none');
		$('.nav-download').attr('href', 'https://play.google.com/store/apps/details?id=com.pg_applications.x39apps.kaitori');
		$('.logo-link').attr('href', 'https://play.google.com/store/apps/details?id=com.pg_applications.x39apps.kaitori');
	}
	else if (result == 'iOS') {
		$('.android-btn').css('display', 'none');
		$('.nav-download').attr('href', 'https://itunes.apple.com/jp/app/zhong-gu-chepatsu10fende-wu/id1124772311?ls=1&mt=8');
		$('.logo-link').attr('href', 'https://itunes.apple.com/jp/app/zhong-gu-chepatsu10fende-wu/id1124772311?ls=1&mt=8');
	}
	else {
		$('.nav-download').attr('href', 'https://itunes.apple.com/jp/app/zhong-gu-chepatsu10fende-wu/id1124772311?ls=1&mt=8');
		$('.logo-link').contents().unwrap();
	}

	function getMobileOperatingSystem() {
		var userAgent = navigator.userAgent || navigator.vendor || window.opera;
		if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i) || userAgent.match(/iPod/i)) {
			return 'iOS';
		}
		else if (userAgent.match(/Android/i)) {
			return 'Android';
		}
		else {
			return 'unknown';
		}
	}
});