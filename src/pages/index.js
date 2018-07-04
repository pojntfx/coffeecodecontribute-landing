import React from "react";
import { HomeLayout } from "../layouts/home";
import { Segment, Grid, Header, Icon, Button } from "semantic-ui-react";
import styled from "styled-components";
import { Link } from "gatsby";

export default () => (
  <HomeLayout>
    <Segment>
      <IconGrid centered colums="equal" stackable>
        <Grid.Row>
          <Grid.Column width={5}>
            <Header as="h2" icon textAlign="center">
              <Icon name="coffee" />
              Coffee
            </Header>
          </Grid.Column>
          <Grid.Column width={5}>
            <Header as="h2" icon textAlign="center">
              <Icon name="code" />
              Code
            </Header>
          </Grid.Column>
          <Grid.Column width={6}>
            <Header as="h2" icon textAlign="center">
              <Icon name="slideshare" />
              Contribute
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Header as="h1" textAlign="center">
            Free/Libre Open Source Software Bootcamp
          </Header>
        </Grid.Row>
        <ActionsRow textAlign="right">
          <Button as={Link} to="/docs/getting-started/" primary>
            <Icon name="rocket" />
            Get started
          </Button>
          <Button
            as="a"
            href="https://gitlab.com/pojntfx/coffeecodecontribute-landing"
            secondary
          >
            <Icon name="gitlab" />
            Browse our sources
          </Button>
        </ActionsRow>
      </IconGrid>
    </Segment>
  </HomeLayout>
);

const IconGrid = styled(Grid)`
  min-width: 100%;
  padding: 5rem !important;
`;

const ActionsRow = styled(Grid.Row)`
  padding-top: 2rem !important;
`;
