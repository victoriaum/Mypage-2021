 AOS.init({
 	duration: 800,
 	easing: 'slide',
 	once: false
 });

jQuery(document).ready(function($) {

	"use strict";


	var siteMenuClone = function() {

		$('.js-clone-nav').each(function() {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function() {
			
			var counter = 0;
      $('.site-mobile-menu .has-children').each(function(){
        var $this = $(this);
        
        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find('.arrow-collapse').attr({
          'data-toggle' : 'collapse',
          'data-target' : '#collapseItem' + counter,
        });

        $this.find('> ul').attr({
          'class' : 'collapse',
          'id' : 'collapseItem' + counter,
        });

        counter++;

      });

    }, 1000);

		$('body').on('click', '.arrow-collapse', function(e) {
      var $this = $(this);
      if ( $this.closest('li').find('.collapse').hasClass('show') ) {
        $this.removeClass('active');
      } else {
        $this.addClass('active');
      }
      e.preventDefault();  
      
    });

		$(window).resize(function() {
			var $this = $(this),
				w = $this.width();

			if ( w > 768 ) {
				if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function(e) {
			var $this = $(this);
			e.preventDefault();

			if ( $('body').hasClass('offcanvas-menu') ) {
				$('body').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$this.addClass('active');
			}
		}) 

		// click outisde offcanvas
		$(document).mouseup(function(e) {
	    var container = $(".site-mobile-menu");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	      if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
	    }
		});
	}; 
	siteMenuClone();


	var sitePlusMinus = function() {
		$('.js-btn-minus').on('click', function(e){
			e.preventDefault();
			if ( $(this).closest('.input-group').find('.form-control').val() != 0  ) {
				$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) - 1);
			} else {
				$(this).closest('.input-group').find('.form-control').val(parseInt(0));
			}
		});
		$('.js-btn-plus').on('click', function(e){
			e.preventDefault();
			$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) + 1);
		});
	};
	// sitePlusMinus();


	var siteSliderRange = function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
	};
	// siteSliderRange();


	
	var siteCarousel = function () {
		if ( $('.nonloop-block-13').length > 0 ) {
			$('.nonloop-block-13').owlCarousel({
		    center: false,
		    items: 1,
		    loop: true,
				stagePadding: 0,
		    margin: 0,
		    autoplay: true,
		    nav: true,
				navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
		    responsive:{
	        600:{
	        	margin: 0,
	        	nav: true,
	          items: 2
	        },
	        1000:{
	        	margin: 0,
	        	stagePadding: 0,
	        	nav: true,
	          items: 3
	        },
	        1200:{
	        	margin: 0,
	        	stagePadding: 0,
	        	nav: true,
	          items: 4
	        }
		    }
			});
		}

		$('.slide-one-item').owlCarousel({
	    center: false,
	    items: 1,
	    loop: true,
			stagePadding: 0,
	    margin: 0,
	    smartSpeed: 1000,
	    autoplay: true,
	    pauseOnHover: false,
	    autoHeight: true,
	    nav: false,
	    navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
	  });

	  
	};
	siteCarousel();

	var siteStellar = function() {
		$(window).stellar({
	    responsive: false,
	    parallaxBackgrounds: true,
	    parallaxElements: true,
	    horizontalScrolling: false,
	    hideDistantElements: false,
	    scrollProperty: 'scroll'
	  });
	};
	// siteStellar();

	
	var siteDatePicker = function() {

		if ( $('.datepicker').length > 0 ) {
			$('.datepicker').datepicker();
		}

	};
	siteDatePicker();

	var siteSticky = function() {
		$(".js-sticky-header").sticky({topSpacing:0});
	};
	siteSticky();

	// navigation
  var OnePageNavigation = function() {
    var navToggler = $('.site-menu-toggle');
   	$("body").on("click", ".main-menu li a[href^='#'], .smoothscroll[href^='#'], .site-mobile-menu .site-nav-wrap li a", function(e) {
      e.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        'scrollTop': $(hash).offset().top
      }, 600, 'easeInOutExpo', function(){
        window.location.hash = hash;
      });

    });
  };
  OnePageNavigation();

  var siteScroll = function() {

  	

  	$(window).scroll(function() {

  		var st = $(this).scrollTop();

  		if (st > 100) {
  			$('.js-sticky-header').addClass('shrink');
  		} else {
  			$('.js-sticky-header').removeClass('shrink');
  		}

  	}) 

  };
  siteScroll();



  $('.fancybox').on('click', function() {
	  var visibleLinks = $('.fancybox');

	  $.fancybox.open( visibleLinks, {}, visibleLinks.index( this ) );

	  return false;
	});


  $(document).ready(function(){
		// training 2021년도로 초기값 설정하기
		$("#training-year-2021").click();
	})


  // 해당 월의 일 수 구하기
	function func_daycount(year, month){
		return 32 - new Date(year, month-1, 32).getDate();
	}


	// training 스케쥴 입력하기
	let schedule = [['[네이버 부스트코스] 웹 백엔드','210820','211020', 'MySQL을 이용한 데이터베이스 관리에 대해 학습중입니다.'],
									['[인프런] REST API, 모바일 앱 만들기','210805','210817','API에 대해 알고자 수강했으며 모바일 앱을 Flutter를 이용해서 만들어보았습니다.'],
									['[생활코딩] 아마존 웹서비스 (AWS)','210701','210728','AWS에 대해 알고 제 소개 페이지를 배포하는데 활용했습니다.'],
									['[인프런] 스프링 입문과정','210621','210623','IntelliJ를 활요한 Spring Gradle을 학습했고, 제 소개 페이지 작성에 활용했습니다.'],
									['[쌍용교육센터] 자바를 활용한 풀스텍 융합 SW개발자 양성과정','210106','210615','Java를 중심으로 웹사이트 제작을 위한 기본적인 Oracle, 프론트 부분의 학습을 했습니다. 그리고 3번의 팀프로젝트를 진행했습니다.'],
									['[코멘토] 파이썬으로 배우는 백엔드 개발 실무','210509','210530','파이썬의 기본 개념부터 API 설계와 개발을 학습했습니다. 그리고 현직자 멘토님의 코드리뷰를 통해 코드 컨벤션에 대해 학습했습니다.'],
									['[Udemy] 장고걸스 튜토리얼 따라하기','210517','210523','인프런에서 파이썬으로 배우는 백엔드 개발 실무 학습을 하면서 API 학습 과제 수행을 위해 병행하며 수강한 교육프로그램입니다. 파이썬과 장고를 이용한 API 개발 학습을 했습니다.'],
									['[유투브] 자바의 정석 기초편','201201','210105','쌍용교육센터 수업을 앞두고 자바 학습을 위해 공부했습니다. 처음 자바를 접하면서 기본기를 쌓을 수 있는 시간이었습니다.'],
									['[네이버 edwith] 부스트코딩뉴비챌린지','200710','200828','개발 분야에 관심을 갖고 진로 결정에 도움을 준 계기가 되었습니다. C언어를 기반으로 CS50 강의를 기반으로 팀 단위로 진행된 활동이었습니다.']];


	// 년도 선택에 따른 변경사항
	$(".training-year").click(function(){
		let string;
		let year = $(this).html();

		for (let i=1; i<13; i++){
			let dayCount = func_daycount(year, i)
			string+='<tr id="'+year+" "+i+'"><th>'+i+'월</th>'

			// span id 형식을 yymmdd로 바꾸기 위해 String으로 변환.
			for (let j=0; j<dayCount; j++){
				let strYear = String(year).substring(2);
				let strMonth = String(i);
				let strDay = String(j);

				if(i<10){
					strMonth = "0"+strMonth;
				}
				if(j<10){
					strDay = "0"+strDay;
				}

				let strDate = strYear + strMonth + strDay;

				string+='<td style="padding: 0; vertical-align: middle;">'
						+ '<span class="dayIcon show-tooltip" id="'+strDate+'" '
						+ 'data-toggle="tooltip" data-html="true"'
						+ 'style="border:1px solid #fab95b; border-radius: 5px; width: 70%; height: 20px;'
						+        'display: inline-block; margin-right: 1px; float: left;">'
						+ '</span></td>';
			}
			string+='</tr>';
		}

		if(year=="2021"){
			$("#training-year-2021").addClass("clicked-year");
			$("#training-year-2020").removeClass("clicked-year");
			$("#schedule-2021").html(string);
			$("#training-2021").show();
			$("#training-2020").hide();
		}
		if(year=="2020"){
			$("#training-year-2020").addClass("clicked-year");
			$("#training-year-2021").removeClass("clicked-year");
			$("#schedule-2020").html(string);
			$("#training-2020").show();
			$("#training-2021").hide();
		}

		// schedule 표기
		for(let i=0; i<schedule.length; i++) {
			let traingName = schedule[i][0];
			let startDate = schedule[i][1];
			let endDate = schedule[i][2];
			let tempDate = startDate;

			// dayIcon 색성지정
			let color = "#";
			let palette = ['fab95b', 'f79308', 'ad6705', '7c4a04'];
			color = color + palette[i % palette.length];

			while (true) {
				$("#" + tempDate).css("background-color", color);
				$("#" + tempDate).attr("title",
						startDate + " ~ " + endDate + " ▶ " + traingName);

				if (tempDate == endDate) {
					break;
				} else {
					tempDate = String(Number(tempDate) + 1);
				}
			}
		}

	});


	// training 모달창 상세 설명달기
	$("#training-list").click(function(e){
		let string="";
		for(let k=0; k<schedule.length; k++) {
			string += "<p class='training-detail-contents'><span class='training-detail-title'>No."+(k+1)+"&nbsp;&nbsp;&nbsp;"+schedule[k][0]+"</span><br>"
					+ "<span class='training-detail-period'>"+schedule[k][1] + " ~ " + schedule[k][2]+"</span><br>"
					+ "<span> "+schedule[k][3]+"</span></p>";
		}
		$("#training-detail").append(string);
	});


  // 모달창 carousel
	let owl = $('.owl-carousel');
	owl.owlCarousel({
		loop:true,
		nav:true,
		margin:10,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			960:{
				items:1
			},
			1200:{
				items:1
			}
		}
	});
	owl.on('mousewheel', '.owl-stage', function (e) {
		let wheelWay = e.originalEvent.deltaY;
		if (wheelWay>0) {
			owl.trigger('next.owl.carousel');
		} else {
			owl.trigger('prev.owl.carousel');
		}
		e.preventDefault();
	});


	// 모달창 활성화시 body 스크롤 방지
	$(".mainPortfolioImg").click(function(){
		$("html").addClass('scroll');
		owl.trigger('to.owl.carousel', [0]);
	});

	// 모달창 비활성화시 body 스크롤
	$(".out").click(function(){
		$("html").removeClass('scroll');
	});
	$(document).mouseup(function (e){
		let modal = $(".modal");
		if(modal.has(e.target).length === 0){
			$("html").removeClass('scroll');
		}
	});


	// 스크립트 공격방지
	$("input#send").click(function(){
		let textarea = $("textarea").val();
		textarea = textarea.replace(/<script/gi, "&lt;script");
		$("textarea").val(textarea);
	});

});

