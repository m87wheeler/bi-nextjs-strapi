import Link from "next/link";
import * as React from "react";
import { isExternalUrl } from "../../../utils";

interface Props {
  children?: React.ReactNode;
  href?: string;
  blank?: boolean;
}

const LinkType = ({ href, blank = true, children }: Props) => {
  if (!href) return <>{children}</>;

  if (isExternalUrl(href)) {
    return (
      <a href={href} target={blank ? "_blank" : ""} rel="noopener">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} passHref>
      <div style={{ cursor: "pointer" }}>{children}</div>
    </Link>
  );
};

export default LinkType;
