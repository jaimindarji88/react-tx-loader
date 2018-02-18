import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Widget, {App} from './App';
import registerServiceWorker from './registerServiceWorker';

export default Widget;


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
