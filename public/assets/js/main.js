/*
	Urban by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

(function($) {

	skel.breakpoints({
		xlarge:	'(max-width: 1680px)',
		large:	'(max-width: 1280px)',
		medium:	'(max-width: 980px)',
		small:	'(max-width: 736px)',
		xsmall:	'(max-width: 480px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$header = $('#header'),
			$banner = $('#banner');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Menu.
			$('#menu')
				.append('<a href="#menu" class="close"></a>')
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'right'
				});

		// Header.
			if (skel.vars.IEVersion < 9)
				$header.removeClass('alt');

			if ($banner.length > 0
			&&	$header.hasClass('alt')) {

				$window.on('resize', function() { $window.trigger('scroll'); });

				$banner.scrollex({
					bottom:		$header.outerHeight(),
					terminate:	function() { $header.removeClass('alt'); },
					enter:		function() { $header.addClass('alt'); },
					leave:		function() { $header.removeClass('alt'); $header.addClass('reveal'); }
				});

			}

		// Banner.
			var $banner = $('#banner');

			if ($banner.length > 0) {

				// IE fix.
					if (skel.vars.IEVersion < 12) {

						$window.on('resize', function() {

							var wh = $window.height() * 0.60,
								bh = $banner.height();

							$banner.css('height', 'auto');

							window.setTimeout(function() {

								if (bh < wh)
									$banner.css('height', wh + 'px');

							}, 0);

						});

						$window.on('load', function() {
							$window.triggerHandler('resize');
						});

					}

				// Video check.
					var video = $banner.data('video');

					if (video)
						$window.on('load.banner', function() {

							// Disable banner load event (so it doesn't fire again).
								$window.off('load.banner');

							// Append video if supported.
								if (!skel.vars.mobile
								&&	!skel.breakpoint('large').active
								&&	skel.vars.IEVersion > 9)
									$banner.append('<video autoplay loop><source src="' + video + '.mp4" type="video/mp4" /><source src="' + video + '.webm" type="video/webm" /></video>');

						});

				// More button.
					$banner.find('.more')
						.addClass('scrolly');

			}

		// Tabs.
			$('.flex-tabs').each( function() {

				var t = jQuery(this),
					tab = t.find('.tab-list li a'),
					tabs = t.find('.tab');

				tab.click(function(e) {

					var x = jQuery(this),
						y = x.data('tab');

					// Set Classes on Tabs
						tab.removeClass('active');
						x.addClass('active');

					// Show/Hide Tab Content
						tabs.removeClass('active');
						t.find('.' + y).addClass('active');

					e.preventDefault();

				});

			});

		// Scrolly.
			$('.scrolly').scrolly({
				offset: function() {
					return $header.height() - 2;
				}
			});

	});

})(jQuery);

// // Fetching HTML Elements in Variables by ID.
// var x = document.getElementById("form_sample");
// var createform = document.createElement('form'); // Create New Element Form
// createform.setAttribute("action", ""); // Setting Action Attribute on Form
// createform.setAttribute("method", "post"); // Setting Method Attribute on Form
// x.appendChild(createform);

// var heading = document.createElement('h2'); // Heading of Form
// heading.innerHTML = "Contact Form ";
// createform.appendChild(heading);

// var line = document.createElement('hr'); // Giving Horizontal Row After Heading
// createform.appendChild(line);

// var linebreak = document.createElement('br');
// createform.appendChild(linebreak);

// var namelabel = document.createElement('label'); // Create Label for Name Field
// namelabel.innerHTML = "Your Name : "; // Set Field Labels
// createform.appendChild(namelabel);

// var inputelement = document.createElement('input'); // Create Input Field for Name
// inputelement.setAttribute("type", "text");
// inputelement.setAttribute("name", "dname");
// createform.appendChild(inputelement);

// var linebreak = document.createElement('br');
// createform.appendChild(linebreak);

// var emaillabel = document.createElement('label'); // Create Label for E-mail Field
// emaillabel.innerHTML = "Your Email : ";
// createform.appendChild(emaillabel);

// var emailelement = document.createElement('input'); // Create Input Field for E-mail
// emailelement.setAttribute("type", "text");
// emailelement.setAttribute("name", "demail");
// createform.appendChild(emailelement);

// var emailbreak = document.createElement('br');
// createform.appendChild(emailbreak);

// var messagelabel = document.createElement('label'); // Append Textarea
// messagelabel.innerHTML = "Your Message : ";
// createform.appendChild(messagelabel);

// var texareaelement = document.createElement('textarea');
// texareaelement.setAttribute("name", "dmessage");
// createform.appendChild(texareaelement);

// var messagebreak = document.createElement('br');
// createform.appendChild(messagebreak);

// var submitelement = document.createElement('input'); // Append Submit Button
// submitelement.setAttribute("type", "submit");
// submitelement.setAttribute("name", "dsubmit");
// submitelement.setAttribute("value", "Submit");
// createform.appendChild(submitelement);
