import { useState } from "react";
import { Avatar } from "../Avatar/Avatar";
import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment(props) {
  const { content, onDeleteComment } = props;

  const [likeCount, setLikeCount] = useState(0);

  const handleDeleteComment = () => {
    onDeleteComment(content);
  };

  const handleLikeComment = () => {
    setLikeCount((state) => {
      return state + 1;
    });
  };

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://avatars.githubusercontent.com/u/46628080?v=4"
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Leandro Machado</strong>
              <time title="December 28th, 2022 at 7:54PM" dateTime="2022-12-28">
                Published 1h ago
              </time>
            </div>
            <button title="Delete comment button" onClick={handleDeleteComment}>
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button title="Like button" onClick={handleLikeComment}>
            <ThumbsUp size={20} />
            Like <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
