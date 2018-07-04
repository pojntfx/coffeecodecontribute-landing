import "semantic-ui-css/semantic.min.css";
import React from "react";
import { Container as OriginalContainer, Segment } from "semantic-ui-react";
import { MainNavigation } from "../components/global/MainNavigation";
import { MainFooter } from "../components/global/MainFooter";
import styled from "styled-components";
import { injectGlobal } from "styled-components";
import BackgroundImage from "../../assets/start-bg.jpg";

injectGlobal`
#___gatsby {
  background: url(${BackgroundImage})!important;
  background-size: cover!important;
  min-height: 100%;
}
`;

export const DefaultLayout = props => (
  <>
    <MainNavigation />
    <Container>
      <Segment>{props.children}</Segment>
    </Container>
    <MainFooter />
  </>
);

export const Container = styled(OriginalContainer)`
  padding-top: 4rem;
`;
