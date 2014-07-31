$(document).ready(function() {
	$('header').hover(function(event) {
		$('#note1').animate({borderColor: '#333'}, 300);
		$('#note1 span').animate({color: '#333'}, 300);
	}, function(event) {
		$('#note1').animate({borderColor: '#ddd'}, 300);
		$('#note1 span').animate({color: '#ababab'}, 300);
	});

	$('#intro').hover(function(event) {
		$('#note2').animate({borderColor: '#333'}, 300);
		$('#note2 span').animate({color: '#333'}, 300);
	}, function(event) {
		$('#note2').animate({borderColor: '#ddd'}, 300);
		$('#note2 span').animate({color: '#ababab'}, 300);
	});

	$('#linkedin-link').click(function(event) {
		event.preventDefault();
		$('#applicant-linkedin').val('www.linkedin.com/in/tairanzhang');
		$('#applicant-name').val('Tai Zhang');
		$('#applicant-email').val('tai@dekaliber.net');
		$('#linkedin-field').delay(250).fadeIn(500, function(event){
			$('#note9').fadeIn(500, function(event) {
				$('#note9').animate({
					borderColor: '#333'
				}, 500);
				$('#note9 span').animate({
					color: '#333'
				}, 500);
			});
			$('#note10').animate({top: '980'}, 1000);
			$('#note11').animate({top: '1065'}, 1000);
			$('#note12').animate({top: '1135'}, 1000);
			$('#note13').animate({top: '1285'}, 1000);
		});
	});

	$('#applicant-name').focus(function(event) {
		$('#note3').animate({borderColor: '#333'}, 300);
		$('#note3 span').animate({color: '#333'}, 300);
	});
	$('#applicant-name').blur(function(event) {
		$('#note3').animate({borderColor: '#ddd'}, 300);
		$('#note3 span').animate({color: '#ababab'}, 300);
	});

	$('#applicant-email').focus(function(event) {
		$('#note4').animate({borderColor: '#333'}, 300);
		$('#note4 span').animate({color: '#333'}, 300);
	});
	$('#applicant-email').blur(function(event) {
		if ($(this).val() != '') {
			$('#note4').animate({borderColor: '#ddd'}, 300);
			$('#note4 span').animate({color: '#ababab'}, 300);
		}
	});
	$('.required').blur(function(event) {
		if ($(this).val() === '') {
			$(this).parent().addClass('has-error');
			$(this).parent().find('.labelwarning').fadeIn();
		} else {
			$(this).parent().removeClass('has-error');
			$(this).parent().find('.labelwarning').fadeOut();
		}
	});

	$('#applicant-phone').focus(function(event) {
		$('#note5').animate({borderColor: '#333'}, 300);
		$('#note5 span').animate({color: '#333'}, 300);
	});
	$('#applicant-phone').blur(function(event) {
		$('#note5').animate({borderColor: '#ddd'}, 300);
		$('#note5 span').animate({color: '#ababab'}, 300);
	});

	var phoneCount = 1;
	var phoneCountSuffix;

	$('#add-phone-link').click(function(event) {
		event.preventDefault();
		phoneCount += 1;
		switch(phoneCount) {
			case 1:
				phoneCountSuffix = 'st'; break;
			case 2:
				phoneCountSuffix = 'nd'; break;
			case 3:
				phoneCountSuffix = 'rd'; break;
			default:
				phoneCountSuffix = 'th'; break;				
		}
		$('<input class="form-control extrarow" placeholder="Your '+phoneCount+phoneCountSuffix+' number" type="text" id="applicant-phone'+phoneCount+'">').insertBefore($(this).parent());
		for (i=6; i<=13; i++) {
			var currHeight = $('#note'+i).css('top');
			currHeight = currHeight.substring(0,currHeight.length-1);
			var newHeight = parseInt(currHeight)+36;
			$('#note'+i).animate({top: newHeight}, 300);
		}
	});

	$('#applicant-address-street').focus(function(event) {
		$('#note6').animate({borderColor: '#333'}, 300);
		$('#note6 span').animate({color: '#333'}, 300);
	});
	$('#applicant-address-street').blur(function(event) {
		$('#note6').animate({borderColor: '#ddd'}, 300);
		$('#note6 span').animate({color: '#ababab'}, 300);
	});

	$('#applicant-address-zip').focus(function(event) {
		$('#note7').animate({borderColor: '#333'}, 300);
		$('#note7 span').animate({color: '#333'}, 300);
	});
	$('#applicant-address-zip').blur(function(event) {
		$('#note7').animate({borderColor: '#ddd'}, 300);
		$('#note7 span').animate({color: '#ababab'}, 300);
	});

	$('#applicant-startdate').focus(function(event) {
		$('#datepicker').fadeIn(function(event) {
			$('#note10').animate({borderColor: '#333'}, 300);
			$('#note10 span').animate({color: '#333'}, 300);
		});
	});
	$('#applicant-startdate').blur(function(event) {
		$('#datepicker').fadeOut(function(event) {
			$('#note10').animate({borderColor: '#ddd'}, 300);
			$('#note10 span').animate({color: '#ababab'}, 300);
		});
	});

	$('#applicant-salary').focus(function(event) {
		$('#note11').animate({borderColor: '#333'}, 300);
		$('#note11 span').animate({color: '#333'}, 300);
	});
	$('#applicant-salary').blur(function(event) {
		$('#note11').animate({borderColor: '#ddd'}, 300);
		$('#note11 span').animate({color: '#ababab'}, 300);
	});

	$('#eeo').hover(function(event) {
		$('#note12').animate({borderColor: '#333'}, 300);
		$('#note12 span').animate({color: '#333'}, 300);
	}, function(event) {
		$('#note12').animate({borderColor: '#ddd'}, 300);
		$('#note12 span').animate({color: '#ababab'}, 300);
	});

	$('#moreinfo1').click(function(event) {
		if ($('#race-moreinfo').is(':visible')) {
			$('#note13').animate({borderColor: '#ddd'}, 300);
			$('#note13 span').animate({color: '#ababab'}, 300);
			$('#race-moreinfo').fadeOut();
		} else {
			$('#race-moreinfo').fadeIn(function(event) {
				$('#note13').animate({borderColor: '#333'}, 300);
				$('#note13 span').animate({color: '#333'}, 300);
			});
		}
		event.preventDefault();
	});

	// closes race popup if there's a click outside of it
	$(document).mouseup(function(event) {
		var container = $('#race-moreinfo');

		if ($('#race-moreinfo').is(':visible')) {
			if (!container.is(event.target) && container.has(event.target).length === 0) {
				$('#race-moreinfo').fadeOut();
				$('#note13').animate({borderColor: '#ddd'}, 300);
				$('#note13 span').animate({color: '#ababab'}, 300);
			}
		}

		container = $('#veteran-moreinfo');

		if ($('#veteran-moreinfo').is(':visible')) {
			if (!container.is(event.target) && container.has(event.target).length === 0) {
				$('#veteran-moreinfo').fadeOut();
				$('#note13').animate({borderColor: '#ddd'}, 300);
				$('#note13 span').animate({color: '#ababab'}, 300);
			}
		}
	});

	$('#moreinfo2').click(function(event) {
		if ($('#veteran-moreinfo').is(':visible')) {
			$('#note13').animate({borderColor: '#ddd'}, 300);
			$('#note13 span').animate({color: '#ababab'}, 300);
			$('#veteran-moreinfo').fadeOut();
		} else {
			$('#veteran-moreinfo').fadeIn(function(event) {
				$('#note13').animate({borderColor: '#333'}, 300);
				$('#note13 span').animate({color: '#333'}, 300);
			});
		}
		event.preventDefault();
	});
});