// calculate time curtosy of steven w
function time(ts) {

    const d = new Date();
    const nowTs = Math.floor(d.getTime() / 1000);
    const seconds = nowTs - ts;
    if (seconds > 2 * 24 * 3600) {
        return "A few days ago";
    }
    if (seconds > 24 * 3600) {
        return "Yesterday";
    }
    if (seconds > 3600) {
        return "A few hours ago";
    }
    if (seconds > 1800) {
        return "Half an hour ago";
    }
    if (seconds > 60) {
        return Math.floor(seconds / 60) + " minutes ago";
    }
    return "A long time ago"
}

$(document).ready(function () {

    const data = [
        {
            "user": {
                "name": "Newton",
                "avatars": {
                    "small": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
                    "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
                    "large": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
                },
                "handle": "@SirIsaac"
            },
            "content": {
                "text": "If I have seen further it is by standing on the shoulders of giants"
            },
            "created_at": 1461116232227
        },
        {
            "user": {
                "name": "Descartes",
                "avatars": {
                    "small": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
                    "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
                    "large": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
                },
                "handle": "@rd"
            },
            "content": {
                "text": "Je pense , donc je suis"
            },
            "created_at": 1461113959088
        },
        {
            "user": {
                "name": "Johann von Goethe",
                "avatars": {
                    "small": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
                    "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
                    "large": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
                },
                "handle": "@johann49"
            },
            "content": {
                "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
            },
            "created_at": 1461113796368
        }
    ];

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
        $("<span>")
            .text(time(tweetData.created_at))
            .appendTo(footer);
        return user;
    }

    function renderTweets(data) {
        for (let tweet of data) {
            $(".tweet").append(createTweetElement(tweet));
        }
    }

    renderTweets(data);
});