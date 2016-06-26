import React from 'react';
import styles from './App.css';

import Clock from './Clock.js'
import Greeting from './Greeting.js'

const App = React.createClass({
  render: function() {
    return (
      <div className={styles.container}>
        <Greeting />
        <Clock />
      </div>
    );
  }
})
export default App;
