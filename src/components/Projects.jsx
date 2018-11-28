import React from 'react';
import { Grid, GridCol } from 'griz';
import Header from './Header';
import List from './List';
import Button from './Button';
import { FloatRight, LineDivide, Avatar } from './Util';

const Projects = () => (
  <React.Fragment>
    <Header>
      <li>Manage Projects</li>
      <li>me@gmail.com</li>
      <li>Logout</li>
    </Header>
    <Grid responsiveSm gutterWidth="60">
      <GridCol column="70">
        <Grid gutterless>
          <GridCol>
            <h4>My Projects</h4>
          </GridCol>
          <GridCol>
            <FloatRight>
              <Button type="button">Create</Button>
            </FloatRight>
          </GridCol>
        </Grid>
        <List>
          <li>
            <LineDivide spaced>
              <h4>Project Name</h4>
              <span role="button">Delete</span>
            </LineDivide>
          </li>
          <li>
            <LineDivide spaced>
              <h4>Project Name</h4>
              <span role="button">Delete</span>
            </LineDivide>
          </li>
        </List>
      </GridCol>
      <GridCol>
        <Grid gutterless>
          <GridCol>
            <h4>Active Users</h4>
          </GridCol>
        </Grid>
        <List>
          <li>
            <LineDivide>
              <Avatar src="http://placehold.it/40" alt="img" />
              <h5>me2@gmail.com</h5>
            </LineDivide>
          </li>
          <li>
            <LineDivide>
              <Avatar src="http://placehold.it/40" alt="img" />
              <h5>me2@gmail.com</h5>
            </LineDivide>
          </li>
          <li>
            <LineDivide>
              <Avatar src="http://placehold.it/40" alt="img" />
              <h5>me2@gmail.com</h5>
            </LineDivide>
          </li>
          <li>
            <LineDivide>
              <Avatar src="http://placehold.it/40" alt="img" />
              <h5>me2@gmail.com</h5>
            </LineDivide>
          </li>
          <li>
            <LineDivide>
              <Avatar src="http://placehold.it/40" alt="img" />
              <h5>me2@gmail.com</h5>
            </LineDivide>
          </li>
        </List>
      </GridCol>
    </Grid>
  </React.Fragment>
);


export default Projects;
