$(document).ready(function(){
    $("#btnEffect").on('click', function() {
        alert("클릭했어요!");
    });

    $("#box").css({
        width:100,
        height: 100,
        backgroundColor: 'orange',
    }).on('click', function(){  // 클릭이벤트 
        $(this).css({
            backgroundColor:'red' 
        });
    }).on('mouseenter', function(){  // 마우스엔터 이벤트
        $(this).css({
            backgroundColor:'blue',
            borderRaius:'50%'
        });
    })


    // 시작효과
    $("#btnToggle").click(function() {
        // 토글효과
        $(".page").fadeToggle("slow");
    });

});