// You can define interfaces for all React components here.
// Do not forget to export properly.

interface PostOwnerProps {
    userImagePath: string;
    username: string;
    commentText: string;
    likeNum: number;
}
export type { PostOwnerProps };

interface CommentProps {
    userImagePath: string;
    username: string;
    commentText: string;
    likeNum: number;
    replies: ReplyProps[];
}
export type { CommentProps };

interface ReplyProps {
    userImagePath: string;
    username: string;
    replyText: string;
    likeNum: number;
}
export type { ReplyProps };
