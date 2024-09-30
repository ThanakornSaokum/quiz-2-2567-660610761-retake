"use client";
import { PostOwnerProps } from "@/libs/types";
import { comments } from "@/libs/comments";
import PostOwner from "@/components/PostOwnner";
import Comment from "@/components/Comment";

export default function Home() {

  const postOwner: PostOwnerProps = {
    userImagePath: "/profileImages/handsomeman.jpg",
    username: "Thanakon Saokham 660610761",
    commentText: "Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207",
    likeNum: 100,
  }

  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#18191A" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px", backgroundColor: "#242526" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm"
      >
        {/* Post Owner Example*/}
        <PostOwner {...postOwner} />

        {/* Comment Example */}
        {comments.map((comment) => (<Comment key = {comment.username} {...comment}/>) )}

        {/* Reply Example */}


        {/* map-loop render Comment component here */}
      </div>
    </div>
  );
}
