import React, { Component } from 'react';
import { Provider } from 'react-redux';
import SchemaParserDemo from 'components/SchemaParserDemo';
import store from 'stores';

class Plugin extends Component {
  static displayName = 'SchemaParserDemoPlugin';

  /**
   * Connect the Plugin to the store and render.
   *
   * @returns {React.Component} The rendered component.
   */
  render() {
    return (
      <Provider store={store}>
        <SchemaParserDemo />
      </Provider>
    );
  }
}

export default Plugin;
