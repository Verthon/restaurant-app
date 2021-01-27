import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorkerRegistration.register();

reportWebVitals();
