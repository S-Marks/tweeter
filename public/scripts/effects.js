$(document).ready(function () {
    $(".new-tweet").hide();

    $("#compose").click(function () {
        $(".new-tweet").slideToggle("slow", () => {
            $("textArea").focus().select();
        });
    })

})