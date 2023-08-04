import { CSSProperties } from "react";
import Link, { LinkProps } from "next/link";

type NavigationItemProps = LinkProps & {
  content: string;
};

const NavigationItem = (props: NavigationItemProps) => {
  const styleNavigationItem: CSSProperties = {
    display: "inline",
    fontSize: "18px",
  };

  return (
    <div className="nav" style={styleNavigationItem}>
      <Link href={props.href}>{props.content}</Link>
    </div>
  );
};

export default NavigationItem;
