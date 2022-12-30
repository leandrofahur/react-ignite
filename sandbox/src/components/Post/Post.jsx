import { Comment } from "../Comment/Comment";
import { PaperPlaneTilt } from "phosphor-react";
import styles from "./Post.module.css";
import { Avatar } from "../Avatar/Avatar";

export function Post(props) {
  const { author, content, publishedAt } = props;
  const { name, role, avatar_url } = author;

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
        <time title="December 28th, 2022 at 7:21PM" dateTime="2022-12-28">
          Published 1h ago
        </time>
      </header>
      <div className={styles.content}>
        {content.map(({ type, content }) =>
          type === "paragraph" ? (
            <p>{content}</p>
          ) : (
            <p>
              <a href="#">{content}</a>
            </p>
          )
        )}
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
