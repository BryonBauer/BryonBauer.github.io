$(function () {
    // alert("READY!");

    // Show sidebar when menu icon is clicked and move grid-container left
    $("#menu-img").click(function () {
        // alert("clicked!");
        $("#sidebar").toggle();
        $(".grid-container").css("margin-left", "20%");
        $("#grid-container-title").css("margin-left", "22%");
    });
    
    // Hide sidebar and moved grid-container back to original pos
    $("#menu-img-big").click(function () {
        $(".grid-container").css("margin-left", "8%");
        $("#grid-container-title").css("margin-left", "10%");
        $("#sidebar").toggle();
    });

    // Show sidebar when menu icon is clicked and move grid-container left
    $("#menu-img-tablet").click(function () {
        // alert("clicked!");
        $("#sidebar").toggle();
        $(".grid-container").css("margin-left", "20%");
    });
    
    // Hide sidebar and moved grid-container back to original pos
    $("#menu-img-big-tablet").click(function () {
        $(".grid-container").css("margin-left", "10%");
        $("#sidebar").toggle();
    });

    // Show mobile sidebar when menu icon is clicked and move grid-container left
    $("#menu-img-mobile").click(function () {
        // alert("clicked!");
        $("#sidebar-mobile").toggle();
    });


    // Show dropdown when icon is hovered
    $(".dropdown").hover(function () {
        // over
        $(".dropdown-content").show();
        // Keep dropdown visible on hover
        $(".dropdown-content").hover(function () {
            // over
            $(".dropdown-content").show();
            // Show subMenus when clicked
            $(".subDropdown").click(function (e) {
                e.preventDefault();
                $(".subDropdown-content").show();
                // Keep dropdown visible when hovered and keep subMenu visible as well
                $(".subDropdown-content").hover(function () {
                    // over
                    $(".dropdown-content").show();
                    $(".subDropdown-content").show();
                // If you leave subMenu then it hides and if you leave both they both hide
                }, function () {
                    // out
                    $(".subDropdown-content").hide();
                    $(".dropdown-content").hide();
                });
            });
        }, function () {
            // out
            $(".dropdown-content").hide();
            $(".subDropdown-content").hide();
        });
    }, function () {
        // out
        $(".dropdown-content").hide();
        $(".subDropdown-content").hide();
    });

    // Show dashboard when icon is clicked

    $("#dashboard-icon").click(function () {
        $(".dashboard-content").toggle();
    });

    $("#dashboard-icon-big").click(function () {
        $(".dashboard-content").toggle();
    });
});