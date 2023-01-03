import CommentedPicture from "../assets/images/image-chess.webp"

export const posts = [
    {
        id: 0,
        action: "reacted-post",
        description: "My first tournament today!",
        time: "1m ago"
    },
    {
        id: 1,
        action: "follow",
        time: "5m ago"
    },
    {
        id: 2,
        action: "joined-group",
        description: "Chess Club",
        time: "1 day ago"
    },
    {
        id: 3,
        action: "sent-message",
        message: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and " +
            "I'm already having lots of fun and improving my game.",
        time: "5 days ago"
    },
    {
        id: 4,
        action: "comment-picture",
        picture: CommentedPicture,
        time: "1 week ago"
    },
    {
        id: 5,
        action: "reacted-post",
        description: "5 end-game strategies to increase your win rate",
        time: "2 weeks ago"
    },
    {
        id: 6,
        action: "left-group",
        description: "Chess Club",
        time: "2 weeks ago"
    }
]