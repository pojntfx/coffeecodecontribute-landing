import "semantic-ui-css/semantic.min.css";
import React from "react";
import { MainNavigation } from "../components/global/MainNavigation";
import { MainFooter } from "../components/global/MainFooter";
import { Container as OriginalContainer } from "./default";
import styled from "styled-components";
import { Head } from "./default";

export const HomeLayout = props => (
  <>
    <Head />
    <MainNavigation />
    <Container>{props.children}</Container>
    <MainFooter fixed />
  </>
);

const Container = styled(OriginalContainer)`
  min-height: 100vh;
  display: flex !important;
  justify-content: center;
  align-items: center;
  padding-bottom: 5.5rem; /* Since we have a fixed footer */
`;
