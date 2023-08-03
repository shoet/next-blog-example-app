import Navigation from "../Navigation";
import NavigationItem from "../NavigationItem";

const Header = () => {
  const items = [
    { href: "#", content: "page1" },
    { href: "#", content: "page2" },
    { href: "#", content: "page3" },
  ];

  return (
    <header>
      <Navigation>
        {items.map((i) => (
          <NavigationItem href={i.href} content={i.content} />
        ))}
      </Navigation>
    </header>
  );
};

export default Header;
