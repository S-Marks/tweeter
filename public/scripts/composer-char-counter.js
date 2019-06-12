$(document).ready(function () {
    const maxChar = 140;
    $(".counter").text(maxChar);

    $("textArea").on("input", function (event) {
        let char = $(this).val().length;
        let counter = maxChar - char;
        if (counter < 0) {
            $(".counter").css("color", "red");
        }
        $("textarea").siblings(".counter").text(counter);
    });
});