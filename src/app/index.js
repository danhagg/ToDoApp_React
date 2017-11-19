var React = require('react');

// react DOM module
var ReactDOM = require('react-dom');

// Create component
// ES6 way or React way. This way is ES6??
// multiple tags must be nested in a SINGLE parent tag to work
class ToDo extends React.Component {
  render () {
    return (
      <div>
        <h1>Should I stay?</h1>
        <p>Or should I go now?</p>
      </div>
    );
  }
}

// Put component into html with react DOM module
// And output to the index.html to the handle app
const app = document.getElementById('app');
ReactDOM.render(<ToDo />, app);
