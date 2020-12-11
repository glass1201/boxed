



(function($){
   

    // header, footer 로드
    $('#header').load('header.html')
    $('#footer').load('footer.html')

    
    // 비디오 슬라이드에 현재날짜, 시간 표시하기
    time();
    function time(){
        var today = new Date();

        var yyyy = today.getFullYear();
        var mm = today.getMonth()+1;
        var dd = today.getDate();
        var hours = today.getHours();
        var minutes = today.getMinutes();
        var seconds = today.getSeconds();
        if(dd<10) {
            dd='0'+dd
        }
        if(mm<10){
            mm='0'+mm
        }
        if (hours<10){
            hours='0'+hours
        }
        if (minutes<10){
            minutes='0'+minutes
        }
        if(seconds<10){
            seconds='0'+seconds
        }
        var today = yyyy+ ' / '+mm+ ' / '+dd;
        var todayHours = hours+' : '+minutes+' : '+seconds;
        var elVideo = document.querySelector('.video-txt p:nth-child(2)');
        var elVideo2 = document.querySelector('.video-txt p:last-child');
        elVideo.innerText = today;
        elVideo2.innerText = todayHours;
    }
    setInterval(time, 1000)
    
    // 애니메이션
    var sct = $(this).scrollTop();

    if ( sct === 0 ) {
        $('.main-slide-wrap').addClass('on')
    } 
    $(window).scroll(function(){
        var sct = $(this).scrollTop();

        var art1Near = $('.article1-img').offset().top - $(this).height();
        if ( sct >= art1Near ){
            $('.article1-img').addClass('on')
        } else if ( sct===0 ){
            $('.article1-img').removeClass('on')
        }

        var art2Near = $('.article2').offset().top - $(this).height();
        if ( sct >= art2Near ){
            $('.article2').addClass('on')
        } else if ( sct===0 ){
            $('article2').removeClass('on')
        }

        var art3Near = $('.article3').offset().top - $(this).height();
        if (sct >= art3Near ){
            $('.article3').addClass('on')
        } else if ( sct === 0 ){
            $('.article3').removeClass('on')
        }
    })
 
    // 슬라이드
    $(".slide-inner").slick({            

        autoplay: true, // 자동재생
        
        autoplaySpeed: 3000, // 간격시간
        
        dots: true, // 동그라미버튼
        
        speed: 600, // 바뀌는시간(생략가능)
        
        slidesToShow: 1, // 보여질슬라이드수(생략가능)
        
        slidesToScroll: 1, // 이동슬라이드수(생략가능)
        
        pauseOnHover: true, // 마우스오버시 멈춤여부(생략가능)
        
        pauseOnDotsHover: true, // 동그라미번호버튼에 호버시 멈춤여부(생략가능)
        
        pauseOnFocus: false, // 동그라미번호버튼 클릭시 자동실행 멈춤여부
        
        cssEase: 'linear', // 속도함수(생략가능)
        
        draggable: true, // 마우스드래그시 슬라이드 교체가능여부(생략가능)
        
        fade: false, // 슬라이드가 수평으로 이동하지 않고, 제자리에서 사라지고 나타남(생략가능)
        
        arrows: false, // 좌우화살표 사용여부(생략가능)
        
        prevArrow: '<button class="prevArrow marrow"><i class="fas fa-angle-left"></i></button>',
        
        nextArrow: '<button class="nextArrow marrow"><i class="fas fa-angle-right"></i></button>',
        
        })

    /* 비디오 재생 */
    $('.article1-img > a').on('click',function(e){
        e.preventDefault();
        $('.video-outer').fadeIn(300)
    })
    $('.video-close').on('click',function(e){
        e.preventDefault()
        $('.video-outer').fadeOut(300);
    })

    


    









}
)(jQuery)