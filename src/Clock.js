import React from 'react';
import styles from './Clock.css';

const Greeting = React.createClass({
  componentWillMount() {
    this.setTime();
    setInterval(this.setTime, 300)
  },
  setTime() {
    const today = new Date();
    const hours = today.getHours();
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();
    this.setState({ hours, minutes, seconds });
  },
  render: function() {
    const { hours, minutes, seconds } = this.state;
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>{hours}:{minutes}</h1>
      </div>
    );
  }
})
export default Greeting;
