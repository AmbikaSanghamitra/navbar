$(document).ready(() => {
    $(".navbody a").first().trigger("focus");


    $(".dropdown").click(function () {
        $("#myDropdown").toggle(500);
    })

    $(document).click(function (event) {
        if (!$(event.target).closest('.dropdown').length) {
            if ($('#myDropdown').is(":visible")) {
                $('#myDropdown').hide();
            }
        }
    })
    $('.menu').click(() => {
        $(' nav').toggle(500);
    })
}) // end doc ready