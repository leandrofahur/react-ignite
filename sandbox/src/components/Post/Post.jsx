import { Comment } from "../Comment/Comment";
import { PaperPlaneTilt } from "phosphor-react";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/46628080?v=4"
            alt="Profile image"
          />
          <div className={styles.authorInfo}>
            <strong>Leandro Machado</strong>
            <span>Software Engineer</span>
          </div>
        </div>
        <time title="December 28th, 2022 at 7:21PM" dateTime="2022-12-28">
          Published 1h ago
        </time>
      </header>
      <div className={styles.content}>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <p>
          Recusandae repellat accusantium error, vel placeat pariatur, dolorum
          molestias illo numquam odio quasi voluptatem unde. Laborum cum dolorum
          fugit quos?
        </p>
        <p>Doloremque, nulla.</p>
        <p>
          <a href="#">https://www.lipsum.com/</a>
        </p>
        <p>
          <a href="#">#lorem</a> <a href="#">#ml</a> <a href="#">#ai</a>{" "}
          <a href="#">#nlp</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Leave a comment</strong>
        <textarea placeholder="What are you thinking?" />
        <footer>
          <button type="submit">
            <PaperPlaneTilt size={20} />
            <span>Send</span>
          </button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
