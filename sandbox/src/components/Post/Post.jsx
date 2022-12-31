import React, { useState } from "react";
import { Comment } from "../Comment/Comment";
import {
  getDateFormatted,
  getNumberOfDaysFromCurrentDate,
} from "../../utils/dateFormatter";

import { PaperPlaneTilt } from "phosphor-react";
import { Avatar } from "../Avatar/Avatar";

import styles from "./Post.module.css";

export function Post(props) {
  const { author, content, publishedAt } = props;
  const { name, role, avatar_url } = author;

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const publishedAtFormatted = getDateFormatted(publishedAt);
  const publishedAtTimeDifferenceFormatted =
    getNumberOfDaysFromCurrentDate(publishedAt);

  const handleSubmitToCreateNewComment = (event) => {
    event.preventDefault();
    setComments([...comments, newComment]);
    setNewComment("");
  };

  const handleNewComment = (event) => {
    event.target.setCustomValidity("");
    setNewComment(event.target.value);
  };

  const deleteComment = (commentToRemove) => {
    const commentsFilteredByTheDeletedOne = comments.filter(
      (comment) => comment !== commentToRemove
    );
    setComments(commentsFilteredByTheDeletedOne);
  };

  const handleInvalidNewComment = (event) => {
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
