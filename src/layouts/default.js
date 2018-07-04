import "semantic-ui-css/semantic.min.css";
import React from "react";
import { Container } from "semantic-ui-react";

export const DefaultLayout = props => <Container>{props.children}</Container>;
