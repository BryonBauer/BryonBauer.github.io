$(function () {
    // alert("READY!");

    // Show sidebar when menu icon is clicked and move grid-container left
    var showMenu = false;
    $("#menu-img").click(function () {
        if (!showMenu) {
            // alert("clicked!");
            $("#sidebar").toggle();
            $(".grid-container").css("margin-left", "20%");            
            showMenu = true;
        } 
        else {
            $(".grid-container").css("margin-left", "3%");
            $("#sidebar").toggle();
            showMenu = false;
        }
    });

    // Show dropdown menu when icon is hovered over icon and hide when cursor leaves
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
});