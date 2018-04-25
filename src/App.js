import React, { Component } from 'react';
import { Header, Page, Content, Footer } from './components';

class App extends Component {
  render() {
    return (
      <div>
      <Page>
        <Header />
        <Content />
        <Footer />
      </Page>
      </div>
    );
  }
}

export default App;
