import styles from "./Avatar.module.css";

export function Avatar(props) {
  const { hasBorder = true, src } = props;

  return (
    <img
      className={hasBorder ? styles.avatar : styles.avatarWithoutBorder}
      src={src}
      alt="Profile image"
    />
  );
}
