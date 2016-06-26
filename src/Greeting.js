import React from 'react';
import styles from './Greeting.css';

const Greeting = React.createClass({
  render: function() {
    return (
      <div className={styles.container}>

        <h1 className={styles.title}>Hello Oskar!</h1>

      </div>
    );
  }
})
export default Greeting;
