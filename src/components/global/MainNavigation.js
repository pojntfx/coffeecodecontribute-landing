import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "gatsby";
import styled from "styled-components";

export const MainNavigation = () => (
  <MainMenu fixed="top" borderless>
    <Menu.Item as={Link} to="/" content="CoffeeCodeContribute" />
    <Menu.Menu position="right">
      <Menu.Item
        content="Prerequisites"
        icon="laptop"
        as={Link}
        to="/prerequisites"
        activeClassName="active"
      />
      <Menu.Item
        content="Docs"
        icon="book"
        as={Link}
        to="/docs"
        activeClassName="active"
      />
      <Menu.Item
        content="Culture"
        icon="flag"
        as={Link}
        to="/culture"
        activeClassName="active"
      />
      <Menu.Item
        content="People"
        icon="group"
        as={Link}
        to="/people"
        activeClassName="active"
      />
      <Menu.Item
        content="GitLab"
        icon="gitlab"
        as={Link}
        to="/gitlab"
        activeClassName="active"
      />
    </Menu.Menu>
  </MainMenu>
);

export const MainMenu = styled(Menu)`
  overflow-x: auto;
`;
