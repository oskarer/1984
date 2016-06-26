import React from 'react';
import ReactFireMixin from 'reactfire';

const App = React.createClass({
  mixins: [ReactFireMixin],
  componentWillUpdate: function(nextProps) {
    console.log(nextProps)
  },
  componentWillMount: function() {
    var ref = firebase.database().ref("items");
    this.bindAsArray(ref, "items");
  },

  render: function() {
    const { items } = this.state;
    console.log(items)
    return (
      <h1>Hello, world.</h1>
    );
  }
})
export default App;
