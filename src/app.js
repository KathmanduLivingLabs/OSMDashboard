var React = require('react');
var App = require('./components/App');

require('./index.html');

React.render(<App />, document.body);

window.React = React;
