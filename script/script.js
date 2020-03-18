$(function() {
    $(".list-item .list-link").click(function () {
        $(".list-link").removeClass("active");
        $(this).addClass("active");

    })

});
$(function() {
    $(".service-list .service-link").click(function () {
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
        let index = $(this).index();
        $(".service-content").removeClass("active");
        $(".service-content").eq(index).addClass("active")
    })

});



$(function () {
    $(".btn-outline-dark").click(function () {
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
        $(".portfolio-img-block").hide("slow");

        const selector = $(this).data("target");
        $(`.portfolio-img-block${selector}`).show("slow");
        if($(this).data("target")!=="*") {
            $("#load-more").css("display","none");
        }
    });
});

$(function () {
    $(".portfolio-img-block").hover(function () {
        const hoverBlock = $("#hover-block");
        $(this).append(hoverBlock);
        hoverBlock.css("display","flex");
    },function () {
        $("#hover-block").css("display","none");
        }
    )
});

$(function () {
    $(".portfolio-img-block").hide().slice(0,12).show();


        $("#load-more").click(function () {
            $(".portfolio-img-block:hidden").slice(0, 12).show();
            if ($(".portfolio-img-block:hidden").length == 0) {
                $(this).fadeOut('slow');
            }
        })

});

$(function () {

    const character = $(".character");
    $(".mini-photo-block:nth-child(2)").css("transform","translateY(-10px)");
    $("#right-arrow").click(function () {
       const index = $(".character.active").index();
        $(".character").removeClass("active");
        $(".character").hide("slow");
        $(".character").eq((index+1)%character.length).addClass("active");
        $(".character").eq((index+1)%character.length).show("slow");

        $(".mini-photo-block").removeClass("active");
        $(".mini-photo-block").eq((index+1)%character.length).addClass("active");
        $(".mini-photo-block").css("transform","none");
        $(".mini-photo-block").eq((index+1)%character.length).css("transform","translateY(-10px)");

    });
    $(".mini-photo-block").click(function () {

        const selector = $(this).data("target");
        $(".character").removeClass("active");
        $(".character").hide("slow");
        $(selector).show("slow");
        $(".mini-photo-block").removeClass("active");
        $(this).addClass("active").show("slow");
        $(".mini-photo-block").css("transform","none");
        $(this).css("transform","translateY(-10px)");

    });
    $("#left-arrow").click(function () {
        const index = $(".character.active").index();
        $(".character").removeClass("active");
        $(".character").hide("slow");

        $(".character").eq((index-1)%character.length).addClass("active");
        $(".character").eq((index-1)%character.length).show("slow");
        $(".mini-photo-block").removeClass("active");
        $(".mini-photo-block").eq((index-1)%character.length).addClass("active");
        $(".mini-photo-block").css("transform","none");
        $(".mini-photo-block").eq((index-1)%character.length).css("transform","translateY(-10px)");
    })
});

