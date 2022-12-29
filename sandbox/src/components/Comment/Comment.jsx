import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://picsum.photos/200.webp" alt="Profile Image" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Leandro Machado</strong>
              <time title="December 28th, 2022 at 7:54PM" dateTime="2022-12-28">
                Published 1h ago
              </time>
            </div>
            <button title="Delete comment button">
              <Trash size={24} />
            </button>
          </header>
          <p>Excellent!!!</p>
        </div>
        <footer>
          <button title="Like button">
            <ThumbsUp size={20} />
            Like <span>21</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
