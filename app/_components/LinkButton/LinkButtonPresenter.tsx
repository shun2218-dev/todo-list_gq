import Link from "next/link";
import { memo } from "react";
import type { FC } from "react";
import styles from "./LinkButton.module.scss";
import { Sizetype } from "./LinkButtonContainer";

type Props = {
  linkText: string;
  href: string;
  variant: "contained" | "outlined";
  size: Sizetype;
};

const LinkButtonPresenterMemo: FC<Props> = ({
  linkText,
  href,
  variant,
  size,
}) => {
  return (
    <div
      className={[styles["wrapper"], styles[variant], styles[size]].join(" ")}
    >
      <Link href={href} className={styles["link"]}>
        {linkText}
      </Link>
    </div>
  );
};

const LinkButtonPresenter = memo(LinkButtonPresenterMemo);
export { LinkButtonPresenter };
