import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Routes from './routes';
import './common/less/index.less';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
)
