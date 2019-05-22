import React, { Component,Fragment }from 'react';
import { Container, Row, Col } from 'reactstrap';

import Post from './components/Post';
import Header from './components/Header';

const App = () => (
  <Fragment>
    <Header />

    <main className="my-5 py-5">
      <Container className="px-0">
        <Row >
          <Col xs={{ order: 1 }} md={{ size: 12 }} tag="section" >
            <Post />
          </Col>


        </Row>
      </Container>
    </main>

  </Fragment>
);
export default App;
