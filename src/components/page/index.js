import React from "react";

import "./styles.css";

import { Grid, Row, Col } from "@nordnet/grid";

export const Page = ({ children }) => (
  <Grid>
    <Row>
      <Col xs={12}>{children}</Col>
    </Row>
  </Grid>
);
