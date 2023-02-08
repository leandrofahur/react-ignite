import { ImgHTMLAttributes } from "react";
import styles from "./Avatar.module.css";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

export function Avatar(props: AvatarProps) {
  const { hasBorder = true, ...imgProps } = props;

  return (
    <img
      className={hasBorder ? styles.avatar : styles.avatarWithoutBorder}
      {...imgProps}
    />
  );
}
