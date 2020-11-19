(function($){

    // 로드 이벤트
    $('#container > #content').load('main.html');
    $('body').on('click','#header>h1>a, #header .navBar a, #header .loginMenu a, #content .slide a, .article2 a', function(e){
        e.preventDefault();
        var url = $(this).attr('href');
        $('#container > #content').remove();
        $('#container').load(url+' #content');
    })

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
        var href = $(this).attr('href')
        $('.video-outer').show()
        $('.video-inner iframe').attr('src', href)
    })
    $('.video-close').on('click',function(e){
        e.preventDefault()
        $('.video-outer').hide();
        $('.video-inner iframe').attr('src','')
    })








}
)(jQuery)