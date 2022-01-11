import * as React from 'react';
import * as ReactDOM from 'react-dom';


const App: React.FC = () => <div>Starting point!</div>

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementsByTagName('body')[0]
);