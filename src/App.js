import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import {
  Header,
  Page,
  Content,
  Footer,
  NewsItem,
  PageNewsList
} from './components';

//<Route path="/item/:itemId" component={NewsItem} />

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Page className="page">
          <div>
            <Header className="header" />
            <Content>
              <Switch>
                <Route exact path="/" component={PageNewsList} />
                <Route
                  path="/item/:itemId"
                  render={({ match }) => <NewsItem id={match.params.itemId} />}
                />
              </Switch>
            </Content>
          </div>
          <Footer />
        </Page>
      </BrowserRouter>
    );
  }
}

export default App;
