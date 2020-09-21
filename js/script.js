$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 400) {
        $(".fixed-top").addClass("navbar-light bg-light").removeClass("navbar-dark");
    } else {
        $(".fixed-top").addClass("navbar-dark").removeClass("navbar-light bg-light");
    }
});

function eng() {
    alert("LOL");
}
