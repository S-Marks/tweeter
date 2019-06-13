$(document).ready(function () {

    //menu bar slide
    $(".new-tweet").hide();

    $("#compose").click(function () {
        $(".new-tweet").slideToggle("slow", () => {
            $("textArea").focus().select();
        });
    })

})