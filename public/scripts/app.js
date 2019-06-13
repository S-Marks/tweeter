// calculate time curtosy of steven w
function whatTime(date) {

    var seconds = Math.floor((new Date() - date) / 1000);
    var interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
        return interval + " years ago";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
        return interval + " months ago";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
        return interval + " days ago";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
        return interval + " hours ago";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
        return interval + " minutes ago";
    }
    return Math.floor(seconds) + " seconds ago";
}


$(document).ready(function () {

    function createTweetElement(tweetData) {
        const user = $("<article>");
        const header = $("<header>").appendTo(user);
        $("<img>")
            .attr("src", tweetData.user.avatars.small)
            .appendTo(header);
        $("<h2>")
            .text(tweetData.user.name)
            .appendTo(header);
        $("<span>")
            .text(tweetData.user.handle)
            .appendTo(header);
        const content = $("<section>").appendTo(user);
        $("<p>")
            .text(tweetData.content.text)
            .appendTo(content);
        const footer = $("<footer>").appendTo(user);
        $("<hr>").appendTo(footer);
        $("<span>")
            .text(whatTime(tweetData.created_at))
            .appendTo(footer);
        return user;
    }

    function renderTweets(data) {
        for (let tweet of data) {
            $(".tweet").prepend(createTweetElement(tweet));
        }
    }

    $('#new-tweet').on('submit', (event) => {
        event.preventDefault();
        let charCount = $("textArea").val().length;

        $(".error").hide();
        if (!charCount) {
            $(".error").slideDown("slow").text("Invalid Submission").hide();
        } else if (charCount > 140) {
            $(".error").slideDown("slow").text("Too many characters.").hide();
        } else {
            $.post('/tweets', $('#new-tweet').serialize(), () => {
                loadTweets();
            })
        }
    })

    function loadTweets() {
        $.getJSON('/tweets', (tweets) => {
            const $tweet = $('.tweet');
            $tweet.empty();
            renderTweets(tweets);
        })
    }
    loadTweets();
});