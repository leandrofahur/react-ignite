import React, { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { Comment } from "../Comment/Comment";
import {
  getDateFormatted,
  getNumberOfDaysFromCurrentDate,
} from "../../utils/dateFormatter";

import { PaperPlaneTilt } from "phosphor-react";
import { Avatar } from "../Avatar/Avatar";

import styles from "./Post.module.css";

type PostProps = {
  author: {
    name: string;
    role: string;
    avatar_url: string;
  };
  content: [
    {
      type: "paragraph" | "link";
      content: string;
    }
  ];
  publishedAt: Date;
};

export function Post(props: PostProps) {
  const { author, content, publishedAt } = props;
  const { name, role, avatar_url } = author;

  const [comments, setComments] = useState([""]);
  const [newComment, setNewComment] = useState("");

  const publishedAtFormatted = getDateFormatted(publishedAt);
  const publishedAtTimeDifferenceFormatted =
    getNumberOfDaysFromCurrentDate(publishedAt);

  const handleSubmitToCreateNewComment = (event: FormEvent) => {
    event.preventDefault();
    setComments([...comments, newComment]);
    setNewComment("");
  };

  const handleNewComment = (event: ChangeEvent<HTMLTextAreaElement>) => {
    event.target.setCustomValidity("");
    setNewComment(event.target.value);
  };

  const deleteComment = (commentToRemove: string) => {
    const commentsFilteredByTheDeletedOne = comments.filter(
      (comment) => comment !== commentToRemove
    );
    setComments(commentsFilteredByTheDeletedOne);
  };

  const handleInvalidNewComment = (
    event: InvalidEvent<HTMLTextAreaElement>
  ) => {
    event.target.setCustomValidity("The comment box cannot be empty!");
  };

  const isNewCommentEmpty = newComment.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={avatar_url} />
          <div className={styles.authorInfo}>
            <strong>{name}</strong>
            <span>{role}</span>
          </div>
        </div>
        <time title={publishedAtFormatted} dateTime={publishedAt.toISOString()}>
          {`Publicado há ${publishedAtTimeDifferenceFormatted} dias`}
        </time>
      </header>
      <div className={styles.content}>
        {content.map(({ type, content }) =>
          type === "paragraph" ? (
            <p key={content}>{content}</p>
          ) : (
            <p key={content}>
              <a href="#">{content}</a>
            </p>
          )
        )}
      </div>

      <form
        className={styles.commentForm}
        onSubmit={handleSubmitToCreateNewComment}
      >
        <strong>Leave a comment</strong>
        <textarea
          name="comment"
          placeholder="What are you thinking?"
          value={newComment}
          onChange={handleNewComment}
          onInvalid={handleInvalidNewComment}
          required
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            <PaperPlaneTilt size={20} />
            <span>Send</span>
          </button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map((comment) => (
          <Comment
            key={comment}
            content={comment}
            onDeleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  );
}
