import { CSSProperties, PropsWithChildren } from "react";

type NavigationProps = PropsWithChildren & {};

// TODO

const Navigation = ({ children }: NavigationProps) => {
  const styleNavigation: CSSProperties = {
    width: "100%",
    display: "inline-flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  return (
    <nav>
      <div style={styleNavigation}>{children}</div>
    </nav>
  );
};

export default Navigation;
