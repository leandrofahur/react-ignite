import { Comment } from "../Comment/Comment";
import { PaperPlaneTilt } from "phosphor-react";
import styles from "./Post.module.css";
import { Avatar } from "../Avatar/Avatar";

export function Post(props) {
  const { author, content, publishedAt } = props;
  const { name, role, avatar_url } = author;

  const publishedAtFormatted = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(publishedAt);

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
        <time title={publishedAtFormatted} dateTime={publishedAtFormatted}>
          {publishedAtFormatted}
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
