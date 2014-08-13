$(document).ready(function() {

	$(window).scroll(function(event) {
		// console.log($(window).scrollTop());
		if ($(window).scrollTop() > 0) {
			$('#desc').slideUp(300);
			$('#formcontainer').css('margin-top','180px');
			$('#notes').css('margin-top','180px');
			// $('.col-right span p').css('margin','0');
		} else {
			$('#desc').slideDown(300);
			$('#formcontainer').css('margin-top','245px');
			$('#notes').css('margin-top','245px');
			// $('.col-right span p').css('margin-bottom','10px');
		}
	});

	var noteTotal = $('#notes').children().length;

	$('#notes p span').hover(function(event) {
		$(this).parent().animate({borderColor: '#333'}, 300);
		$(this).animate({color: '#333'}, 300);
	}, function(event) {
		$(this).parent().animate({borderColor: '#ddd'}, 300);
		$(this).animate({color: '#ababab'}, 300);
	});

	$('#notes div').hover(function(event) {
		$(this).children('span').animate({color: '#333'}, 300);
	}, function(event) {
		$(this).children('span').animate({color: '#ababab'}, 300);
	});

	$('#header').hover(function(event) {
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
		$('#linkedin-tooltip').fadeIn().delay(3000).fadeOut(function(event) {
			$('#applicant-linkedin').val('www.linkedin.com/in/tairanzhang');
			$('#applicant-name').val('Tai Zhang');
			$('#applicant-email').val('tai@dekaliber.net');
			$('#linkedin-field').delay(250).fadeIn(500, function(event){
				$('#note10').fadeIn(500, function(event) {
					$('#note10').animate({
						borderColor: '#333'
					}, 500);
					$('#note10 span').animate({
						color: '#333'
					}, 500);
				});
				for (i=11; i<=noteTotal; i++) {
					var currHeight = $('#note'+i).css('top');
					currHeight = currHeight.substring(0,currHeight.length-1);
					var newHeight = parseInt(currHeight)+63;
					$('#note'+i).animate({top: newHeight}, 300);
				}
			});
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
		$('<input class="form-control extrarow" placeholder="Your '+phoneCount+phoneCountSuffix+' number" type="text" id="applicant-phone'+phoneCount+'" tabindex="'+(phoneCount+2)+'">').insertBefore($(this).parent());
		$('#applicant-phone'+phoneCount).focus();
		if (phoneCount >=4 ) {
			$('#add-phone-link').remove();
		}
		for (i=6; i<=noteTotal; i++) {
			var currHeight = $('#note'+i).css('top');
			currHeight = currHeight.substring(0,currHeight.length-1);
			var newHeight = parseInt(currHeight)+36;
			$('#note'+i).animate({top: newHeight}, 300);
		}
	});

	var attachmentCount = 2;

	$('#add-attachment-link').click(function(event) {
		event.preventDefault();
		attachmentCount += 1;
		var attachmentRow = Math.ceil(attachmentCount/2);
		if (attachmentCount%2 == 1) {
			$('<div class="input-group-wrapper extrarow" id="attachmentrow'+attachmentRow+'"><div class="upload-group"><button class="btn btn-primary btn-sm attachment-upload">Upload Attachment</button></div></div>').insertBefore($(this).parent());	
			for (i=10; i<=noteTotal; i++) {
				var currHeight = $('#note'+i).css('top');
				currHeight = currHeight.substring(0,currHeight.length-1);
				var newHeight = parseInt(currHeight)+36;
				$('#note'+i).animate({top: newHeight}, 300);
			}
		} else {
			$('<div class="upload-group"><button class="btn btn-primary btn-sm attachment-upload">Upload Attachment</button></div>').appendTo($('#attachmentrow'+attachmentRow));
		}
	});
	$('#add-attachment-link').hover(function(event) {
		$('#note8').animate({borderColor: '#333'}, 300);
		$('#note8 span').animate({color: '#333'}, 300);
	}, function(event) {
		$('#note8').animate({borderColor: '#ddd'}, 300);
		$('#note8 span').animate({color: '#ababab'}, 300);
	});

	var linkCount = 1;

	$('#add-link-link').click(function(event) {
		event.preventDefault();
		linkCount += 1;
		$('<div class="input-group-wrapper extrarow"><div class="input-group"><div class="input-group-addon">http://</div><input class="form-control" placeholder="" type="url" id="applicant-website'+linkCount+'" tabindex="'+(linkCount+11)+'"></div></div>').insertBefore($(this).parent());
		$('#applicant-website'+linkCount).focus();
		if (linkCount >=5 ) {
			$('#add-link-link').remove();
		}
		for (i=10; i<=noteTotal; i++) {
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
		$('#datepicker').fadeIn();
		$('#note11').animate({borderColor: '#333'}, 300);
		$('#note11 span').animate({color: '#333'}, 300);
	});
	$('#applicant-startdate').blur(function(event) {
		$('#datepicker').fadeOut();
		$('#note11').animate({borderColor: '#ddd'}, 300);
		$('#note11 span').animate({color: '#ababab'}, 300);
	});

	$('#applicant-salary').focus(function(event) {
		$('#note12').animate({borderColor: '#333'}, 300);
		$('#note12 span').animate({color: '#333'}, 300);
	});
	$('#applicant-salary').blur(function(event) {
		$('#note12').animate({borderColor: '#ddd'}, 300);
		$('#note12 span').animate({color: '#ababab'}, 300);
	});

	$('#eeo').hover(function(event) {
		$('#note13').animate({borderColor: '#333'}, 300);
		$('#note13 span').animate({color: '#333'}, 300);
	}, function(event) {
		$('#note13').animate({borderColor: '#ddd'}, 300);
		$('#note13 span').animate({color: '#ababab'}, 300);
	});

	$('#submit p').hover(function(event) {
		$('#note15').animate({borderColor: '#333'}, 300);
		$('#note15 span').animate({color: '#333'}, 300);
	}, function(event) {
		$('#note15').animate({borderColor: '#ddd'}, 300);
		$('#note15 span').animate({color: '#ababab'}, 300);
	});

	$('#moreinfo1').click(function(event) {
		if ($('#race-moreinfo').is(':visible')) {
			$('#note14').animate({borderColor: '#ddd'}, 300);
			$('#note14 span').animate({color: '#ababab'}, 300);
			$('#race-moreinfo').fadeOut();
		} else {
			$('#race-moreinfo').fadeIn(function(event) {
				$('#note14').animate({borderColor: '#333'}, 300);
				$('#note14 span').animate({color: '#333'}, 300);
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
				$('#note14').animate({borderColor: '#ddd'}, 300);
				$('#note14 span').animate({color: '#ababab'}, 300);
			}
		}

		container = $('#veteran-moreinfo');

		if ($('#veteran-moreinfo').is(':visible')) {
			if (!container.is(event.target) && container.has(event.target).length === 0) {
				$('#veteran-moreinfo').fadeOut();
				$('#note14').animate({borderColor: '#ddd'}, 300);
				$('#note14 span').animate({color: '#ababab'}, 300);
			}
		}
	});

	$('#moreinfo2').click(function(event) {
		if ($('#veteran-moreinfo').is(':visible')) {
			$('#note14').animate({borderColor: '#ddd'}, 300);
			$('#note14 span').animate({color: '#ababab'}, 300);
			$('#veteran-moreinfo').fadeOut();
		} else {
			$('#veteran-moreinfo').fadeIn(function(event) {
				$('#note14').animate({borderColor: '#333'}, 300);
				$('#note14 span').animate({color: '#333'}, 300);
			});
		}
		event.preventDefault();
	});

	$('#resume-upload').click(function(event) {
		$(this).prev().fadeIn().delay(2000).fadeOut(function(event) {
			$('#resume-upload').hide().next().show(function(event) {
				$('#resume-progress-bar').css('width','100%');
			});
			$('#resume-upload').next().next().delay(2000).css('display','inline-block');
			$('#resume-progress').delay(2000).fadeOut(200,function(event) {
				$('#resume-preview').fadeIn(300, function(event) {
					$('#note9').fadeIn(500, function(event) {
						$('#note9').animate({
							borderColor: '#333'
						}, 500);
						$('#note9 span').animate({
							color: '#333'
						}, 500);
						$('#coverletter-upload').focus();
					});
				});
			});
			if ($('.upload-preview').is(':hidden')) {
				for (i=10; i<=noteTotal; i++) {
					var currHeight = $('#note'+i).css('top');
					currHeight = currHeight.substring(0,currHeight.length-1);
					var newHeight = parseInt(currHeight)+192;
					$('#note'+i).delay(2500).animate({top: newHeight}, 300);
				}
			}
		});
	});
	$('#coverletter-upload').click(function(event) {
		$(this).prev().fadeIn().delay(2000).fadeOut(function(event) {
			$('#coverletter-upload').hide().next().show(function(event) {
				$('#coverletter-progress-bar').css('width','100%');
			});
			$('#coverletter-upload').next().next().delay(2000).css('display','inline-block');
			$('#coverletter-progress').delay(2000).fadeOut(200,function(event) {
				$('#coverletter-preview').fadeIn(300, function(event) {
					$('#note9').fadeIn(500, function(event) {
						$('#note9').animate({
							borderColor: '#333'
						}, 500);
						$('#note9 span').animate({
							color: '#333'
						}, 500);
						$('#applicant-website').focus();
					});
				});
			});
			if ($('.upload-preview').is(':hidden')) {
				for (i=10; i<=noteTotal; i++) {
					var currHeight = $('#note'+i).css('top');
					currHeight = currHeight.substring(0,currHeight.length-1);
					var newHeight = parseInt(currHeight)+192;
					$('#note'+i).delay(2500).animate({top: newHeight}, 300);
				}
			}
		});
	});

	$('#resume-remove').click(function(event) {
		$(this).parent().parent().fadeOut(200, function(event) {
			$('#resume-upload').fadeIn(200);
			$('#resume-preview').hide();
			$('#resume-progress-bar').css('width','0%');
		});
		if ($('.upload-preview').is(':hidden')) {
			$('#note9').fadeOut(300);
			$('#note9').animate({borderColor: '#ddd'}, 300);
			$('#note9 span').animate({color: '#ababab'}, 300);
			for (i=10; i<=noteTotal; i++) {
				var currHeight = $('#note'+i).css('top');
				currHeight = currHeight.substring(0,currHeight.length-1);
				var newHeight = parseInt(currHeight)-192;
				$('#note'+i).delay(200).animate({top: newHeight}, 300);
			}
		}
	});
	$('#coverletter-remove').click(function(event) {
		$(this).parent().parent().fadeOut(200, function(event) {
			$('#coverletter-upload').fadeIn(200);
			$('#coverletter-preview').hide();
			$('#coverletter-progress-bar').css('width','0%');
		});
		if ($('.upload-preview').is(':hidden')) {
			$('#note9').fadeOut(300);
			$('#note9').animate({borderColor: '#ddd'}, 300);
			$('#note9 span').animate({color: '#ababab'}, 300);
			for (i=10; i<=noteTotal; i++) {
				var currHeight = $('#note'+i).css('top');
				currHeight = currHeight.substring(0,currHeight.length-1);
				var newHeight = parseInt(currHeight)-192;
				$('#note'+i).delay(200).animate({top: newHeight}, 300);
			}
		}
	});

	$("#linkedin-remove").click(function(event) {
		event.preventDefault();
		$(this).parent().parent().parent().fadeOut(function(event) {
			$('#note10').fadeOut(300);
			$('#note10').animate({borderColor: '#ddd'}, 300);
			$('#note10 span').animate({color: '#ababab'}, 300);

			for (i=10; i<=noteTotal; i++) {
				var currHeight = $('#note'+i).css('top');
				currHeight = currHeight.substring(0,currHeight.length-1);
				var newHeight = parseInt(currHeight)-63;
				$('#note'+i).animate({top: newHeight}, 300);
			}
		});
	});
});