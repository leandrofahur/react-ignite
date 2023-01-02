import styles from "./Avatar.module.css";

type AvatarProps = {
  hasBorder?: boolean;
  src: string;
  alt?: string;
};

export function Avatar(props: AvatarProps) {
  const { hasBorder = true, src } = props;

  return (
    <img
      className={hasBorder ? styles.avatar : styles.avatarWithoutBorder}
      src={src}
      alt="Profile image"
    />
  );
}
