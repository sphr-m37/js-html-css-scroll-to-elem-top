$(document).ready(function () {
    const menuHeight = $(".list").height();
    $("#box").css({ margin: `${menuHeight}px 0 0 0  ` });

    $(".list li a").click(function () {
        const selected = this.hash;
        $("html,body").animate(
            {
                scrollTop: $(selected).offset().top - menuHeight + "px",
            },
            30
        );
    });
});