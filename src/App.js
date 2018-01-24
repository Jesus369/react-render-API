import React, { Component } from 'react';
import {BaseLayout} from './components/Baselayout'
import {News} from './components/News'

class App extends Component {
  render() {
    return (
      <div>
        <BaseLayout>
          <News/>
        </BaseLayout>
      </div>
    );
  }
}

export default App;
