import { memo } from "react";
import type { FC } from "react";
import { LinkButtonPresenter } from "./LinkButtonPresenter";

const SizeType = {
  small: "sm",
  medium: "md",
  large: "lg",
} as const;

export type Sizetype = (typeof SizeType)[keyof typeof SizeType];

type Props = {
  linkText: string;
  href: string;
  variant?: "contained" | "outlined";
  size?: Sizetype;
};

const LinkButtonContainerMemo: FC<Props> = ({
  linkText,
  href,
  variant = "contained",
  size = "md",
}) => {
  return (
    <LinkButtonPresenter
      linkText={linkText}
      href={href}
      variant={variant}
      size={size}
    />
  );
};

const LinkButtonContainer = memo(LinkButtonContainerMemo);
export { LinkButtonContainer };
