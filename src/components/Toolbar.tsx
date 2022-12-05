import React from "react";
import { Navbar, Text, Link as NextUILink } from "@nextui-org/react";
import { Link } from "gatsby-link";

const links = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Blog",
    url: "/blog",
  },
];

export function Toolbar() {
  return (
    <Navbar maxWidth={"fluid"} isBordered variant={"sticky"}>
      <Navbar.Brand>
        <Navbar.Toggle css={{marginRight: '0.5rem'}} aria-label="toggle navigation" />
        <Text b color="inherit">
          DivNectar
        </Text>
      </Navbar.Brand>
      <Navbar.Content hideIn="xs">
        {links.map((l) => (
          <Navbar.Link key={l.name} href={l.url}>
            {l.name}
          </Navbar.Link>
        ))}
      </Navbar.Content>
      <Navbar.Collapse>
        {links.map((item) => (
          <Navbar.CollapseItem key={item.name}>
            <NextUILink
              color="inherit"
              style={{
                minWidth: "100%",
              }}
              as={Link}
              to={item.url}
              >
              {item.name}
            </NextUILink>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
}
