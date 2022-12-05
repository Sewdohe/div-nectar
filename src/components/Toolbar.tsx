import React from "react";
import { Navbar, Text } from "@nextui-org/react";

const links = [
  {
    name: 'Home',
    url: '/'
  },
  {
    name: 'Blog',
    url: '/blog'
  },
]

export function Toolbar() {
  return (
      <Navbar maxWidth={'fluid'} isBordered variant={'sticky'}>
        <Navbar.Brand>
          <Text b color="inherit" hideIn="xs">
            DivNectar
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs">
          {links.map(l => <Navbar.Link key={l.name} href={l.url}>{l.name}</Navbar.Link>)}
        </Navbar.Content>
      </Navbar>
  )
}
