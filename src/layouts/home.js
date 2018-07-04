import "semantic-ui-css/semantic.min.css";
import React from "react";
import { MainNavigation } from "../components/global/MainNavigation";
import { MainFooter } from "../components/global/MainFooter";
import { Container } from "./default";

export const HomeLayout = props => (
  <>
    <MainNavigation />
    <Container>{props.children}</Container>
    <MainFooter fixed />
  </>
);
