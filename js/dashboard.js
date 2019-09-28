$(function () {
    // alert("READY!");

    // Show sidebar when menu icon is clicked and move grid-container left
    $("#menu-img").click(function () {
        // alert("clicked!");
        $("#sidebar").toggle();
        $(".grid-container").css("margin-left", "20%");
    });

    $("#menu-img-big").click(function () {
        $(".grid-container").css("margin-left", "3%");
        $("#sidebar").toggle();
    });

    // Show dropdown menu when icon is hovered over and hide when cursor leaves
    $(".dropdown").mouseenter(function () {
            $(".dropdown-content").show();
        }),
        $(".dropdown-content").mouseleave(function () {
            $(".dropdown-content").hide();
        }),
        $(".dropdown-content").mouseenter(function () {
            $(".dropdown-content").show();
        }),
        $(".dropdown").mouseleave(function () {
            $(".dropdown-content").hide();
        });

    // Show dashboard when icon is clicked

    $("#dashboard").click(function () {
        $(".dashboard-content").toggle();
        $(".grid-container").css("margin-left", "25%");
    });

    $("#dashboard-big").click(function () {
        $(".dashboard-content").toggle();
        $(".grid-container").css("margin-left", "3%");
    });
});