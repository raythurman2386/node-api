import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import App from './App';

const AppWithRouter = withRouter(App);

const client = new ApolloClient({
  uri: process.env.CLIENT_URL || 'http://localhost:8000/'
});

ReactDOM.render(
  <Router>
    <ApolloProvider client={client}>
      <AppWithRouter />
    </ApolloProvider>
  </Router>,
  document.getElementById('root')
);
