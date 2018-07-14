$(document).ready(function() {
    reset();
    $('#btn').click(function() {
        $(this).remove();
        start();
        aliens();
    });
    $(document).keydown(function(e) {
        switch (e.which) {
            case 38:
                $(".ship").finish().animate({
                    top: "-=20px"
                }, 300, 'linear', function() {});
                break;
            case 40:
                $(".ship").finish().animate({
                    top: "+=20px"
                }, 300, 'linear', function() {});
                break;
            case 32:
                bullets($('.ship').position());
                break;
        }
    });
});


function bullets(s) {
    $('.ship').append($('<div class="bullet1"></div>'))
    setInterval(function() {
        $('.bullet1').animate({ 'right': '-700%' }, 300, 'linear', function() {
            $(this).remove();
        });
    });
}

function reset() {
    $("#b").append('<button type="button" id="btn">Start</button>');
}

function start() {
    $('.ship').animate({
        "top": "120px"
    }, 1000);
    $('.ship').animate({
        "left": "300px"
    }, 1000);

}

function aliens() {
    setInterval(function() {
        $('#b').append('<img src = "images/alien.png" id="a" width="70px" height="50px">');
        $('#a').animate({
            "left": "200px"
        }, 3500, "linear", function() {
            $(this).remove();
        });
    }, 4000);

    setInterval(function() {
        if ($('#a').position().left <= 200) {
            alert("Game Over");
        }
    }, 1);

    setInterval(function() {
        $('.ship').children('.bullet1').each(function() {
            var bullet = $(this).position();
            $('#b').children('#a').each(function() {
                var alienpos = $(this).position();
                if (bullet.left + 10 >= alienpos.left && bullet.top + 2 > alienpos.top) {
                    $('#a').remove();
                }
            })
        })
    }, 10);
}